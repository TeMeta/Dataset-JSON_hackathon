import ijson
import json
import pandas as pd
import time
import requests

# Stream Dataset-JSON into Pandas data frame
def extract_json_rows(file_path, dataset, rows=10):
    content = []
    with open(file_path, 'rb') as input_file:
        row_count = 0
        data_target = f'clinicalData.itemGroupData.{dataset}.itemData.item'
        for item in ijson.items(input_file, data_target, use_float=True):
            row_count += 1
            if row_count > rows: break
            content.append(item)
    df_out = pd.DataFrame(content)
    df_out.columns = [v['name'] for v in get_variables_from_dataset(file_path, dataset)]
    return (df_out)

def get_variables_from_dataset(file_path, dataset):
    column_target = f'clinicalData.itemGroupData.{dataset}.items.item'
    content = []
    with open(file_path, 'rb') as input_file:  
        for item in ijson.items(input_file, column_target, use_float=True):
            content.append(item)
        return content

def get_variables_from_define(dataset):
    # url = f'http://localhost:4000/transfer_104ab4/variables?dataset={dataset}'
    url = 'http://localhost:4000/transfer_104ab4/variables'
    response = requests.get(url, {"dataset" : dataset})
    return response.json()

# Run tests
# wget "https://github.com/cdisc-org/DataExchange-DatasetJson/blob/master/examples/sdtm/lb.json?raw=True" -O dataset.json
path_of_big_file = 'dataset.json'

start = time.time()
with open(path_of_big_file, 'rb') as input_file:
    loaded_file = json.load(input_file)
    print(len(loaded_file))
new_df = pd.DataFrame(loaded_file['clinicalData']['itemGroupData']['IG.LB']['itemData'])
new_df.columns = [v['name'] for v in loaded_file['clinicalData']['itemGroupData']['IG.LB']['items']]
end = time.time()
print(f"Whole file: {1000*(end - start)} ms")

start = time.time()
streamed = extract_json_rows(path_of_big_file, 'IG.LB')
print(len(streamed))
end = time.time()
print(f"Parse: {1000*(end - start)} ms")

# Results using repeated example LB file
# ~0.5MB   3488 rows:     Whole File:   90ms    Parse 10 rows: 60ms             
# ~25MB   31392 rows:     Whole File:  280ms    Parse 10 rows: 140ms
# ~280MB 345312 rows:     Whole File: 2580ms    Parse 10 rows: 1310ms
# Interesting that parsing is still slow on the second. Is this due to retrieval of column metadata?
# Try with column names up-front...success!
# ~280MB 345312 rows:     Whole File: 2580ms    Parse 10 rows: 90ms
# Is it worth using column metadata from API? (~300ms worth it for files >50MB)
# Rule of thumb finding: When streaming, it is worth obtaining column metadata separately e.g. over API when file >50MB
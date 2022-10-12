import json

# For benchmarking, create a local large file by multiplying versions of a smaller source file
# Handle with care, and make sure to clean up after yourself
# @examples: grow_dataset_json('lb.json', 'bigger_dummy.json', dataset='IG.LB', factor=10)
def grow_dataset_json(source, target, dataset, factor=10):
    with open(source, 'rb') as input_file:
        loaded_file = json.load(input_file)
        source_items = loaded_file['clinicalData']['itemGroupData'][dataset]['itemData']
        print("Source number of rows: " + len(source_items))

        bigger = loaded_file
        bigger_data = []
        for i in range(1, factor):
            bigger_data.extend(source_items)
        bigger['clinicalData']['itemGroupData']['IG.LB']['itemData'] = bigger_data
        bigger['clinicalData']['itemGroupData']['IG.LB']['records'] = len(bigger_data)

        print(f"Writing {len(bigger_data)} rows to {target}")
        with open(target, 'w') as output_file:
            json.dump(bigger, output_file, ensure_ascii=False, indent=4)
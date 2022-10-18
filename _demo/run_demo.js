/*
* #1: Upload a Define-XML 
* #2: Convert to JSON
* #3: Compact to accessible form via JSON-LD
* #4: Reference it
*/
const jsonld = require('jsonld')
const fs = require('fs');
const ld = require('../src/utils/define_ld_helpers.js')
const helpers = require('../src/utils/helpers.js')
const Jsonix = require('jsonix').Jsonix;
const util = require('util')

const jsonLD = 'http://localhost:4000/transfer_104ab4/define_BS1234_v2#'
const xmlUrl = 'https://raw.githubusercontent.com/cdisc-org/DataExchange-DatasetJson/master/examples/adam/define_2_0.xml'
const xmlPath = '_demo/define_demo.xml'
const dataUrl = 'https://raw.githubusercontent.com/cdisc-org/DataExchange-DatasetJson/master/examples/adam/adsl.json'
const dataPath = '_demo/adsl.json'
const jsonPath = xmlPath.replace('.xml','.json')

async function writeExpandedAndCompacted() {
    define = await ld.defineLD(jsonPath)
    console.log('Define created')
    fs.writeFileSync("_demo/define_demo_compacted.json", JSON.stringify(define, null, 2))
    sample = JSON.parse(fs.readFileSync(dataPath).toString())
    sample["@context"] = jsonLD
    const expanded = await jsonld.expand(sample);
    fs.writeFileSync("_demo/output_expanded.json", JSON.stringify(expanded, null, 2));
    const compacted = jsonld.compact(expanded,
        jsonLD)
        .then(x => {
            fs.writeFileSync("_demo/output_compacted_pretty.json", JSON.stringify(x, null, 2));
            fs.writeFileSync("_demo/output_compacted_small.json", JSON.stringify(x));
        })
    console.log('Wrote define_demo_compacted, output_expanded, output_compacted_pretty, output_compacted_small')
}

// Take a look at output_expanded.json and output_compacted.json
async function setup(){
    await helpers.downloadFile(xmlUrl, xmlPath);
    await helpers.downloadFile(dataUrl, dataPath);
    var mappingSchema = require('../src/utils/define2_1_0.js')['define2_1_0'];
    
    var context = new Jsonix.Context([mappingSchema]);
    var unmarshaller = context.createUnmarshaller();
    
    return unmarshaller.unmarshalFile(xmlPath,
        function (unmarshalled) {
            fs.writeFileSync(
                jsonPath, 
                JSON.stringify(unmarshalled, null, 2), 
                'utf8')
            writeExpandedAndCompacted()
        });    
}

result = setup()


// Test created JSON-LD contexts against Dataset-JSON
const path = require('path')
const ld = require(path.join(module.path, '..', 'src', 'utils', 'define_ld_helpers.js'));
const fs = require('fs');

// const sample = require(path.join(module.path,'..','data','regime1.json'));
//const sample = require(path.join(module.path,'..','test.json'));
const sample = require(path.join(module.path, '..', 'src', 'public', 'transfer_104ab4/DM.json'));

// add context to json
// sample["@context"] = JSON.parse(
//     fs.readFileSync('./src/public/transfer_104ab4/define_BS1234_v2.jsonld')
// );

sample["@context"] = "http://localhost:4000/transfer_104ab4/define_BS1234_v2#"

// sample["@context"] = {
//     "@base": "http://localhost:4000/transfer_104ab4/DM/",
//     "@vocab": "http://localhost:4000/transfer_104ab4/define_BS1234_v2/"
// }

// Take a look at output_expanded.json and output_compacted.json
let dataset_ld
function writeExpandedAndCompacted(sample) {
    dataset_ld = ld.readContext(sample)
        .then(x => {
            console.log(JSON.stringify(x.expanded, null, 2));
            fs.writeFileSync("output_expanded.json", JSON.stringify(x.expanded, null, 2));
            fs.writeFileSync("output_compacted.json", JSON.stringify(x.compacted, null, 2));
        })
}
writeExpandedAndCompacted(sample)

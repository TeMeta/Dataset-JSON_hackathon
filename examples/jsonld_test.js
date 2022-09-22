// Test created JSON-LD contexts against Dataset-JSON
const path = require('path')
const jsonld = require('jsonld')
const fs = require('fs');

const sample = require(path.join(module.path, '..', 'src', 'public', 'transfer_104ab4', 'DM.json'));

sample["@context"] = "http://localhost:4000/transfer_104ab4/define_BS1234_v2#"

// Take a look at output_expanded.json and output_compacted.json
async function writeExpandedAndCompacted(sample) {
    // const json_context = fetch('http://localhost:4000/dataset.jsonld').json()
    const expanded = await jsonld.expand(sample);
    fs.writeFileSync("output_expanded.json", JSON.stringify(expanded, null, 2));
    const compacted = jsonld.compact(expanded, 
        "http://localhost:4000/manifest#")
        .then(x => {fs.writeFileSync("output_compacted.json", JSON.stringify(x, null, 2))})
}
writeExpandedAndCompacted(sample)
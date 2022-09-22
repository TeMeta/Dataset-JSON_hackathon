// Test whether Define reference can be combined with Manifest file via JSON-LD
const path = require('path')
const ld = require(path.join(module.path, '..', 'src', 'utils', 'json_ld_helpers.js'));
const fs = require('fs');
const fetch = require('sync-fetch');

const sample = require(path.join(module.path, '..', 'src', 'public', 'transfer_104ab4', 'DM.json'));

sample["@context"] = "http://localhost:4000/transfer_104ab4/manifest#"

// Take a look at output_expanded.json and output_compacted.json
async function test_sample_with_manifest(sample) {
    ld.readContext(sample)
        .then(x => {
            console.log(JSON.stringify(x.expanded, null, 2));
            fs.writeFileSync("output_expanded.json", JSON.stringify(x.expanded, null, 2));
            fs.writeFileSync("output_compacted.json", JSON.stringify(x.compacted, null, 2));
        })
}
test_sample_with_manifest(sample)

const manifest = fetch('http://localhost:4000/transfer_104ab4/manifest.jsonld').json()

// Take a look at output_expanded.json and output_compacted.json
async function test_manifest_content(manifest) {
    ld.readContext(manifest)
        .then(m => {
            console.log(JSON.stringify(m.expanded, null, 2));
            fs.writeFileSync("output_expanded_manifest.json", JSON.stringify(m.expanded, null, 2));
            fs.writeFileSync("output_compacted_manifest.json", JSON.stringify(m.compacted, null, 2));
        })
}
test_manifest_content(manifest)


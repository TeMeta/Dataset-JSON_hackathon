const jsonld = require('jsonld');
const fetch = require('sync-fetch');

// Interpret a given JSON-LD dataset
// @param sample JSON-LD dataset
// @param return {expanded JSON-LD IRIs, compacted view}
async function readContext(sample) {
    const json_context = fetch('http://localhost:4000/dataset.jsonld').json()
    const expanded = await jsonld.expand(sample);
    const compacted = await jsonld.compact(expanded, json_context);
    return {expanded, compacted}
}


// Take a Dataset-JSON source and prepend context and ID
function addContext(dataset, context, id) {

    // TODO scan initial 3 lines. 
    // if @context not present, add dataset.jsonld
    // if @id not present, add "@id": <source name or path>
    return null
}

module.exports = { readContext }
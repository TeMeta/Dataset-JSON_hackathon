const jsonld = require('jsonld');
const fetch = require('sync-fetch');
const {jsonld2obj, autoSimplifier, mutateGraphKeys} = require("jsonld-object-graph")
var stringify = require('json-stringify-safe');

// Interpret a given JSON-LD dataset
// @param {object} sample JSON-LD dataset
// @return {object} {expanded JSON-LD URIs, compacted view}
async function readContext(sample) {
    const json_context = fetch('http://localhost:4000/dataset.jsonld').json()
    const expanded = await jsonld.expand(sample);
    const compacted = await jsonld.compact(expanded, json_context);
    return {expanded, compacted}
}

// Test JSON-LD to Plain Old Javascript object creator
// @param {object} sample JSON-LD dataset
// @return {object} sample JSON-LD dataset
async function toObject(sample) {
    const graph = await jsonld2obj(sample);
    mutateGraphKeys(autoSimplifier)(graph);
    console.log(graph);
    const fs = require("fs");
    fs.writeFileSync('test.json', stringify(graph, null, 2));
    return graph;
}


// Turn CDISC Dataset-JSON object into a JSON-LD object.
// This is generic. For study-specific specs, provide a custom Define context
// @param {object} CDISC JSON dataset
// @return {object} JSON-LD dataset
function addContext(obj) {
    obj['@context'] = "http://localhost:4000/define#"
    return obj
}

module.exports = { readContext, toObject, addContext }

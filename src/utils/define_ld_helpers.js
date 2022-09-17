const jsonld = require('jsonld');
const fetch = require('sync-fetch');
const {jsonld2obj, autoSimplifier, mutateGraphKeys} = require("jsonld-object-graph")
var stringify = require('json-stringify-safe');

// Interpret a given JSON-LD dataset
// @param sample JSON-LD dataset
// @param return {expanded JSON-LD URIs, compacted view}
async function readContext(sample) {
    const json_context = fetch('http://localhost:4000/dataset.jsonld').json()
    const expanded = await jsonld.expand(sample);
    const compacted = await jsonld.compact(expanded, json_context);
    return {expanded, compacted}
}

async function expand(sample) {
    const expanded = await jsonld.expand(sample);
    console.log(JSON.stringify(expanded, null, 2))
    return expanded;
}

async function compact(sample, context) {
    const compacted = await jsonld.compact(sample, schema);
    console.log(JSON.stringify(compacted, null, 2))
    return compacted;
}

async function toObject(sample) {
    const graph = await jsonld2obj(sample);
    mutateGraphKeys(autoSimplifier)(graph);
    console.log(graph);
    const fs = require("fs");
    fs.writeFileSync('test.json', stringify(graph, null, 2));
    return graph;
}

function addContext(obj) {
    obj['@context'] = "http://localhost:4000/define#"
    return obj
}


// TODO function

module.exports = { readContext, expand, addContext, toObject }
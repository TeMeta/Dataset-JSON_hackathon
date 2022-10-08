const fs = require('fs');
const jsonld = require('jsonld');
const convert = require('./convert.js')
const helpers = require('./helpers.js')
const ld = require('./json_ld_helpers.js')

function addFunctionsToDefineObject(obj){
    // Define-JSON API helper functions
    obj['getDecodeByTerm'] = function (cl, term) {
        try {
            return this["codeList"][cl][0]['codeListItem'][term]
            ['decode']['schema:PropertyValue']['value']
        }
        catch (err) { console.log('Codelist: ' + cl + ' Term: ' + term + err) }
    }

    obj['getTerms'] = function (cl) {
        try { return Object.keys(this['codeList'][cl][0]['codeListItem']) }
        catch (err) { console.log('Codelist not found: ' + cl + ' ' + err) }

    }

    obj['getDatasets'] = function () {
        try { return Object.keys(this['itemGroupDef']) }
        catch (err) { console.log('No datasets found. ' + err) }
    }

    obj['getVariableMetadata'] = function (v) {
        try {
            // Flattens description by assuming only 1 language provided
            // TODO add support for internationalisation and code switching
            let varMetadata = this['itemDef'][v][0]
            varMetadata.description = varMetadata.description['schema:PropertyValue']['value']
            return varMetadata
        }
        catch (err) {
            console.log('Variable metadata not found for ' + v + ': ' + err)
        }
    }

    obj['getMethod'] = function (m) {
        try { return this['methodDef'][m][0]['description']['schema:PropertyValue']['value'] }
        catch (err) { console.log('Method not found: ' + m + ' ' + err) }
    }

    obj['getVariablesForDataset'] = function (ds) {
        try {
            let dsVars = this["itemGroupDef"][ds][0]['itemRef'];
            dsVars = dsVars.map(item =>
                Object.assign({}, item, {
                    derivation:
                        item.hasOwnProperty('methodOID') ?
                            this.getMethod(item.methodOID) : undefined
                })
            );
            return dsVars.map(item =>
                Object.assign({}, item, this.getVariableMetadata(item.itemOID)));
        }
        catch (err) {
            console.log('Could not get variables for dataset [' + ds + ']: ' + err)
        }
    }

    obj['getDecodeByTerm'] = function (cl, term) {
        try {
            return this["codeList"][cl][0]['codeListItem'][term]
            ['decode']['schema:PropertyValue']['value']
        }
        catch (err) { console.log('Codelist: ' + cl + ' Term: ' + term + err) }
    }

    obj['getTerms'] = function (cl) {
        try { return Object.keys(this['codeList'][cl][0]['codeListItem']) }
        catch (err) { console.log('Codelist not found: ' + cl + ' ' + err) }

    }

    obj['getDatasets'] = function () {
        try { return Object.keys(this['itemGroupDef']) }
        catch (err) { console.log('No datasets found. ' + err) }
    }

    obj['getVariableMetadata'] = function (v) {
        try {
            // Flattens description by assuming only 1 language provided
            // TODO add support for internationalisation and code switching
            let varMetadata = this['itemDef'][v][0]
            varMetadata.description = varMetadata.description['schema:PropertyValue']['value']
            return varMetadata
        }
        catch (err) {
            console.log('Variable metadata not found for ' + v + ': ' + err)
        }
    }

    obj['getMethod'] = function (m) {
        try { return this['methodDef'][m][0]['description']['schema:PropertyValue']['value'] }
        catch (err) { console.log('Method not found: ' + m + ' ' + err) }
    }

    obj['getVariablesForDataset'] = function (ds) {
        try {
            let dsVars = this["itemGroupDef"][ds][0]['itemRef'];
            dsVars = dsVars.map(item =>
                Object.assign({}, item, {
                    derivation:
                        item.hasOwnProperty('methodOID') ?
                            this.getMethod(item.methodOID) : undefined
                })
            );
            return dsVars.map(item =>
                Object.assign({}, item, this.getVariableMetadata(item.itemOID)));
        }
        catch (err) {
            console.log('Could not get variables for dataset [' + ds + ']: ' + err)
        }
    }

    return obj
}

// Simplify Define into accessible JS object for apps
// JSON includes reference by OID, access functions and smaller size than .XML
//
// SIDE EFFECTS:
// The expanded and compacted forms of JSON-LD are written for reference
// 1. ./output_expanded_define.json
// 2. ./output_compacted_define.json
async function defineLD(sourceDefineJson, contextRef, debug=true) {
    if (!contextRef) contextRef = 'http://localhost:4000/define_spec_context#'
    console.log('creating Define-LD')

    x = JSON.parse(fs.readFileSync(sourceDefineJson).toString())
    sample = x.value.study[0].metaDataVersion[0]

    // JSON-LD context gives terms unambiguous semantic IRI references
    sample["@context"] = contextRef
    // Set default language for JSON-LD internationalisation
    sample["@context"]["@language"] = "en"
    // Flatten study-level data to root
    sample['studyOID'] = x.value.study[0].oid
    sample['studyName'] = x.value.study[0].globalVariables.studyName.value
    sample['studyDescription'] = x.value.study[0].globalVariables.studyDescription.value
    sample['studyProtocol'] = x.value.study[0].globalVariables.protocolName.value
    sample['metaDataVersionOID'] = x.value.study[0].metaDataVersion[0].oid
    sample['metaDataVersionName'] = x.value.study[0].metaDataVersion[0].name
    sample['metaDataVersionDescription'] = x.value.study[0].metaDataVersion[0].description

    // Expanded context is an RDF graph from which to frame the API views
    const expanded = await ld.customExpand(sample)
    // if (debug) fs.writeFileSync("output_expanded_define.json", JSON.stringify(expanded, null, 2))

    // Reduce the content according to compactor context
    // Unintended changes when 'round-tripping' expansion and compaction of the same
    // context highlight issues due to data loss and ambiguity
    const compactor = JSON.parse(
        fs.readFileSync(module.path + "/../public/define_spec_context.jsonld"))
    const compacted = await jsonld.compact(expanded, compactor);
    helpers.removeKeys(compacted, 'TYPE_NAME')
    // Replace the context with a single reference string
    compacted['@context'] = contextRef

    // Note that stringify does not capture functions. Functions need adding again to stored objects
    // if (debug) fs.writeFileSync("output_compacted_define.json", JSON.stringify(compacted, null, 2))
    return addFunctionsToDefineObject(compacted)
}

// Read a Define-XML file and convert it into a 'smart' JS object
async function defineXML2defineLD(xmlPath) {
    let jsonPath = xmlPath.replace('.xml','.json')
    await convert.xmlToJson(
        xmlPath,
        jsonPath, 
        './define2_1_0.js')
    return define = await defineLD(jsonPath)
}

module.exports = { addFunctionsToDefineObject, defineXML2defineLD, defineLD }
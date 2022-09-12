const Ajv = require("ajv").default
const addFormats = require('ajv-formats').default;
const val = require("../src/utils/validate.js")

// Initialise validation object
// Add meta-schema (compiled schema are validated against meta-schema)
// Note that JSON schema draft 07 is already included by default by ajv

// const draft7MetaSchema = require("ajv/dist/refs/json-schema-draft-07.json")
// ajv.addMetaSchema(draft7MetaSchema)

let ajv = new Ajv({
    strict: false,
    schemaId: 'auto',
    allErrors: true
})

// Add assets needed for compatibility with converted schemas
// draft-04 schemas require migration to draft-07 using
// https://github.com/ajv-validator/ajv-cli
// https://github.com/ajv-validator/json-schema-migrate
addFormats(ajv);
const jsonixXML = require('../schema/jsonix/XMLSchema.json');
ajv.addSchema(jsonixXML, jsonixXML.$id)
const jsonixJsonix = require('../schema/jsonix/Jsonix.json');
ajv.addSchema(jsonixJsonix, jsonixJsonix.$id)


// Specify Schema Library
defineJsonSchema = {
    "name": "define-JSON schema",
    "path": `${module.path}/../schema/jsonix/define2_1_0.json`,
}

odmJsonSchema = {
    "name": "ODM schema",
    "path": `${module.path}/../schema/jsonix/ODM1_3_2.json`,
}

datasetJsonSchema = {
    "name": "dataset-JSON schema",
    "path": `${module.path}/../src/public/dataset.schema.json`
}

const filesToCheck = [
    `${module.path}/../data/define_2_0.json`,
    `${module.path}/../data/ae_example.json`,
    `${module.path}/../data/regime1.json`,
    `${module.path}/../data/regime2.json`,
    `${module.path}/../data/regime3.json`,
    `${module.path}/../data/flat_data_type.json`
]

// Validate things
val.validateFiles(ajv, datasetJsonSchema, filesToCheck)

// // Validate specific file
//val.validateFiles(ajv, defineJsonSchema, [`${module.path}/../data/define_2_0.json`])

// // Under the hood (simple example)
// const mySchema = require(defineJsonSchema.path)
// validate = ajv.compile(mySchema)
// val.validateJsonFile(`${module.path}/../data/define_2_0.json`, validate)
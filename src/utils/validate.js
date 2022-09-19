const fs = require("fs")
const Ajv = require("ajv")

// @param jsonObj: POJO to be validated
// @param objName: descriptive name of object
// @compiled ajv validation function
const validateJson = function (jsonObj, objName, validate) {
    let valid = false;
    valid = validate(jsonObj)
    valid ?
        console.log(`Validated ${objName}`) :
        console.log(`Errors in ${objName}:`)
    validate.errors && console.log(validate.errors)
    return valid;
}

// Wrapper for validateJson to read files into
// @param targetPath: path of JSON file to be validated
// @param validate: compiled ajv validation function
const validateJsonFile = function (targetPath, validate) {
    let valid = false;
    if (!fs.existsSync(targetPath)) {
        console.log(targetPath + ' not found');
        return valid;
    }
    fs.readFile(targetPath, "utf8", (err, jsonString) => {
        const jsonObj = JSON.parse(jsonString)
        valid = validateJson(jsonObj, targetPath, validate)
    })
    return valid;
}

// Test configurable set of files
// Create a validator function from a given ajv instance
// Requires JSON schema v07 (v04 is incompatible, needs converting) 
// @param ajv: ajv validation object
// @param schemaConfig: {name, path}
// @param files: [string] array of files
const validateFiles = function (ajv, schemaConfig, files) {
    // const mySchema =  JSON.parse(fs.readFileSync(schemaConfig.path).toString());
    const mySchema = require(schemaConfig.path)
    validate = ajv.compile(mySchema, mySchema.$id);
    console.log('Validating against ' + schemaConfig.name + ' ' + mySchema.$id)

    typeof(validate) === "undefined" ?
        console.log('Schema not found ' + mySchemaId) :
        validateJson({ 'sanity_check' : 'yes please' }, 'Sanity Check', validate)
        files.forEach((f) => { validateJsonFile(f, validate) })
}

// validateFiles(ajv, datasetJsonSchema, filesToCheck)
module.exports = { validateJson, validateJsonFile, validateFiles }

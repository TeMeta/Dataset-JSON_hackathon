const Jsonix = require('jsonix').Jsonix;
const fs = require('fs')
const util = require('util')

// Unmarshall (convert XML to JSON) a XML file based on its schema
// Any referenced xsd schema must be accessible
//
// @param xmlSource path of file containing XML to convert 
// @param jsonTarget path of target file to create
// @param mapperPath path of mapping .js file
// @return null, conversion side-effect creates .json file 
exports.xmlToJson = util.promisify(function(xmlSource, jsonTarget, mapperPath) {

    var x  = mapperPath.split('/').pop().replace('.js', '')
    var mappingSchema = require(mapperPath)[x];
    
    var context = new Jsonix.Context([mappingSchema]);
    var unmarshaller = context.createUnmarshaller();
    
    return unmarshaller.unmarshalFile(xmlSource,
        // This callback function will be provided
        // with the result of the unmarshalling
        function (unmarshalled) {
            //console.log(unmarshalled)
            jsonString = JSON.stringify(unmarshalled, null, 2)
            fs.writeFile(
                jsonTarget, 
                jsonString, 
                'utf8', 
                function(){
                    //console.log(jsonString)
                    console.log(jsonTarget + " created successfully")
                })
        });    
})
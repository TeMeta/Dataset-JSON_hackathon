// Run this script to create
// * output_expanded_define.json
// * output_compacted_define.json

const ld = require('../src/utils/define_ld_helpers.js');

async function test(xmlPath) {
    const define = await ld.defineXML2defineLD(xmlPath)

    console.log(define.getDatasets())
    // console.log(define.getDecodeByTerm('CL.PARAM_ADQSADAS', 'Word Recognition'))
    // console.log(define.getTerms('CL.PARAM_ADQSADAS'))
    //console.log(define.getVariableMetadata('IT.ADLBHY.TRTP'))
    console.log(define.getVariablesForDataset('IG.ADLBHY'))
    return define
}
console.log(module.path)
test(`./define_example_adam.xml`)
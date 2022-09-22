const path = require('path')
const convert = require(path.join(module.path,'..','src','utils','convert.js'))
const helpers = require(path.join(module.path,'..','src','utils','helpers.js'))

const xmlUrl = 'https://raw.githubusercontent.com/phuse-org/phuse-scripts/master/data/adam/TDF_ADaM_v1.0/define.xml'
const xmlPath = './define_example_adam.xml'

async function downloadAndConvert(){
    await helpers.downloadFile(xmlUrl, xmlPath)
    console.log(xmlPath)

    convert.xmlToJson(
        xmlPath,
        xmlPath.split('/').pop().replace('.xml','.json'), 
        path.join(module.path,'..','src','utils','define2_1_0.js'))
}
downloadAndConvert()
const XMLHttpRequest = require('xhr2')
const fs = require('fs')
const fetch = require('sync-fetch')

exports.readTextfile = function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

exports.downloadFile = (async (url, path) => {
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
      });
  });

exports.modifyObjects = function(obj, key, val, newVal) {
    for (var k in obj) {
        if (!obj.hasOwnProperty(k)) continue;

        const nestedObj = obj[k]

        // recurse through nested JSON
        if (typeof(nestedObj) === 'object' || Array.isArray(nestedObj)) {
            modifyObjects(obj, nestedObj, key)
        }

        if (k == key && nestedObj == val) {
            obj[k] = newVal;
        }
    }
    return obj
}

const getValues = function(array, obj, key) {
    for (var k in obj) {
        if (!obj.hasOwnProperty(k)) continue;
        
        const nestedObj = obj[k]

        // recurse through nested JSON
        if (typeof(nestedObj) === 'object' || Array.isArray(nestedObj)) {
            getValues(array, nestedObj, key)
        }

        if (k == key) {
            array.push(nestedObj);
        }
    }
    return array
}

exports.getUniqueValues = function(obj, key) {
    const values = getValues([], obj, key)
    return values.filter(
        (v, i, a) => a.indexOf(v) === i);
}

// Return paths of data folder
exports.getFileOnly = function (str) {
  return str.split('\\').pop().split('/').pop();
}
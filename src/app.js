// Node server application - experimentation
const express = require("express")
const morgan = require("morgan")
const path = require("path")
const globby = require("globby")
const fs = require("fs")
const cors = require("cors")
const helpers = require("./utils/helpers")
const serveIndex = require("serve-index")
const { application } = require("express")
const ld = require('../src/utils/define_ld_helpers.js');

const app = express()
module.exports = app

// Set this to your client server if testing locally
app.use(
  cors({
    origin: "http://localhost:3000"
  })
)

// log requests in console
app.use(morgan("tiny"))

// Parse request bodies
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Expose public schema files
(async () => {
  const dist = __dirname + '/public';
  app.use(express.static(dist,
    { extensions: ['json', 'jsonld', 'xsd'] }));
  app.use(serveIndex(dist, { 'icons': true }));
})();

// Return data
app.get("/example_ae", (req, res) => {
  res.send(path.join(__dirname, "..", "data", "ae_example.json"));
});

// Return data
app.get("/example_ae_file", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "data", "ae_example.json"));
});

// Return list
app.get("/list_data", (req, res) => {
  (async () => {
    const paths = await globby(path.join(__dirname, "..", "data"));
    res.send(paths.map(helpers.getFileOnly));
  })();
});

// Return file on-demand
app.post("/pull_data", (req, res) => {
  console.log(req.body)
  var filename = (req.body.filename) ?
    req.body.filename :
    "";
  console.log(filename)
  var file = path.join(__dirname, "..", "data", filename)
  fs.existsSync(file) ?
    res.sendFile(file) :
    res.status(400).send(new Error(`'Requested file ${filename} not found'`))
})

// Perform JSONLD compaction
app.post("/compact", (req, res) => {
  console.log('compacting')
    (async () => {
      const compacted =
        await jsonld.compact(req.body.doc, req.body.context);
      console.log(compacted);
      res.send(compacted);
    })();
})


// Access methods for the Define
async function define(){
  d = await ld.defineLD(
  module.path +'/../examples/define_example_adam.json', debug=false)
  return d
}

// Get variable metadata for a given dataset
// ?dataset=IG.ASDL
app.get('/transfer_104ab4/variables', (req, res) => {
  (async () => {
    // This is on-demand using a prepared file
    // Users could also upload Define-XML and convert using 
    // To avoid waits, perform any upload and conversion in the background when Define is chosen or updated
    var define_json_spec = await define()
    var vars = define_json_spec.getVariablesForDataset(req.query.dataset)
    res.send(vars)
  })();
})

// Get all Endpoints that were registered
app.get('/routes', (req, res) => {
  routeList = app._router.stack
    .filter(r => r.route)    // take out all the middleware
    .map(r =>
      Object.keys(r.route.methods).map(k => k.toUpperCase())
      + ' ' + r.route.path)
  res.send(routeList.join("<br />"))
})


// // catch-all (put this at the end of the calls)
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

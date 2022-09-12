// Node server application - experimentation
const express = require("express")
const morgan = require("morgan")
const path = require("path")
const globby = require("globby")
const fs = require("fs")
const cors = require("cors")
const helpers = require("./utils/helpers")
const serveIndex = require("serve-index")

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
  const paths = await globby(__dirname + '/public');
  app.use(express.static(dist,
    { extensions: ['json', 'jsonld', 'xsd'] }));
  app.use(serveIndex(dist, { 'icons': true }));
})();

// Serve views/index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

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

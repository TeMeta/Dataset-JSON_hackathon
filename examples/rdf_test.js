// Serialise Dataset-JSON example file into RDF via expanded JSON-LD
// Look at the outputs created by running this script
// * output_rdf_normalised.json
// * output_rdf_simple.json

const fs = require('fs')
const jsonld = require('jsonld')
const ld = require('../src/utils/define_ld_helpers.js')

async function main() {
  const doc = require('../src/public/output_expanded.json')
  // canonize (normalize) a document using the RDF Dataset Normalization Algorithm
  // (URDNA2015)
  const canonized = await jsonld.canonize(doc, {
    algorithm: 'URDNA2015',
    format: 'application/n-quads'
  });
  fs.writeFileSync('output_rdf_normalised.json', canonized)

  // serialize a document to N-Quads (RDF)
  const nquads = await jsonld.toRDF(doc, { format: 'application/n-quads' });
  fs.writeFileSync('output_rdf_simple.json', nquads)

  console.log('RDF files created')
}

main()
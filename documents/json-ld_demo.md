# 1. Start with a JSON Dataset

```json
"clinicalData": {
        "studyOID": "BS1234",
        "metaDataVersionOID": "v2",
        "itemGroupData": ...
```

Imagine the Dataset-JSON as a compacted serialisation of a detailed RDF knowledge graph describing the study data. A reference to a specification IRI needs adding to provide context to the JSON.

```json
"@context": "http://localhost:4000/transfer_104ab4/define_BS1234_v2.jsonld"
```

Note that Presence of explicit context makes most Dataset-JSON metadata optional except for dataset ID and itemData

# 2. Express as JSON-LD objects

An ID can be added to Dataset-JSON via `@id`. This example content originates from the Dataset-JSON hackathon wiki so

```json
"@id": "https://wiki.cdisc.org/pages/viewpage.action?spaceKey=ODM2&title=Dataset-JSON",
```

This ID applies to this Dataset-JSON object as a whole, serving as a root. The `"@context"` applies an unambiguous semantic ID to all content within the Dataset-JSON

The `@type` tag provides a way of describing the contents according to the JSON-LD graph. 
* JSON-Schema governs the values of the contents
* JSON-LD governs the meaning of the contents
* SHACL applied to RDF deserialised from JSON-LD governs the shape of contents

For example, defining familiar name `itemData` as a `@container` of type `@list` tells the JSON-LD processor that
* order of JSON content within must be preserved
* expect a list or comma-separated list of lists (as opposed to a single stream of values)
* the content within is a candidate for line-by-line streaming

Applying `"@id": "odm:itemData"` links the content in itemData to a graph defined at the location resolved from the 'odm:' prefix

Manifest includes all metadata items that could be included in a Dataset-JSON. More generally, manifest type documents describes the transfer. They can be used as the Data Transfer Agreement / Audit trail / Table of contents.

Dataset.jsonld includes the data items. It is intended to be compatible with any amount of metadata inclusion in the JSON-LD (works with plain itemData list of lists, or with included itemGroupData)

# 3. Create a new context to describe Dataset-JSON, and transfer manifest, Define
```json
"clinicalData": {
        "studyOID": "BS1234",
        "metaDataVersionOID": "v2",
```
Can be turned into a single line added to the top of the file that points to the relevant Specification IRI. 

Presence of explicit context makes optional Dataset-JSON content such as `items` and `label` redundant except for dataset ID and itemData
```json
"@context": "http://localhost:4000/transfer_104ab4/define_BS1234_v2.jsonld"
```

An ID can be added to Dataset-JSON via `@id`. This example comes from the Dataset-JSON hackathon wiki so
```json
"@id": "https://wiki.cdisc.org/pages/viewpage.action?spaceKey=ODM2&title=Dataset-JSON",
```

# 4. Explain object connections through their own contexts
JSON-LD can be used to describe Dataset-JSON elements explicitly in terms of a shared model

The following dataset has been linked back to universally-understood `schema.org` and XML schema

e.g. [Example dataset contextualised directly](https://tinyurl.com/3a6j8ud4)

We can link it to our Define by applying a different context, allowing us to define our own schema. ODM can take this approach. e.g.
 
[Example dataset contextualised as ODM terms](https://tinyurl.com/ycyez8tk)

The vocabulary being referred to by the prefix `odm:` is a JSON-LD graph containing full detail of the meanings of each of these terms, and relationships between them. Note that the RDF schema is being used to define the relationships within this document

Different contexts can be applied to the same dataset e.g.

[Same dataset contextualised for streaming](https://tinyurl.com/yc2fcscy)

[Same dataset contextualised as column metadata](https://tinyurl.com/55y6z56v)

[Same dataset including a @graph](https://tinyurl.com/y29cmux7)

## Example of how JSON-LD files provide context
Identify the JSON transfer
```json
"@id": "./dataset.jsonld",
```

Explain _precisely_ what each thing means using the definitive schema
```json
"@type": "http://schema.org/DataCatalog",
```
Refer to common context definitions and graphs
```json   
"dc": "http://purl.org/dc/terms/",
"odm": "https://www.cdisc.org/odm-v2-0#",
```

For true self-descriptiveness: link the dataset formally to a Define, transfer, or dev build
```json
"studyOID" : "https://clinicaltrials.gov/api/get_define?expr=COSA1234"
"versionOID" : "https://clinicaltrials.gov/api/get_define?expr=COSA1234"
```
or via reference to a transfer manifest that contains the context; including explicit links to define, source, target, logs

    "@context": "BS1234_manifest_202209141025.jsonld"

## Suggested clinical trial transfer JSON metadata:
This project takes the form of a demonstration node server that performs conversions from Dataset-JSON to Dataset-LD

[The example here](https://tinyurl.com/y48jp3dv) shows a proposed setup for using Dataset-JSON assuming a single dataset per document.

[This streaming view](https://tinyurl.com/yc2fcscy) uses a different context to show only the content relevant for streaming data

Explore the JSON-LD playground, in particular the `Expanded`, `Compacted` and `N-Quads` views.

Remember that the point of the semantic web is to turn _strings_ into _things_. We are transforming the Dataset-JSON content by applying context to it, in this case from a hosted transfer manifest.
```json
"@base": "http://localhost:4000/transfer_104ab4/",
```
The `@base` keyword provides a default ID prefix for new undefined terms in the Dataset-JSON file. This file is unique to a particular transfer/datacut, so this is how we identify any of its unique sections.

The metadata on what the _dataset contents_ (as opposed to the Dataset-JSON terms) mean are described by its Define/specification. 

The relevant Define can be hosted in JSON-LD form rather than having to be included in the transfer as a .xml file, allowing the recipient to set up the graphs and ETL in advance of the the transfer being streamed.

    "@vocab": "http://localhost:4000/transfer_104ab4/define_BA1234_v2/",

We refer to a specific define in the JSON-LD in this example by referencing a hosted `.jsonld` file. We can refer to this as **Define-LD**

The Define-LD can hold the full detail of dataset contents, including explicit semantic definitions of the Define contents and the graph of the relationships between them.

The `@vocab` keyword implicitly handles new nodes that are generated by the context, giving them a meaning if one has not already been provided.

Use of `@vocab` allows JSON-LD definitions to be referenced from this external source, allowing the `@context` that gets added to Dataset-JSON to remain very small.

[Example here](https://tinyurl.com/5n878as9)
```json
"@context": {
        "@base": "http://localhost:4000/transfer_104ab4/DM/",
        "@vocab": "http://localhost:4000/transfer_104ab4/define_BA1234_v2/",
}
```
        
Note that this metadata specification should ideally be publically-available to make the _metadata_ FAIR and interoperable, even when access to the _data contents_ themselves is restricted.


# 5. Expand original objects to create expanded JSON-LD with IRIs instead of references
Everything in the JSON-LD can be used to expand the Dataset-JSON content into meaningful triples of IRIs, making this ideal for plugging the data into graphs such as enterprise knowledge graphs and the semantic web

By adding `@context` that refers to the applicable Define as a graph, the Dataset-JSON content can be transformed into meaningful nodes and relationships.

Take a look at examples available via the server
* output_expanded.json (Dataset-JSON on the semantic web)
* output_compacted.json (verify integrity of context definition by round-tripping)
* output_expanded_define.json (cdisc metadata on the semantic web)
* output_compacted_define.json (accessible JS Object for API)

# 6. Store n-quads into database (graph and relational)
Take a look at example available on the server
* output_rdf_normalised.json
* output_rdf_simple.json

# 7. Combine with the Define-LD graph to make results searchable over graph
TODO

# 8. Perform graph queries on a simple metamodel
TODO

# 9. Apply SHACL rules to ODMv2 / Datase-JSON metamodel
TODO

# Recommend also taking a look at ...
[JSON-LD Playground](https://json-ld.org/playground)

[JSON-LD Spec](https://www.w3.org/TR/json-ld11/)

[Open-source Clinical Trial Tools](https://www.glacon.eu/portal/overviewVisual)

[JSON-LD Overview (this project)](json-ld.md)

[JSON-LD Demo Server Setup (this project)](instructions.md)

[Define via Manifest File Demo (this project)](manifest_demo.md)

[Define-LD Overview (in progress)](define-ld.md)

[Homepage (this project)](../README.md)
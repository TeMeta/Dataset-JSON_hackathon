# Next-gen Clinical Metadata using JSON with Linked Data

Imagine
* Define as a URL with a JSON API
* expressing ODMv2 via the semantic web
* self-descriptive datasets without bloat
* clinical data with precise meanings that represent it as a graph
* an accessible format for both humans and apps to use for specs, metadata, schema, and lookups

## Dataset-JSON and JSON-LD might have the answer

[JSON-LD originated from W3C](https://www.w3.org/TR/json-ld11/) and ended up as Google's method of choice for linking up the web for SEO. As formats go, JSON-LD is as [FAIR](https://www.nature.com/articles/sdata201618?ref=https://githubhelp.com) and interoperable as they come.

It is designed for human-readability in compacted form, while its expanded form resolves every term to an IRI for complete and unambiguous machine-readability.

A simple clinical dataset can be transformed into rich graph data by including a reference to its metadata in the form of a JSON-LD context

## How JSON-LD can be applied to CDISC datasets

Dataset-JSON serves as:
  * data container
  * column description (optional)
  * implicit link to other metadata via StudyOID and VersionOID

Addition of a single reference to its 'Define-LD' contextualises any Dataset-JSON:
  * record exactly what was transferred
  * add additional metadata around the transfer e.g. authors, timestamps, source, target
  * explicit reference to Define content i.e. dataset specs, data transfer agreement
  * explicit reference to Dataset and ODM Schema i.e. machine-readable API spec for apps and access
  * map Dataset-JSON content to RDF

Define-LD is the manifest providing precise context to the transferred files, serving as:
  * explicit link between to Define and constituent datasets
  * mapping between ODMv1 Define (in JSON format) and graph
  * mapping between ODMv2 Define (in JSON format) and graph
  * preprocessing translator to understand variety of dataset formats and standards versions
  * URL accessibility layer for server-based dataset metadata

Together they are more than the sum of their parts, contextualising the data explicitly. 

  

Imagine a single line added to the top of your Dataset-JSON data transfer object
```json
    "@context" : "define.json"
```
This could be also be handled over API for use cases that need a 'single source of truth', such as a shared repository
```json
    "@context" : "https://library.cdisc.org/study/COSA/BP12345"
```
The API approach obviates the need for an accompanying file, addressing one of the criticisms of Define-XML and Dataset-XML

The accessibility of JSON, pointing to single source of truth that links to graphs:

_that_ sounds like what both regulators (FDA, EMA, PMDA etc.) and application developers are looking for

&nbsp;


How JSON-LD links Dataset-JSON content all the way to the semantic web:

1. Starting with Dataset-JSON

2. "@context" added to the top of transfers with a link to your Define-LD study spec

3. Define-LD is the JSON version of ODM/Define-XML. Its "@context" in turn links your study metadata to the Define-LD schema

4. The Define-LD Schema gives context to your spec in terms of ODM and schema.org. Your Dataset-JSON is now linked data that can be explored as part of the semantic web.

5. The Define-LD Schema is used to expand the your data into precise entity IRIs (internationalised resource identifiers)

6. Resulting JSON-LD is deserialised into RDF 

7. RDF triples/n-quads can queried, and loaded to your meta-model or graph of your choice

## Pros of JSON-LD
* Very simple standard (so much like JSON that you would be forgiven for not realising that you are actually working with RDF)
* Adds linkages, semantics and context to existing JSON
* Adds basic schema support to JSON (SHACL still better)
* When loaded into a graph, enables joins and graph search
* Is how schema.org organises the web for consumption by Google and Bing, making it by far the most popular linked data transfer format
* String internationalization https://w3c.github.io/json-ld-syntax#string-internationalization
* Index maps give meaning to array entries https://w3c.github.io/json-ld-syntax/#index-maps

## Cons of JSON-LD
* Only expresses the triples contained within the document. To infer more it would have to be deserialized into graph
* It's quite new - CDISC has historically leaned heavily on XML.

# Recommend also taking a look at ...
[JSON-LD Playground](https://json-ld.org/playground)

[JSON-LD Spec](https://www.w3.org/TR/json-ld11/)

[Open-source Clinical Trial Tools](https://www.glacon.eu/portal/overviewVisual)

[JSON-LD Demo Server Setup (this project)](instructions.md)

[JSON-LD Demos (this project)](json-ld_demo.md)

[Define via Manifest File Demo (this project)](manifest_demo.md)

[Define-LD Overview (in progress)](define-ld.md)

[Homepage (this project)](../README.md)
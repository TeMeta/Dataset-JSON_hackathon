# The next-generation Define using JSON with Linked Data
Why can't Define be a URL?
  
Can we have ODMv2 join with the semantic web?

How can we make partial datasets self-descriptive without bloat?
  
Is there an easier way to understand the precise meaning of clinical data and ETL it into a graph?
  
What is the most accessible for both humans and apps to use for specs/metadata/schema/lookups?  

## Dataset-JSON and JSON-LD might have the answer

[JSON-LD originated from W3C](https://www.w3.org/TR/json-ld11/) and ended up as Google's method of choice for linking up the web for SEO. As formats go, JSON-LD is as FAIR and interoperable as they come.

It is designed for human-readability in compacted form, while its expanded form resolves every term to an IRI for complete and unambiguous machine-readability.

## How JSON-LD can be applied to CDISC datasets

Dataset-JSON serves as:
  * data container
  * column description (optional)
  * implicit link to other metadata via StudyOID and VersionOID

Addition of a single reference to its Define-LD manifest contextualises any Dataset-JSON:
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
  * URL accessibility layer for server-based 

Together they are more than the sum of their parts, contextualising the data explicitly. 

  

Imagine a single line added to the top of your Dataset-JSON data transfer object

    "@context" : "define.json"

This could be also be handled over API for use cases that need a 'single source of truth'

    "@context" : "https://library.cdisc.org/study/COSA/BP12345"

The API approach obviates the need for an accompanying file, addressing one of the criticisms of Define-XML and Dataset-XML

The accessibility of JSON, pointing to single source of truth that links to graphs:

_that_ sounds like what both FDA and application developers are looking for

&nbsp;


How JSON-LD links Dataset-JSON content all the way to the semantic web:

1. Starting with Dataset-JSON

2. "@context" added to the top of transfers with a link to your Define-LD study spec

3. Define-LD is the JSON version of ODM/Define-XML. Its "@context" links your study metadata to the Define-LD schema

4. The Define-LD Schema gives context to your spec in terms of ODM and schema.org. Your data is now semantic.

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


# How to turn Define into a JSON-LD context
Add 'what is this thing' to datasets with a single "@context" line

## Convert Define-XML into JSON using the Define-XML schema

```js
const convert = require(`${module.path}/src/utils/convert.js`)
convert.xmlToJson(
    xmlPath,
    xmlPath.split('/').pop().replace('.xml','.json'), 
    `${module.path}/mappings/define2_1_0.js`)
```


## Map the types to JSON-LD
To do this we need to create a context that adds "@type" and "@id" to all structures

The JSON unmarshaller helpfully maps all XML types to `TYPE_NAME` so JSON-LD can interpret these as types via a single line within the JSON-LD `@context`

```js
        "TYPE_NAME": "@type"
```

## Turn the ODM objects into nodes in the JSON-LD Graph by identifying them
ID can be obtained by the ODM OID e.g.

```js
        "oid": "@id"
```

By flagging the appropriate identifiers in the Define as "@id" type, the objects become accessible via these IDs in JSON-LD form.

For example applying this context

```js
        "oid": "@id",
        "itemGroupDef": {
            "@container": ["@id", "@set"],
            "@id": "def:define2_1_0.ODMcomplexTypeDefinitionItemGroupDef"
        }
```

to the Define data

```js
"itemGroupDef": [  
              {
                "TYPE_NAME": "define2_1_0.ODMcomplexTypeDefinitionItemGroupDef",
                "oid": "IG.ADADAS",
                "name": "ADADAS",
                "repeating": "Yes",
                "isReferenceData": "No",
```

results in a node that can be dereferenced by its identifier when the expanded JSON-LD is re-compacted/framed, as seen here

```js
 "itemGroupDef": {
    "IG.ADADAS": [
      {
        "isReferenceData": "No",
        "purpose": "Analysis",
        "repeating": "Yes",
```

## Map CDISC ODM to JSON-LD for internationalisation in web-based applications

This is based on the JSON-LD documentation and needs testing
```js
        "lang": "@language",

        "translatedText": {
            "@container": "@language",
            "@id": "schema:PropertyValue"
        }
```

## ** MORE WORK NEEDS TO BE DONE ** 
* At time of writing, the transformation to JSON and then JSON-LD has facilitated an easy-to-access Define JS object
* Define graph still needs to be made, and then combined with dataset graph
* Testing and proof of concept for internationalisation is needed
* Value-level metadata support needs adding
* Slicing (RDF data cubes) support needs adding
* Biomedical concept support needs adding
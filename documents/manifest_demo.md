# JSON-LD Manifest Files for Metadata and Streaming

## Datasets referencing Define and transfer manifest over URL
Other demos in this project have shown how Dataset-JSON can use JSON-LD to refer to a Define explicitly to provide context for the data within

```json
{
"@context": "http://localhost:4000/transfer_104ab4/define_BS1234_v2#"
"clinicalData": {
    "studyOID": "BS1234",
    "metaDataVersionOID": "v2",
    "itemGroupData": ...
```

A Dataset-JSON might want to include header information independently from the Define
 * Essential column metadata
 * File/transfer metadata
 * Streaming instructions

Streaming applications handling large dataset transfers need this data to be handled before the data content since JSON does not guarantee the order of terms within (JSON-LD supports ordered lists, but terms within an object still do not have a guaranteed order)

Introduction of a **manifest file** to accompany the dataset can provide a simple way to keep the explicit Define reference while decoupling the Dataset-JSON transfer metadata from the dataset itself

## Manifest file for Dataset-JSON to use as @context
```json
{
  "@context": [ 
    "http://localhost:4000/manifest#",
    { "@vocab": "http://localhost:4000/transfer_104ab4/define_BA1234_v2#" }
  ],

  "manifest": {
    "fileType": "Dataset-JSON",
    "fileOID": "transfer_104ab4",
    "priorFileOID": "transfer_25b200",
    "creationDateTime": "2012-04-23T18:25:43.511Z",
    "asOfDateTime": "2012-04-22T00:00:01.511Z",
    "originator": "COSA Dataset-JSON Hackathon",
    "studyOID": "BS1234",
    "sourceSystem": "node server",
    "sourceSystemVersion": "124.51.52.5552",
    "datasetJsonVersion": "v0.1"
  }
}
```

## Dataset-JSON can refer explicitly to single source of truth (manifest URL)
The manifest file has its own explicit Define reference for JSON-LD graph interpretation of Dataset-JSON contents via `@vocab`

This means the dataset can simply reference its manifest, with the Define reference included indirectly (though still explicitly) through the direct reference to this transfer's manifest
```json
{
  "@context": "http://localhost:4000/transfer_104ab4/manifest#",
  "clinicalData": {
    "studyOID": "BS1234",
    "metaDataVersionOID": "v2",
```

## Dataset-JSON interpreted via manifest file (expanded JSON-LD)
Note that the `@index` of the dataset has been arbitrarily moved below the data content inside the Dataset object.

This is an issue with streaming JSON. 

The recommendation is to send the header content (i.e. items, manifest referencing Define, number of records) ahead of time so that sender and recipient both know the metadata.

A stream can then be established between sender and recipients, streaming JSON list elements one-by-one to be interpreted into a predetermined dataset structure.

```json
[
  {
    "http://schema.org/Dataset": [
      {
        "http://schema.org/DataFeed": [
          {
            "@list": [
              {
                "@list": [
                  {
                    "@value": 1
                  },
                  {
                    "@value": "MyStudy"
                  },

        ...

        "@index": "IG.DM"
      }
    ],
    "http://schema.org/Version": [
      {
        "@value": "v2"
      }
    ],
    "http://schema.org/MedicalStudy": [
      {
        "@type": "http://schema.org/code",
        "@value": "BS1234"
      }
    ]
  }
]
```



## Manifest file processed on its own (expanded JSON-LD)
```json
[
  {
    "http://schema.org/dateCreated": [
      {
        "@value": "2012-04-22T00:00:01.511Z"
      }
    ],
    "http://schema.org/modifiedTime": [
      {
        "@value": "2012-04-23T18:25:43.511Z"
      }
    ],
    "http://schema.org/schemaVersion": [
      {
        "@value": "v0.1"
      }
    ],
    "http://schema.org/identifier": [
      {
        "@value": "transfer_104ab4"
      }
    ],
    "http://schema.org/Class": [
      {
        "@value": "Dataset-JSON"
      }
    ],
    "http://schema.org/creator": [
      {
        "@value": "COSA Dataset-JSON Hackathon"
      }
    ],
    "http://schema.org/PropertyValue": [
      {
        "@value": "transfer_25b200"
      }
    ],
    "http://schema.org/SoftWareApplication": [
      {
        "@value": "node server"
      }
    ],
    "http://schema.org/softwareVersion": [
      {
        "@value": "124.51.52.5552"
      }
    ],
    "http://schema.org/MedicalStudy": [
      {
        "@type": "http://schema.org/code",
        "@value": "BS1234"
      }
    ]
  }
]
```

# Recommend also taking a look at ...
[JSON-LD Demo Server Setup (this project)](instructions.md)

[JSON-LD Overview (this project)](json-ld.md)

[JSON-LD Demos (this project)](json-ld_demo.md)

[Define via Manifest File Demo (this project)](manifest_demo.md)

[Homepage (this project)](../README.md)

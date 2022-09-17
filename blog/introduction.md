[Dataset-JSON](https://wiki.cdisc.org/display/DSJSONHACK) is a new format being designed for a more interoperable way to communicate clinical data. 

[JSON-LD](https://www.w3.org/TR/json-ld11/) may be able to complete the picture. 

By imagining Dataset-JSON as the compacted form of a JSON-LD graph, a single machine-readable reference included in the Dataset-JSON can to provide a complete description of the transfer.

    "@context": "https://library.cdisc.org/studies/BP12345/v4"

The referenced address would be a Define in the form of a JSON-LD, contextualising the Dataset-JSON contents into ODMv2 graph form

Have your cake and eat it! Simple streamable datasets for transport, linked explicitly to a single source of truth. A complete metadata picture that can allows the data to be queried and exported as a graph
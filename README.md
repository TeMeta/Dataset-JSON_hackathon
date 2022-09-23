#  JSON-LD for CDISC

This repository should be used for the [CDISC Open Source Alliance's Dataset-JSON Hackathon](https://wiki.cdisc.org/display/DSJSONHACK) to contain code, minutes, notes, outcomes, discussions and more. It is meant to allow anyone working with the results and discussions to allow flexible collaboration and follow up projects.

<p align="middle">
    <img src="./images/cosa-logo.png" alt="CDISC Open Source Alliance logo" width="100"/>
    <img src="./images/ds-json-hackathon-logo.png" alt="Dataset-JSON Hackathon logo" width="100"/>
    <img src="./images/json-ld-logo.svg" alt="JSON-LD logo" width="100"/>
</p>

## Description
The main purpose of Dataset-JSON Define-LD demo is to investigate ways in which the 
<a href="https://json-ld.org/" title="JSON-LD"><img style="border:0px;" width="88" src="https://json-ld.org/images/json-ld-button-88.png" alt="JSON-LD-logo-88"/></a> format can be leveraged in tandem with CDISC Datasets as JSON.

* [Dataset-JSON](https://wiki.cdisc.org/display/DSJSONHACK) is a new format being designed for a more interoperable way to communicate clinical data. 
* [JSON-LD](https://www.w3.org/TR/json-ld11/) may be able to complete the picture. 

**By imagining Dataset-JSON as the compacted form of a JSON-LD graph, a single machine-readable reference included in the Dataset-JSON can provide a complete description of the transfer.**

```js
"@context": "https://mdr.cdisc.org/transfer_104ab4/define_BS1234_v2#"
```

The referenced address would be the Define (or a transfer manifest referencing the Define) in the form of a JSON-LD, contextualising the Dataset-JSON contents into ODMv2 graph form

Have your cake and eat it! Simple streamable datasets for transport, linked explicitly to a single source of truth. A complete metadata picture that allows the data to be queried and exported as a graph

See [Instructions](documents/instructions.md) to set up and run the demo server

See [JSON-LD Overview](documents/json-ld.md) to learn more about how this project proposes to apply JSON-LD to CDISC data and metadata

See [Define via Manifest Demo](documents/manifest_demo.md) to see how Dataset-JSON can reference Define spec explicitly via a single explicit reference to its transfer manifest (replace Define-XML file with a URL)

See [JSON-LD Demo](documents/json-ld_demo.md) to go through some examples and interact with them via the JSON-LD Playground tool

See [Define-LD Overview](documents/define-ld.md) (in progress) to see how JSON-LD can be applied to Define to make it more interoperable

## Contribution

Contribution is very welcome. When you contribute to this repository you are doing so under the below licenses. Please checkout [Contribution](CONTRIBUTING.md) for additional information. All contributions must adhere to the following [Code of Conduct](CODE_OF_CONDUCT.md).

## License

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) ![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-blue.svg)

### Code & Scripts

This project is using the [MIT](http://www.opensource.org/licenses/MIT "The MIT License | Open Source Initiative") license (see [`LICENSE`](LICENSE)) for code and scripts.

### Content

The content files like documentation and minutes are released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). This does not include trademark permissions.

## Re-use

When you re-use the source, keep or copy the license information also in the source code files. When you re-use the source in proprietary software or distribute binaries (derived or underived), copy additionally the license text to a third-party-licenses file or similar.

When you want to re-use and refer to the content, please do so like the following:

> Content based on [Dataset-JSON Define-LD Demo (GitHub)](https://github.com/TeMeta/Dataset-JSON_hackathon) used under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) license.





# How to install
Install node package manager and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you haven't already

```bash
npm install -g npm
```

Navigate in shell to the directory that you want

Install this project from github to project name of your choice

```bash
git clone https://github.com/TeMeta/Dataset-JSON_hackathon.git <your project>

cd <your project>
```

# How to set up server
This project is a node server that provides back-end JSON and JSON-LD files and services

```bash
npm install

npm start
```

# How to run examples
With the node server running, go to `http://localhost:4000/` and take a look at the included project files

There is a vision to create a demo frontend to accompany this API, allowing datasets to be saved and retrieved

In the meantime, try running the following examples from your project folder

## Dataset-JSON to Dataset-LD
```bash
node examples/jsonld_test.js
```

and take a look `ls` at the different views of the data that were created by the JSON-LD processor when contexts are applied to the demo JSON-LD dataset in `transfer_104ab4/DM.json`
* output_compacted.json
* output_expanded.json

The compacted form shows that the JSON-LD context undersands the data.

The expanded form can also be turned into RDF triples and N-Quads by the JSON-LD processor

## Define-XML to Define-JSON
```bash
node examples/define_test.js
```

and take a look `ls` at the different views of the data that were created by the JSON-LD processor when contexts are applied to the demo ADaM Define-XML file
* output_compacted_define.json
* output_expanded_define.json

Even with helper functions added, the Define-JSON file [`907KB`] is a that smaller than the original `.xml` file [`1,267KB`] that it was converted from. The content is preserved while tweaking the structure slightly to reflect the graph objects identified.

The expanded form is a primitive Define-LD and can be further contextualized by inclusion of a `@graph` JSON-LD object. These can then be framed and combined with other sources such as Dataset-JSON.


# Recommend also taking a look at ...
[JSON-LD Overview (this project)](json-ld.md)

[JSON-LD Demos (this project)](json-ld_demo.md)

[Define via Manifest File Demo (this project)](manifest_demo.md)

[Define-LD Overview (in progress)](define-ld.md)

[Homepage (this project)](../README.md)
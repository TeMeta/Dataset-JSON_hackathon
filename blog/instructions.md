# How to install
Install node package manager and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you haven't already

    npm install -g npm

Navigate in shell to the directory that you want

Install this project from github to project name of your choice

    git clone https://github.com/TeMeta/Dataset-JSON_hackathon.git <your project>

    cd <your project>

# How to set up server
This project is a node server that provides back-end JSON and JSON-LD files and services

    npm install

    npm start

# How to run examples
With the node server running, go to `http://localhost:4000/` and take a look at the included project files

There is a vision to create a demo frontend to accompany this API, allowing datasets to be saved and retrieved

In the meantime, try running the above line in command line from your project folder

    node jsonld_test.js

and take a look `ls` at the different views of the data that were created by the JSON-LD processor when contexts are applied to the demo JSON-LD dataset in `transfer_104ab4/DM.json`
* output_compacted.json
* output_expanded.json


# Recommend taking a look at 
https://json-ld.org/playground

https://www.glacon.eu/portal/overviewVisual

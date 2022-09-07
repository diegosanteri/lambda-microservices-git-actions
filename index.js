const fs = require("fs");
const path = require("path");
const gitDiffFrom = require('git-diff-from');
const core = require('@actions/core');

async function run () {

    const spec = JSON.parse(fs.readFileSync("./lambda-spec.json"));
    const modules = spec.modules;

    modules.map(module => {

        let r = gitDiffFrom.gitDiffFrom(5, null, {
            cwd: path.resolve(module.path),
        });

        console.log(r[0])
        if(r.length > 0 && r[0].files.length > 0) {
            console.log("changes")
        }
    })
}

run(); 
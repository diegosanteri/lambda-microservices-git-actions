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
        console.log(r);
    })
}

run();
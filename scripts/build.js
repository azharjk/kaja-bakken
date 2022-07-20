const util = require("util");
const { join } = require("path");
const fs = require("fs");
const exec = util.promisify(require('child_process').exec);

// FIXME: Crappy build file
const build = async () => {
  const { err } = await exec("./node_modules/.bin/tsc");
  if (err) {
    console.error("[ERROR(build:tsc)]: error", err);
    return;
  }
  fs.copyFileSync(join(__dirname, "../src/graphql/schema.graphqls"), join(__dirname, "../dist/graphql/schema.graphqls"));
};

build();

#!/usr/bin/node

const child_process = require("child_process");

const problem = process.argv[2];

if (!problem) {
	throw new Error(`Illegal input: ${process.argv}`);
}

const start = new Date().getTime();
require('./problems/' + problem);
console.log();
console.log("ran in " + (new Date().getTime() - start) / 1000 + "s");
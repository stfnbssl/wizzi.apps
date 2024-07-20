/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\root\build.js.ittf
    utc time: Wed, 03 Jul 2024 08:24:49 GMT
*/
'use strict';
const {
    build
 } = require("esbuild");
const {
    dependencies, 
    peerDependencies
 } = require('./package.json');
const {
    Generator
 } = require('npm-dts');

new Generator({
    entry: 'src/index.ts', 
    output: 'dist/index.d.ts', 
    logLevel: "info"
 }).generate();

const sharedConfig = {
    entryPoints: [
        "src/index.ts"
    ], 
    bundle: true, 
    external: Object.keys(dependencies)
 };
build({
    ...sharedConfig, 
    platform: 'node', 
    
    // for CJS
    outfile: "dist/index.js"
 })
build({
    ...sharedConfig, 
    outfile: "dist/index.esm.js", 
    platform: 'node', 
    
    // for ESM
    format: "esm"
 })
/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.meta/meta-templates/__temp/ts-express/first.meta.package/wizzi.config.override.js.ittf
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "first.meta.package-override/job", 
    wfjobPath: path.join(__dirname, '.wizzi-override', 'generate.wfjob.ittf'), 
    destPath: __dirname, 
    plugins: [
        './wizzi-core/index.js', 
        './wizzi-js/index.js', 
        './wizzi-web/index.js'
    ], 
    pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi/packages", 
    schemas: [
        
    ], 
    globalContext: {
        wzConfigIsDevelopment: true
     }
 };

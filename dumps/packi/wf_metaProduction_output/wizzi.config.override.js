/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: json:/___template/wizzi.config.override.js.ittf
    utc time: Wed, 31 Jul 2024 15:06:50 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "-override/job", 
    wfjobPath: path.join(__dirname, '.wizzi-override', 'generate.wfjob.ittf'), 
    destPath: __dirname, 
    plugins: [
        './wizzi-core/index.js', 
        './wizzi-js/index.js', 
        './wizzi-web/index.js'
    ], 
    pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi.v07/packages", 
    schemas: [
        
    ], 
    globalContext: {
        wzConfigIsDevelopment: true, 
        wzConfigIsPackageDeploy: false, 
        wzConfigIsDocumentation: true
     }
 };
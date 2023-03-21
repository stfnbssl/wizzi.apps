/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-cli/resources/create/templates/__temp/ts-express/wizzi-heroku/wizzi.config.override.js.ittf
    utc time: Fri, 02 Dec 2022 13:38:09 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "wizzi-heroku-override/job", 
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

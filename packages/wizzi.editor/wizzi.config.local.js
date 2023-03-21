/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:/My/wizzi/stfnbssl/wizzi/packages/wizzi-cli/dist/resources/create/templates/ts/webpack_editor_start/wizzi.config.js.ittf
    utc time: Thu, 17 Jun 2021 04:05:37 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "wizzi.editor/root/job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'), 
    plugins: [
        './wizzi-core/index.js', 
        './wizzi-js/index.js', 
        './wizzi-web/index.js'
    ], 
    pluginsBaseFolder: path.join(__dirname, '..','..','..','wizzi','packages'), 
    schemas: [
        
    ], 
    globalContext: {
        wzConfigIsDevelopment: true,
        wzConfigIsLocal: true,
        wzConfigIsStudio: false
    }
};

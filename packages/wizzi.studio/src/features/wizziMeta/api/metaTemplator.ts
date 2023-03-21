/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziMeta\api\metaTemplator.ts.ittf
*/
import path from 'path';
import wizzi from 'wizzi';
import {verify, fSystem} from 'wizzi-utils';
const file = fSystem.vfile();

async function metaTemplator(metaGeneratorFileTemplatesIndex: string, destinationIttfTempFolder: string, cliCtx: any) {

    return new Promise((resolve, reject) => 
        
            wizzi.model(metaGeneratorFileTemplatesIndex, {
                cliCtx: cliCtx
             }, (err: any, packageTemplate: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", 'wizziMeta.metaTemplator.wizzi.model', err);
                    return reject({
                            message: 'wizziMeta.metaTemplator.wizzi.model', 
                            err
                         });
                }
                try {
                    var i, i_items=packageTemplate.children, i_len=packageTemplate.children.length, child;
                    for (i=0; i<i_len; i++) {
                        child = packageTemplate.children[i];
                        if (child.name == '$file') {
                            processFile(child, destinationIttfTempFolder)
                        }
                    }
                    return resolve({
                            message: 'Package generated'
                         });
                } 
                catch (ex) {
                    return reject({
                            message: 'wizziMeta.metaTemplator. Error writing package files', 
                            ex
                         });
                } 
            }
            )
        );
}
function processFile(node: any, destinationIttfTempFolder: string) {

    console.log('wizziMeta.metaTemplator.writing', node.value, 'to', destinationIttfTempFolder, __filename);
    var outputPath = path.join(destinationIttfTempFolder, node.value);
    var sb = [];
    var i, i_items=node.children, i_len=node.children.length, child;
    for (i=0; i<i_len; i++) {
        child = node.children[i];
        processContent(sb, child, 0)
    }
    file.write(outputPath, sb.join('\n'))
}
// log new Array(indent).join(' ') + node.name + ' ' + node.value
function processContent(sb: any, node: any, indent: number) {

    sb.push(new Array(indent).join(' ') + decode(node.name) + ' ' + decode(node.value))
    var i, i_items=node.children, i_len=node.children.length, child;
    for (i=0; i<i_len; i++) {
        child = node.children[i];
        processContent(sb, child, indent + 4)
    }
}
function decode(text: string) {

    text = verify.replaceAll(text, "$", "$");
    return verify.replaceAll(text, "£'('£", "(");
}

export {metaTemplator};

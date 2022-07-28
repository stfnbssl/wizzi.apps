/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\wizzi\maps.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import path from 'path';
type parsedFilePath = { 
    seedname: string;
    schema: string;
    isIttfDocument: boolean;
};

export function parseFilePath(filePath: string):  parsedFilePath {

    const nameParts = path.basename(filePath).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return {
                isIttfDocument: true, 
                schema: nameParts[nameParts.length - 2], 
                seedname: nameParts.slice(0, -2).join('.')
             };
    }
    else {
        return {
                isIttfDocument: false, 
                schema: nameParts[nameParts.length - 1], 
                seedname: nameParts.slice(0, -1).join('.')
             };
    }
}
var schemaArtifactMap: { 
    [k: string]: string;
} = {
    js: 'js/module', 
    jsx: 'js/module', 
    ts: 'ts/module', 
    html: 'html/document', 
    css: 'css/document', 
    scss: 'scss/document', 
    svg: 'svg/document', 
    vtt: 'vtt/document', 
    md: 'md/document', 
    json: 'json/document', 
    xml: 'xml/document', 
    yaml: 'yaml/document', 
    text: 'text/document', 
    ittf: 'ittf/document'
 };
export // log 'artifactNameFromSchema', schema, schemaArtifactMap[schema]
function artifactNameFromSchema(schema: string):  string | undefined {

    return schemaArtifactMap[schema];
}

var schemaIttfRootMap: { 
    [k: string]: string;
} = {
    js: 'module', 
    jsx: 'module', 
    ts: 'module', 
    html: 'html', 
    css: 'css', 
    scss: 'scss', 
    svg: 'svg', 
    md: 'vtt', 
    vtt: 'vtt', 
    json: '{', 
    xml: 'xml', 
    yaml: 'yaml', 
    text: 'any', 
    ittf: 'any'
 };
export // log 'ittfRootFromSchema', schema, schemaIttfRootMap[schema]
function ittfRootFromSchema(schema: string):  string | undefined {

    return schemaIttfRootMap[schema];
}

const schemaPluginMap: { 
    [k: string]: string[];
} = {
    wfjob: [
        'wizzi-core'
    ], 
    wfschema: [
        'wizzi-core'
    ], 
    js: [
        'wizzi-js'
    ], 
    ts: [
        'wizzi-js'
    ], 
    html: [
        'wizzi-web', 
        'wizzi-js', 
        'wizzi-core'
    ], 
    css: [
        'wizzi-web'
    ], 
    scss: [
        'wizzi-web'
    ], 
    graphql: [
        'wizzi-web'
    ], 
    vml: [
        'wizzi-web'
    ], 
    vue: [
        'wizzi-web'
    ], 
    json: [
        'wizzi-core'
    ], 
    text: [
        'wizzi-core'
    ], 
    xml: [
        'wizzi-core'
    ], 
    yaml: [
        'wizzi-core'
    ], 
    ittf: [
        'wizzi-core'
    ]
 };
export function pluginsFor(file: string):  string[] {

    const nameParts = path.basename(file).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return schemaPluginMap[nameParts[nameParts.length - 2]] || [];
    }
    return [];
}

const schemaModuleMap: { 
    [k: string]: string;
} = {
    css: 'css/document', 
    graphql: 'graphql/document', 
    ittf: 'ittf/document', 
    js: 'js/module', 
    json: 'json/document', 
    html: 'html/document', 
    md: 'md/document', 
    scss: 'scss/document', 
    svg: 'svg/document', 
    text: 'text/document', 
    ts: 'ts/module', 
    vml: 'vml/document', 
    vue: 'vue/document', 
    xml: 'xml/document'
 };
export function generatorFor(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return schemaModuleMap[pf.schema];
    }
    return undefined;
}

const extSchemaMap: { 
    [k: string]: string;
} = {
    '.js': 'js', 
    '.jsx': 'js', 
    '.ts': 'ts', 
    '.tsx': 'ts', 
    '.html': 'html', 
    '.css': 'css', 
    '.svg': 'svg', 
    '.md': 'md', 
    '.xml': 'xml', 
    '.json': 'json', 
    '.graphql': 'graphql'
 };

export function schemaFromExtension(extension: string):  string | undefined {

    return extSchemaMap[extension];
}

const schemaTransformerMap: { 
    [k: string]: string;
} = {
    meta: 'ittf/cheatsheet'
 };

export function transformerFor(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return schemaTransformerMap[pf.schema];
    }
    return undefined;
}

export function schemaFromFilePath(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return pf.schema;
    }
    return undefined;
}

export function wrapperForSchema(schema: string) {

    if (schema === 'js' || schema === 'jsx') {
        return {
                n: 'module', 
                children: [
                    {
                        n: 'kind', 
                        v: 'react', 
                        children: [
                            
                        ]
                     }
                ]
             };
    }
    else if (schema === 'ts') {
        return {
                n: 'module', 
                children: [
                    
                ]
             };
    }
    else {
        return {
                n: schema, 
                children: [
                    
                ]
             };
    }
}

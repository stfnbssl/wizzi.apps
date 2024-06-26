/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\root\babel.config.js.ittf
    utc time: Thu, 11 Apr 2024 13:23:16 GMT
*/
'use strict';
const path = require('path');
module.exports = (api) => {

    const isWebpack = api.caller(caller => 
    
        Boolean(caller && caller.name === 'babel-loader')
    );
    return {
            plugins: [
                "@babel/plugin-syntax-dynamic-import", 
                '@babel/plugin-proposal-class-properties', 
                "@babel/plugin-proposal-object-rest-spread", 
                'lodash', 
                ...((isWebpack ? [
                            'webpack-chunkname'
                        ] : [
                            'dynamic-import-node', 
                            
                            // to transpile import() to a deferred require()
                            [
                                'file-loader', 
                                
                                // to transpile require(image) to a url
                                {
                                    name: '[hash].[ext]', 
                                    extensions: [
                                        'png', 
                                        'jpg', 
                                        'jpeg', 
                                        'gif', 
                                        'svg'
                                    ], 
                                    publicPath: '/dist/assets', 
                                    outputPath: '/build/assets', 
                                    context: '', 
                                    limit: 0
                                 }
                            ]
                        ]))
                , 
                [
                    "prismjs", 
                    {
                        languages: [
                            
                        ], 
                        plugins: ["line-numbers"], 
                        theme: "twilight", 
                        css: true
                     }
                ], 
                "@babel/plugin-transform-classes"
            ], 
            presets: [
                [
                    '@babel/preset-env', 
                    {
                        targets: {
                            browsers: [
                                '>0.25%', 
                                'not dead', 
                                'not ie 11', 
                                'not op_mini all', 
                                'not android <= 4.4', 
                                'not samsung <= 4'
                            ]
                         }, 
                        exclude: [
                            'transform-typeof-symbol'
                        ], 
                        useBuiltIns: 'entry', 
                        corejs: 3, 
                        modules: false
                     }
                ], 
                '@babel/preset-react', 
                "@babel/preset-typescript"
            ], 
            env: {
                
             }, 
            overrides: [
                {
                    test: './src/vendor', 
                    compact: true
                 }
            ]
         };
}
;

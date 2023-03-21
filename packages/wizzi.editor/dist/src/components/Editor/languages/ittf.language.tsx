/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\Editor\languages\ittf.language.tsx.ittf
*/
export default {
        defaultToken: 'invalid', 
        tokenizer: {
            root: [
                {
                    include: '@whitespace'
                 }, 
                {
                    include: '@include'
                 }, 
                {
                    include: '@ittfCommand'
                 }, 
                {
                    include: '@mix'
                 }, 
                {
                    include: '@nodeName'
                 }
            ], 
            whitespace: [
                [
                    /[ \t]+/, 
                    'white'
                ], 
                [
                    /\$\$.*$/, 
                    'comment'
                ], 
                [
                    /(\$\*)/, 
                    {
                        token: 'comment', 
                        next: 'comment'
                     }
                ]
            ], 
            comment: [
                [
                    /[^\$\*]+/, 
                    'comment'
                ], 
                [
                    /\*\$/, 
                    'comment', 
                    '@pop'
                ], 
                [
                    /[\$\*]/, 
                    'comment'
                ]
            ], 
            include: [
                [
                    /(\$include)/, 
                    {
                        token: 'mix', 
                        next: 'includeValue'
                     }
                ]
            ], 
            includeValue: [
                [
                    /.*$/, 
                    'mix-value', 
                    '@pop'
                ]
            ], 
            mix: [
                [
                    /([^($\s]+)(?:\()/, 
                    {
                        cases: {
                            '@eos': 'mix', 
                            '@default': {
                                token: 'mix', 
                                next: 'mixValue'
                             }
                         }
                     }
                ]
            ], 
            ittfCommand: [
                [
                    /(\$global|\$)$/, 
                    {
                        token: 'interpolation', 
                        next: 'scriptMultiLine'
                     }
                ], 
                [
                    /\$[ ]/, 
                    {
                        token: 'interpolation', 
                        next: 'scriptLine'
                     }
                ], 
                [
                    /\$[a-z]+$/, 
                    'ittf-command'
                ], 
                [
                    /\$[a-z]+/, 
                    {
                        token: 'ittf-command', 
                        next: 'scriptLine'
                     }
                ]
            ], 
            nodeName: [
                [
                    /(\${)([^}]*)(})/, 
                    {
                        cases: {
                            '@eos': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                {
                                    token: 'interpolation.delimiter', 
                                    next: '@popall'
                                 }
                            ], 
                            '@default': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                {
                                    token: 'interpolation.delimiter', 
                                    next: 'nodeName'
                                 }
                            ]
                         }
                     }
                ], 
                [
                    /\$/, 
                    {
                        token: 'node-name', 
                        next: 'nodeName'
                     }
                ], 
                [
                    /[^\s]*\$/, 
                    {
                        token: 'node-name', 
                        goBack: 1, 
                        next: 'nodeName'
                     }
                ], 
                [
                    /[^\s]+/, 
                    {
                        cases: {
                            '@eos': {
                                token: 'node-name', 
                                next: '@popall'
                             }, 
                            '@default': {
                                token: 'node-name', 
                                next: 'nodeValue'
                             }
                         }
                     }
                ], 
                [
                    /[\s]+/, 
                    {
                        token: 'node-name', 
                        next: 'nodeValue'
                     }
                ]
            ], 
            nodeValue: [
                [
                    /[^\$]+$/, 
                    {
                        token: 'node-value', 
                        next: '@popall'
                     }
                ], 
                [
                    /[^\$]+/, 
                    {
                        token: 'node-value'
                     }
                ], 
                [
                    /(\${)([^}]*)(})/, 
                    {
                        cases: {
                            '@eos': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                {
                                    token: 'interpolation.delimiter', 
                                    next: '@popall'
                                 }
                            ], 
                            '@default': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                'interpolation.delimiter'
                            ]
                         }
                     }
                ], 
                
                // [ /.*$/, { token: 'node-value', next: '@pop' } ]
                [
                    /\$$/, 
                    {
                        token: 'node-value', 
                        next: '@popall'
                     }
                ], 
                [
                    /\$/, 
                    'node-value'
                ]
            ], 
            mixValue: [
                [
                    /\)/, 
                    {
                        token: 'mix', 
                        next: '@popall'
                     }
                ], 
                [
                    /[^\$|\)]+$/, 
                    {
                        token: 'mix-value', 
                        next: '@popall'
                     }
                ], 
                [
                    /[^\$|\)]+/, 
                    {
                        token: 'mix-value'
                     }
                ], 
                [
                    /(\${)([^}]*)(})/, 
                    {
                        cases: {
                            '@eos': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                {
                                    token: 'interpolation.delimiter', 
                                    next: '@popall'
                                 }
                            ], 
                            '@default': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                'interpolation.delimiter'
                            ]
                         }
                     }
                ], 
                [
                    /\$$/, 
                    {
                        token: 'mix-value', 
                        next: '@popall'
                     }
                ], 
                [
                    /\$/, 
                    'mix-value'
                ]
            ], 
            scriptLine: [
                [
                    /.*$/, 
                    'interpolation', 
                    '@pop'
                ]
            ], 
            scriptMultiLine: [
                [
                    /[^\/\/\.]+/, 
                    'interpolation'
                ], 
                [
                    /\/\/$/, 
                    'interpolation', 
                    '@pop'
                ]
            ]
         }
     }// export * from 'monaco-editor-core';

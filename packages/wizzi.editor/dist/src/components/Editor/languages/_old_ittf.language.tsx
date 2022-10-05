// export * from 'monaco-editor-core';

export default {
    defaultToken: 'invalid',
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@include' },
            { include: '@ittfCommand' },
            { include: '@mix' },
            { include: '@nodeName' },
        ],
        whitespace: [
            [ /[ \t]+/, 'white'],
            [ /\$\$.*$/, 'comment'],
            [ /(\$\*)/, { token: 'comment', next: 'comment'} ],
        ],
        comment: [
            [/[^\$\*]+/, 'comment'],
            [/\*\$/, 'comment', '@pop'],
            [/[\$\*]/, 'comment']
        ],                        
        include: [
            [ /(\$include)/, { token: 'mix', next: 'includeValue'} ]
        ],
        includeValue: [
            [ /.*$/, 'mix-value', '@pop' ]
        ],
        mix: [
        [ 
                /([^($\s]+)(?:\()/, 
                { cases: 
                    { 
                        '@eos': 'mix',
                        '@default': {token: 'mix', next: 'mixValue'}
                    }
                }                            
            ]
        ],
        ittfCommand: [
            [ /\$[a-z]+$/, 'ittf-command'],
            [ /\$[a-z]+/, { token: 'ittf-command', next: 'scriptLine'} ],
            [ /\$[ ]/, { token: 'interpolation', next: 'scriptLine'} ],
            [ /(\$global|\$)$/, { token: 'interpolation', next: 'scriptMultiLine'} ],
        ],                        
        nodeName: [
            [ 
                /([^($\s]+)/, 
                { cases: 
                    { 
                        '@eos': 'node-name',
                        '@default': {token: 'node-name', next: 'nodeValue'}
                    }
                }                            
            ]
        ],
        nodeValue: [
            [ /[^\$]+$/, { token: 'node-value', next: '@popall' }],
            [ /[^\$]+/, { token: 'node-value' }],                            
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
            [ /\$$/, { token: 'node-value', next: '@popall' }],
            [ /\$/, 'node-value']                            
        ],
        mixValue: [
            [ /\)/, { token: 'mix', next: '@popall' }],    
            [ /[^\$|\)]+$/, { token: 'mix-value', next: '@popall' }],
            [ /[^\$|\)]+/, { token: 'mix-value' }],                            
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
            [ /\$$/, { token: 'mix-value', next: '@popall' }],
            [ /\$/, 'mix-value']                            
        ],
        scriptLine: [
            [ /.*$/, 'interpolation', '@pop' ]
        ],
        scriptMultiLine: [
            [/[^\/\/\.]+/, 'interpolation'],
            [/\/\/\.$/, 'interpolation', '@pop' ]
        ],
    }
}
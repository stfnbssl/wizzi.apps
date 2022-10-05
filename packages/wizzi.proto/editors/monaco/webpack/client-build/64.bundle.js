(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '#'\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" },\r\n        { open: '`', close: '`' }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" },\r\n        { open: '`', close: '`' }\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    ignoreCase: true,\r\n    tokenPostfix: '.shell',\r\n    brackets: [\r\n        { token: 'delimiter.bracket', open: '{', close: '}' },\r\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\r\n        { token: 'delimiter.square', open: '[', close: ']' }\r\n    ],\r\n    keywords: [\r\n        'if',\r\n        'then',\r\n        'do',\r\n        'else',\r\n        'elif',\r\n        'while',\r\n        'until',\r\n        'for',\r\n        'in',\r\n        'esac',\r\n        'fi',\r\n        'fin',\r\n        'fil',\r\n        'done',\r\n        'exit',\r\n        'set',\r\n        'unset',\r\n        'export',\r\n        'function'\r\n    ],\r\n    builtins: [\r\n        'ab',\r\n        'awk',\r\n        'bash',\r\n        'beep',\r\n        'cat',\r\n        'cc',\r\n        'cd',\r\n        'chown',\r\n        'chmod',\r\n        'chroot',\r\n        'clear',\r\n        'cp',\r\n        'curl',\r\n        'cut',\r\n        'diff',\r\n        'echo',\r\n        'find',\r\n        'gawk',\r\n        'gcc',\r\n        'get',\r\n        'git',\r\n        'grep',\r\n        'hg',\r\n        'kill',\r\n        'killall',\r\n        'ln',\r\n        'ls',\r\n        'make',\r\n        'mkdir',\r\n        'openssl',\r\n        'mv',\r\n        'nc',\r\n        'node',\r\n        'npm',\r\n        'ping',\r\n        'ps',\r\n        'restart',\r\n        'rm',\r\n        'rmdir',\r\n        'sed',\r\n        'service',\r\n        'sh',\r\n        'shopt',\r\n        'shred',\r\n        'source',\r\n        'sort',\r\n        'sleep',\r\n        'ssh',\r\n        'start',\r\n        'stop',\r\n        'su',\r\n        'sudo',\r\n        'svn',\r\n        'tee',\r\n        'telnet',\r\n        'top',\r\n        'touch',\r\n        'vi',\r\n        'vim',\r\n        'wall',\r\n        'wc',\r\n        'wget',\r\n        'who',\r\n        'write',\r\n        'yes',\r\n        'zsh'\r\n    ],\r\n    // we include these common regular expressions\r\n    symbols: /[=><!~?&|+\\-*\\/\\^;\\.,]+/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            { include: '@whitespace' },\r\n            [\r\n                /[a-zA-Z]\\w*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': 'keyword',\r\n                        '@builtins': 'type.identifier',\r\n                        '@default': ''\r\n                    }\r\n                }\r\n            ],\r\n            { include: '@strings' },\r\n            { include: '@parameters' },\r\n            { include: '@heredoc' },\r\n            [/[{}\\[\\]()]/, '@brackets'],\r\n            [/-+\\w+/, 'attribute.name'],\r\n            [/@symbols/, 'delimiter'],\r\n            { include: '@numbers' },\r\n            [/[,;]/, 'delimiter']\r\n        ],\r\n        whitespace: [\r\n            [/\\s+/, 'white'],\r\n            [/(^#!.*$)/, 'metatag'],\r\n            [/(^#.*$)/, 'comment']\r\n        ],\r\n        numbers: [\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],\r\n            [/\\d+/, 'number']\r\n        ],\r\n        // Recognize strings, including those broken across lines\r\n        strings: [\r\n            [/'/, 'string', '@stringBody'],\r\n            [/\"/, 'string', '@dblStringBody']\r\n        ],\r\n        stringBody: [\r\n            [/'/, 'string', '@popall'],\r\n            [/./, 'string']\r\n        ],\r\n        dblStringBody: [\r\n            [/\"/, 'string', '@popall'],\r\n            [/./, 'string']\r\n        ],\r\n        heredoc: [\r\n            [\r\n                /(<<[-<]?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)/,\r\n                [\r\n                    'constants',\r\n                    'white',\r\n                    'string.heredoc.delimiter',\r\n                    'string.heredoc',\r\n                    'string.heredoc.delimiter'\r\n                ]\r\n            ]\r\n        ],\r\n        parameters: [\r\n            [/\\$\\d+/, 'variable.predefined'],\r\n            [/\\$\\w+/, 'variable'],\r\n            [/\\$[*@#?\\-$!0_]/, 'variable'],\r\n            [/\\$'/, 'variable', '@parameterBodyQuote'],\r\n            [/\\$\"/, 'variable', '@parameterBodyDoubleQuote'],\r\n            [/\\$\\(/, 'variable', '@parameterBodyParen'],\r\n            [/\\$\\{/, 'variable', '@parameterBodyCurlyBrace']\r\n        ],\r\n        parameterBodyQuote: [\r\n            [/[^#:%*@\\-!_']+/, 'variable'],\r\n            [/[#:%*@\\-!_]/, 'delimiter'],\r\n            [/[']/, 'variable', '@pop']\r\n        ],\r\n        parameterBodyDoubleQuote: [\r\n            [/[^#:%*@\\-!_\"]+/, 'variable'],\r\n            [/[#:%*@\\-!_]/, 'delimiter'],\r\n            [/[\"]/, 'variable', '@pop']\r\n        ],\r\n        parameterBodyParen: [\r\n            [/[^#:%*@\\-!_)]+/, 'variable'],\r\n            [/[#:%*@\\-!_]/, 'delimiter'],\r\n            [/[)]/, 'variable', '@pop']\r\n        ],\r\n        parameterBodyCurlyBrace: [\r\n            [/[^#:%*@\\-!_}]+/, 'variable'],\r\n            [/[#:%*@\\-!_]/, 'delimiter'],\r\n            [/[}]/, 'variable', '@pop']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js?");

/***/ })

}]);
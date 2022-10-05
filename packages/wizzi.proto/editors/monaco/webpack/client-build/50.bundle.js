(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js ***!
  \************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    // the default separators except `$-`\r\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#%\\^\\&\\*\\(\\)\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\r\n    comments: {\r\n        lineComment: '#',\r\n        blockComment: ['<#', '#>']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"', notIn: ['string'] },\r\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp('^\\\\s*#region\\\\b'),\r\n            end: new RegExp('^\\\\s*#endregion\\\\b')\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    ignoreCase: true,\r\n    tokenPostfix: '.ps1',\r\n    brackets: [\r\n        { token: 'delimiter.curly', open: '{', close: '}' },\r\n        { token: 'delimiter.square', open: '[', close: ']' },\r\n        { token: 'delimiter.parenthesis', open: '(', close: ')' }\r\n    ],\r\n    keywords: [\r\n        'begin',\r\n        'break',\r\n        'catch',\r\n        'class',\r\n        'continue',\r\n        'data',\r\n        'define',\r\n        'do',\r\n        'dynamicparam',\r\n        'else',\r\n        'elseif',\r\n        'end',\r\n        'exit',\r\n        'filter',\r\n        'finally',\r\n        'for',\r\n        'foreach',\r\n        'from',\r\n        'function',\r\n        'if',\r\n        'in',\r\n        'param',\r\n        'process',\r\n        'return',\r\n        'switch',\r\n        'throw',\r\n        'trap',\r\n        'try',\r\n        'until',\r\n        'using',\r\n        'var',\r\n        'while',\r\n        'workflow',\r\n        'parallel',\r\n        'sequence',\r\n        'inlinescript',\r\n        'configuration'\r\n    ],\r\n    helpKeywords: /SYNOPSIS|DESCRIPTION|PARAMETER|EXAMPLE|INPUTS|OUTPUTS|NOTES|LINK|COMPONENT|ROLE|FUNCTIONALITY|FORWARDHELPTARGETNAME|FORWARDHELPCATEGORY|REMOTEHELPRUNSPACE|EXTERNALHELP/,\r\n    // we include these common regular expressions\r\n    symbols: /[=><!~?&%|+\\-*\\/\\^;\\.,]+/,\r\n    escapes: /`(?:[abfnrtv\\\\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\r\n    // The main tokenizer for our languages\r\n    tokenizer: {\r\n        root: [\r\n            // commands and keywords\r\n            [\r\n                /[a-zA-Z_][\\w-]*/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': { token: 'keyword.$0' },\r\n                        '@default': ''\r\n                    }\r\n                }\r\n            ],\r\n            // whitespace\r\n            [/[ \\t\\r\\n]+/, ''],\r\n            // labels\r\n            [/^:\\w*/, 'metatag'],\r\n            // variables\r\n            [\r\n                /\\$(\\{((global|local|private|script|using):)?[\\w]+\\}|((global|local|private|script|using):)?[\\w]+)/,\r\n                'variable'\r\n            ],\r\n            // Comments\r\n            [/<#/, 'comment', '@comment'],\r\n            [/#.*$/, 'comment'],\r\n            // delimiters\r\n            [/[{}()\\[\\]]/, '@brackets'],\r\n            [/@symbols/, 'delimiter'],\r\n            // numbers\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\r\n            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],\r\n            [/\\d+?/, 'number'],\r\n            // delimiter: after number because of .\\d floats\r\n            [/[;,.]/, 'delimiter'],\r\n            // strings:\r\n            [/\\@\"/, 'string', '@herestring.\"'],\r\n            [/\\@'/, 'string', \"@herestring.'\"],\r\n            [\r\n                /\"/,\r\n                {\r\n                    cases: {\r\n                        '@eos': 'string',\r\n                        '@default': { token: 'string', next: '@string.\"' }\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /'/,\r\n                {\r\n                    cases: {\r\n                        '@eos': 'string',\r\n                        '@default': { token: 'string', next: \"@string.'\" }\r\n                    }\r\n                }\r\n            ]\r\n        ],\r\n        string: [\r\n            [\r\n                /[^\"'\\$`]+/,\r\n                {\r\n                    cases: {\r\n                        '@eos': { token: 'string', next: '@popall' },\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /@escapes/,\r\n                {\r\n                    cases: {\r\n                        '@eos': { token: 'string.escape', next: '@popall' },\r\n                        '@default': 'string.escape'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /`./,\r\n                {\r\n                    cases: {\r\n                        '@eos': {\r\n                            token: 'string.escape.invalid',\r\n                            next: '@popall'\r\n                        },\r\n                        '@default': 'string.escape.invalid'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /\\$[\\w]+$/,\r\n                {\r\n                    cases: {\r\n                        '$S2==\"': { token: 'variable', next: '@popall' },\r\n                        '@default': { token: 'string', next: '@popall' }\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /\\$[\\w]+/,\r\n                {\r\n                    cases: {\r\n                        '$S2==\"': 'variable',\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ],\r\n            [\r\n                /[\"']/,\r\n                {\r\n                    cases: {\r\n                        '$#==$S2': { token: 'string', next: '@pop' },\r\n                        '@default': {\r\n                            cases: {\r\n                                '@eos': { token: 'string', next: '@popall' },\r\n                                '@default': 'string'\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            ]\r\n        ],\r\n        herestring: [\r\n            [\r\n                /^\\s*([\"'])@/,\r\n                {\r\n                    cases: {\r\n                        '$1==$S2': { token: 'string', next: '@pop' },\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ],\r\n            [/[^\\$`]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/`./, 'string.escape.invalid'],\r\n            [\r\n                /\\$[\\w]+/,\r\n                {\r\n                    cases: {\r\n                        '$S2==\"': 'variable',\r\n                        '@default': 'string'\r\n                    }\r\n                }\r\n            ]\r\n        ],\r\n        comment: [\r\n            [/[^#\\.]+/, 'comment'],\r\n            [/#>/, 'comment', '@pop'],\r\n            [/(\\.)(@helpKeywords)(?!\\w)/, { token: 'comment.keyword.$2' }],\r\n            [/[\\.#]/, 'comment']\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js?");

/***/ })

}]);
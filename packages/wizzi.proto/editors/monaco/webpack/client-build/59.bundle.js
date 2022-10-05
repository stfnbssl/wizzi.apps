(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['/*', '*/']\r\n    },\r\n    brackets: [\r\n        ['{', '}'],\r\n        ['[', ']'],\r\n        ['(', ')']\r\n    ],\r\n    autoClosingPairs: [\r\n        { open: '[', close: ']' },\r\n        { open: '{', close: '}' },\r\n        { open: '(', close: ')' },\r\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\r\n        { open: '\"', close: '\"', notIn: ['string'] }\r\n    ],\r\n    surroundingPairs: [\r\n        { open: '{', close: '}' },\r\n        { open: '[', close: ']' },\r\n        { open: '(', close: ')' },\r\n        { open: '\"', close: '\"' },\r\n        { open: \"'\", close: \"'\" }\r\n    ],\r\n    folding: {\r\n        markers: {\r\n            start: new RegExp('^\\\\s*#pragma\\\\s+region\\\\b'),\r\n            end: new RegExp('^\\\\s*#pragma\\\\s+endregion\\\\b')\r\n        }\r\n    }\r\n};\r\nvar language = {\r\n    tokenPostfix: '.rust',\r\n    defaultToken: 'invalid',\r\n    keywords: [\r\n        'as',\r\n        'async',\r\n        'await',\r\n        'box',\r\n        'break',\r\n        'const',\r\n        'continue',\r\n        'crate',\r\n        'dyn',\r\n        'else',\r\n        'enum',\r\n        'extern',\r\n        'false',\r\n        'fn',\r\n        'for',\r\n        'if',\r\n        'impl',\r\n        'in',\r\n        'let',\r\n        'loop',\r\n        'match',\r\n        'mod',\r\n        'move',\r\n        'mut',\r\n        'pub',\r\n        'ref',\r\n        'return',\r\n        'self',\r\n        'static',\r\n        'struct',\r\n        'super',\r\n        'trait',\r\n        'true',\r\n        'try',\r\n        'type',\r\n        'unsafe',\r\n        'use',\r\n        'where',\r\n        'while',\r\n        'catch',\r\n        'default',\r\n        'union',\r\n        'static',\r\n        'abstract',\r\n        'alignof',\r\n        'become',\r\n        'do',\r\n        'final',\r\n        'macro',\r\n        'offsetof',\r\n        'override',\r\n        'priv',\r\n        'proc',\r\n        'pure',\r\n        'sizeof',\r\n        'typeof',\r\n        'unsized',\r\n        'virtual',\r\n        'yield'\r\n    ],\r\n    typeKeywords: [\r\n        'Self',\r\n        'm32',\r\n        'm64',\r\n        'm128',\r\n        'f80',\r\n        'f16',\r\n        'f128',\r\n        'int',\r\n        'uint',\r\n        'float',\r\n        'char',\r\n        'bool',\r\n        'u8',\r\n        'u16',\r\n        'u32',\r\n        'u64',\r\n        'f32',\r\n        'f64',\r\n        'i8',\r\n        'i16',\r\n        'i32',\r\n        'i64',\r\n        'str',\r\n        'Option',\r\n        'Either',\r\n        'c_float',\r\n        'c_double',\r\n        'c_void',\r\n        'FILE',\r\n        'fpos_t',\r\n        'DIR',\r\n        'dirent',\r\n        'c_char',\r\n        'c_schar',\r\n        'c_uchar',\r\n        'c_short',\r\n        'c_ushort',\r\n        'c_int',\r\n        'c_uint',\r\n        'c_long',\r\n        'c_ulong',\r\n        'size_t',\r\n        'ptrdiff_t',\r\n        'clock_t',\r\n        'time_t',\r\n        'c_longlong',\r\n        'c_ulonglong',\r\n        'intptr_t',\r\n        'uintptr_t',\r\n        'off_t',\r\n        'dev_t',\r\n        'ino_t',\r\n        'pid_t',\r\n        'mode_t',\r\n        'ssize_t'\r\n    ],\r\n    constants: ['true', 'false', 'Some', 'None', 'Left', 'Right', 'Ok', 'Err'],\r\n    supportConstants: [\r\n        'EXIT_FAILURE',\r\n        'EXIT_SUCCESS',\r\n        'RAND_MAX',\r\n        'EOF',\r\n        'SEEK_SET',\r\n        'SEEK_CUR',\r\n        'SEEK_END',\r\n        '_IOFBF',\r\n        '_IONBF',\r\n        '_IOLBF',\r\n        'BUFSIZ',\r\n        'FOPEN_MAX',\r\n        'FILENAME_MAX',\r\n        'L_tmpnam',\r\n        'TMP_MAX',\r\n        'O_RDONLY',\r\n        'O_WRONLY',\r\n        'O_RDWR',\r\n        'O_APPEND',\r\n        'O_CREAT',\r\n        'O_EXCL',\r\n        'O_TRUNC',\r\n        'S_IFIFO',\r\n        'S_IFCHR',\r\n        'S_IFBLK',\r\n        'S_IFDIR',\r\n        'S_IFREG',\r\n        'S_IFMT',\r\n        'S_IEXEC',\r\n        'S_IWRITE',\r\n        'S_IREAD',\r\n        'S_IRWXU',\r\n        'S_IXUSR',\r\n        'S_IWUSR',\r\n        'S_IRUSR',\r\n        'F_OK',\r\n        'R_OK',\r\n        'W_OK',\r\n        'X_OK',\r\n        'STDIN_FILENO',\r\n        'STDOUT_FILENO',\r\n        'STDERR_FILENO'\r\n    ],\r\n    supportMacros: [\r\n        'format!',\r\n        'print!',\r\n        'println!',\r\n        'panic!',\r\n        'format_args!',\r\n        'unreachable!',\r\n        'write!',\r\n        'writeln!'\r\n    ],\r\n    operators: [\r\n        '!',\r\n        '!=',\r\n        '%',\r\n        '%=',\r\n        '&',\r\n        '&=',\r\n        '&&',\r\n        '*',\r\n        '*=',\r\n        '+',\r\n        '+=',\r\n        '-',\r\n        '-=',\r\n        '->',\r\n        '.',\r\n        '..',\r\n        '...',\r\n        '/',\r\n        '/=',\r\n        ':',\r\n        ';',\r\n        '<<',\r\n        '<<=',\r\n        '<',\r\n        '<=',\r\n        '=',\r\n        '==',\r\n        '=>',\r\n        '>',\r\n        '>=',\r\n        '>>',\r\n        '>>=',\r\n        '@',\r\n        '^',\r\n        '^=',\r\n        '|',\r\n        '|=',\r\n        '||',\r\n        '_',\r\n        '?',\r\n        '#'\r\n    ],\r\n    escapes: /\\\\([nrt0\\\"''\\\\]|x\\h{2}|u\\{\\h{1,6}\\})/,\r\n    delimiters: /[,]/,\r\n    symbols: /[\\#\\!\\%\\&\\*\\+\\-\\.\\/\\:\\;\\<\\=\\>\\@\\^\\|_\\?]+/,\r\n    intSuffixes: /[iu](8|16|32|64|128|size)/,\r\n    floatSuffixes: /f(32|64)/,\r\n    tokenizer: {\r\n        root: [\r\n            [\r\n                /[a-zA-Z][a-zA-Z0-9_]*!?|_[a-zA-Z0-9_]+/,\r\n                {\r\n                    cases: {\r\n                        '@typeKeywords': 'keyword.type',\r\n                        '@keywords': 'keyword',\r\n                        '@supportConstants': 'keyword',\r\n                        '@supportMacros': 'keyword',\r\n                        '@constants': 'keyword',\r\n                        '@default': 'identifier'\r\n                    }\r\n                }\r\n            ],\r\n            // Designator\r\n            [/\\$/, 'identifier'],\r\n            // Lifetime annotations\r\n            [/'[a-zA-Z_][a-zA-Z0-9_]*(?=[^\\'])/, 'identifier'],\r\n            // Byte literal\r\n            [/'\\S'/, 'string.byteliteral'],\r\n            // Strings\r\n            [/\"/, { token: 'string.quote', bracket: '@open', next: '@string' }],\r\n            { include: '@numbers' },\r\n            // Whitespace + comments\r\n            { include: '@whitespace' },\r\n            [\r\n                /@delimiters/,\r\n                {\r\n                    cases: {\r\n                        '@keywords': 'keyword',\r\n                        '@default': 'delimiter'\r\n                    }\r\n                }\r\n            ],\r\n            [/[{}()\\[\\]<>]/, '@brackets'],\r\n            [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }]\r\n        ],\r\n        whitespace: [\r\n            [/[ \\t\\r\\n]+/, 'white'],\r\n            [/\\/\\*/, 'comment', '@comment'],\r\n            [/\\/\\/.*$/, 'comment']\r\n        ],\r\n        comment: [\r\n            [/[^\\/*]+/, 'comment'],\r\n            [/\\/\\*/, 'comment', '@push'],\r\n            ['\\\\*/', 'comment', '@pop'],\r\n            [/[\\/*]/, 'comment']\r\n        ],\r\n        string: [\r\n            [/[^\\\\\"]+/, 'string'],\r\n            [/@escapes/, 'string.escape'],\r\n            [/\\\\./, 'string.escape.invalid'],\r\n            [/\"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]\r\n        ],\r\n        numbers: [\r\n            //Octal\r\n            [/(0o[0-7_]+)(@intSuffixes)?/, { token: 'number' }],\r\n            //Binary\r\n            [/(0b[0-1_]+)(@intSuffixes)?/, { token: 'number' }],\r\n            //Exponent\r\n            [/[\\d][\\d_]*(\\.[\\d][\\d_]*)?[eE][+-][\\d_]+(@floatSuffixes)?/, { token: 'number' }],\r\n            //Float\r\n            [/\\b(\\d\\.?[\\d_]*)(@floatSuffixes)?\\b/, { token: 'number' }],\r\n            //Hexadecimal\r\n            [/(0x[\\da-fA-F]+)_?(@intSuffixes)?/, { token: 'number' }],\r\n            //Integer\r\n            [/[\\d][\\d_]*(@intSuffixes?)?/, { token: 'number' }]\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js?");

/***/ })

}]);
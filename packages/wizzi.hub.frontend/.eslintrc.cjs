/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\root\.eslintrc.cjs.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
'use strict';
module.exports = {
    root: true, 
    env: {
        browser: true, 
        es2020: true
     }, 
    extends: [
        'eslint:recommended', 
        'plugin:@typescript-eslint/recommended', 
        'plugin:react-hooks/recommended', 
        'airbnb', 
        'airbnb-typescript', 
        'eslint-config-prettier'
    ], 
    ignorePatterns: [
        'dist', 
        'vite.config.ts', 
        'vitest.config.ts', 
        'tests', 
        '*.cjs'
    ], 
    parser: '@typescript-eslint/parser', 
    parserOptions: {
        project: './tsconfig.json'
     }, 
    plugins: [
        'react-refresh', 
        'prettier', 
        '@typescript-eslint'
    ], 
    rules: {
        'prettier/prettier': 'error', 
        'react-refresh/only-export-components': [
            'warn', 
            {
                allowConstantExport: true
             }
        ], 
        'react/react-in-jsx-scope': 'off', 
        'react/prop-types': 'off', 
        'react/jsx-no-bind': 'off', 
        'import/extensions': [
            'error', 
            'ignorePackages', 
            {
                "": 'never', 
                'js': 'never', 
                'jsx': 'never', 
                'ts': 'never', 
                'tsx': 'never', 
                'mjs': 'never'
             }
        ], 
        'react/function-component-definition': [
            2, 
            {
                namedComponents: 'arrow-function', 
                unnamedComponents: 'arrow-function'
             }
        ]
     }
 };
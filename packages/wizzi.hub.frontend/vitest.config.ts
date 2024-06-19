/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\root\vitest.config.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
/// <reference types="vitest" />
import {defineConfig, mergeConfig} from 'vitest/config';
import viteConfig from './vite.config';
export default mergeConfig(viteConfig, defineConfig({
        test: {
            globals: true, 
            environment: 'jsdom', 
            setupFiles: './tests/setup.ts', 
            include: [
                "**/*.test.tsx"
            ]
         }
     }))
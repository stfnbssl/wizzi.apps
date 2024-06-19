/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\root\vite.config.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
        plugins: [
            react()
        ], 
        resolve: {
            alias: [
                {
                    find: '@/Assets', 
                    replacement: '/src/Assets'
                 }, 
                {
                    find: '@/Api', 
                    replacement: '/src/Api'
                 }, 
                {
                    find: '@/Components', 
                    replacement: '/src/Components'
                 }, 
                {
                    find: '@/Data', 
                    replacement: '/src/Data'
                 }, 
                {
                    find: '@/Pages', 
                    replacement: '/src/Pages'
                 }, 
                {
                    find: '@/Utils', 
                    replacement: '/src/Utils'
                 }
            ]
         }
     })
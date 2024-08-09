/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\root\vite.config.ts.ittf
    utc time: Wed, 07 Aug 2024 13:02:15 GMT
*/
import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
        build: {
            // Set the output directory
            outDir: path.resolve(__dirname, '..', 'wizzi.hub.backend', 'public', 'meta'), 
            // Ensure that Vite doesn't empty the outDir on build
            emptyOutDir: false
         }, 
        base: '/public/meta/', 
        plugins: [
            react()
        ], 
        server: {
            middlewareMode: 'html'
         }, 
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
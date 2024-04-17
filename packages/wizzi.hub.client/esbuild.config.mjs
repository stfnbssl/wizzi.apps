/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\root\esbuild.config.mjs.ittf
    utc time: Sat, 09 Mar 2024 13:13:31 GMT
*/
'use strict';
import esbuild from "esbuild";
import serve, {error, log} from "create-serve";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
console.log('process.argv', process.argv[2], __filename);
console.log('process.argv.includes("%--dev%")', process.argv.includes("--dev"), __filename);
const isDevServer = process.argv[2] == "%--dev%";
esbuild.build({
    entryPoints: [
        "src/index.tsx"
    ], 
    bundle: true, 
    outfile: "www/dist/bundle.js", 
    minify: !isDevServer, 
    sourcemap: true, 
    incremental: isDevServer, 
    target: [
        "chrome58", 
        "firefox57", 
        "safari11", 
        "edge18"
    ], 
    define: {
        "process.env.NODE_ENV": isDevServer ? '"development"' : '"production"', 
        __filename: '""'
     }, 
    watch: isDevServer && {
        onRebuild(err) {
            serve.update();
            (err ? error("❌ Failed") : log("✅ Updated"))}
        
     }
 }).catch(() => 

    process.exit(1)
)
if (isDevServer) {
    console.log('Starting server on port', 5000, __filename);
    serve.start({
        port: 5000, 
        root: "./www", 
        live: true
     })
}
else {
    console.log('No server', __filename);
}

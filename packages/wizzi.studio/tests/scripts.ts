import path from "path"
import {spawnExec} from "../src/utils/scripts/scriptManager"
import {config} from "../src/features/config"

const tnum: number = process.argv[2] ? parseInt(process.argv[2]) : 3;

const hash = '';

if (tnum == 1) {
    const wizziCliPath = '"C:/Users/Stefano Bassoli/AppData/Roaming/npm/node_modules/wizzi-cli/wizzi.config.js"';
    const cwd = "C:/My/wizzi/stfnbssl/wizzi.demo/packages/wizzi.demo.server/data/metaPackages/first.meta.package";
    // const cwd = path.resolve(__dirname, "..", "..");
    console.log("cwd", cwd);
    spawnExec({
        command: 'node', 
        cwd: cwd, 
        args: [wizziCliPath, "wizzi"]
     }).then( result => {
        console.log( result );
     }).catch( err => {
        console.log( err );
     });
}
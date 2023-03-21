// C:/My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\data\packages\demo.express.hello
import path from "path"
import {wizziPackageApi} from "../src/features/wizziPackage"
import {config} from "../src/features/config"

const tnum: number = process.argv[2] ? parseInt(process.argv[2]) : 3;

const hash = '';

if (tnum == 1) {
    wizziPackageApi.generateFromConfigFile("C:/My/wizzi/stfnbssl/wizzi.demo/packages/wizzi.demo.server/data/packages/demo.express.hello")
    .then( result => {
        console.log("generateFromConfigFile.result", result);
    }).catch(err => {
        console.log("generateFromConfigFile.err", err);
    });
}

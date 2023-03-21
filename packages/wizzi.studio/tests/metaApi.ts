import path from "path"
import {wizziMetaApi} from "../src/features/wizziMeta"
import {config} from "../src/features/config"

const tnum: number = process.argv[2] ? parseInt(process.argv[2]) : 3;

const hash = '';

if (tnum == 1) {
    wizziMetaApi.createWizziPackage({
        metaSourcesFolderPath: "C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.meta",
        metaGenerator: "ts-express",
        outputPackageName: "first.meta.package",
        cliCtxName: "hello",
        outputPackagePath: path.join(config.dataPath, 'metaPackages')
    })
        .then( result => {
            console.log("createWizziPackage.result", result);
        }).catch(err => {
            console.log("createWizziPackage.err", err);
        });
}


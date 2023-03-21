import path from "path"
import {wizziProds} from "../src/features/wizzi"
import {config} from "../src/features/config"
import { ittfScanner } from "wizzi-utils";

const tnum: number = process.argv[2] ? parseInt(process.argv[2]) : 3;

const hash = '';

if (tnum == 1) {
    wizziProds.executeJobFs({
        storeKind: "filesystem",
        wfjobName: undefined,
        wfjobIttfDocumentUri: "C:/My/wizzi/stfnbssl/wizzi.demo/packages/wizzi.demo.server/data/jobs/hello/generate.wfjob.ittf",
        globalContext: {
            wzConfigIsDevelopment: true
        },
        plugins: [
            './wizzi-core/index.js', 
            './wizzi-js/index.js', 
            './wizzi-web/index.js'
        ], 
        pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi/packages", 
    }).then( result => {
        console.log("createWizziPackage.result", result);
    }).catch(err => {
        console.log("createWizziPackage.err", err);
    });
}

if (tnum == 2) {
    wizziProds.generateWizziModelTypes({
        storeKind: "filesystem",
        wfschemaName: "python",
        wfschemaIttfDocumentUri: "C:/My/wizzi/stfnbssl/wizzi.demo/packages/wizzi.demo.server/data/wizzi.plugin.py/.wizzi-override/lib/wizzi/schemas/py.wfschema.ittf",
        wfschemaOutputPackageFolder: "C:/My/wizzi/stfnbssl/wizzi.demo/packages/wizzi.demo.server/data/wizzi.plugin.py/lib/wizzi/models",
        mTreeBuildupContext: {},
        globalContext: {
            wzConfigIsDevelopment: true
        },
        plugins: [
            './wizzi-core/index.js', 
            './wizzi-js/index.js', 
            './wizzi-web/index.js'
        ], 
        pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi/packages", 
    })
        .then( result => {
            console.log("createWizziPackage.result", result);
        }).catch(err => {
            console.log("createWizziPackage.err", err);
        });
}

if (tnum == 3) {
    const rootFolder = config.dataPath;
    const filePath = path.join(rootFolder, "packages/demo.express.hello/.wizzi/src/App.ts.ittf");
    wizziProds.scanIttfDocumentFs(filePath, rootFolder)
        .then( result => {
            console.log("scanIttfDocumentFs.result", result);
        }).catch(err => {
            console.log("scanIttfDocumentFs.err", err);
        });
}

if (tnum == 4) {
    // const rootFolder = config.dataPath;
    const folderPath = path.join(config.dataPath, "packages/demo.express.hello/.wizzi/src");
    const rootFolder = path.dirname(folderPath)
    wizziProds.scanIttfFolder(folderPath, rootFolder)
        .then( result => {
            console.log("scanIttfDocumentFs.result", result);
            wizziProds.folderBrowseToPackiFiles(result)
                .then( resultPacki => {
                    console.log("scanIttfDocumentFs.resultPacki", resultPacki);
                }).catch(err => {
                    console.log("scanIttfDocumentFs.err", err);
                });
        }).catch(err => {
            console.log("scanIttfDocumentFs.err", err);
        });
}

if (tnum == 5) {
    const folderPath = path.join(config.ittfPath, 'demo', 'ttech', 'html');
    wizziProds.folderFsToPackiFiles(folderPath)
        .then( result => {
            console.log("folderFsToPackiFiles.result", result);
        }).catch(err => {
            console.log("folderFsToPackiFiles.err", err);
        });
}

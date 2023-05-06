/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziPackage\api\packageFs.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
*/
import path from 'path';
import fs from 'fs';

async function searchConfigFile(packageFolderPath?: string, configName?: string) {

    return new Promise(
        // loog 'searching ', configFilename
        (resolve, reject) => {
        
            let configFilename = configName ? 'wizzi.config.' + name + '.js' : 'wizzi.config.js';
            let currentDir = packageFolderPath;
            let currentPath = null;
            let configPath = null;
            try {
                while (configPath == null && currentDir.length > 3) {
                    currentPath = path.join(currentDir, configFilename);
                    try {
                        // loog 'wizziPackage.packageFs.searchConfigFile.currentPath', currentPath
                        const stat = fs.lstatSync(currentPath);
                        if (stat.isFile()) {
                            configPath = currentPath;
                        }
                    } 
                    catch (ex) {
                        return reject({
                                message: "wizziPackage.packageFs.searchConfigFile error", 
                                err: ex
                             });
                    } 
                    currentDir = path.dirname(currentDir);
                }
                return resolve(configPath);
            } 
            catch (ex) {
                console.log("[31m%s[0m", 'wizziPackage.packageFs.searchConfigFile.error', ex);
                return reject({
                        message: 'wizziPackage.packageFs.searchConfigFile.error', ex
                     });
            } 
        }
        );
}

export {searchConfigFile};

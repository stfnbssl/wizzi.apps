/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\features\config\env.ts.ittf
    utc time: Fri, 09 Aug 2024 16:10:15 GMT
*/
import path from 'path';
import dotenv from 'dotenv';
import {cleanEnv, str, bool, port} from 'envalid';
import {ConfigType} from './types';
function validateEnv() {
    dotenv.config();
    let checkedEnv = cleanEnv(process.env, {
        NOCACHE: bool(), 
        SESSION_SECRET: str(), 
        MONGO_HOST: str(), 
        MONGO_USER: str(), 
        MONGO_PASSWORD: str(), 
        MONGO_PATH: str(), 
        IS_WIZZI_DEV: bool(), 
        PACKI_CONFIG_PATH: str(), 
        PORT: port()
     });
    return checkedEnv;
}
let config: ConfigType;
export default function create():  ConfigType {
        if (config == null) {
            const checkedEnv = validateEnv();
            const __rootPath = path.join(__dirname, '..');
            const __ittfPath = path.join(__rootPath, 'ittf');
            const __dataPath = path.join(__rootPath, 'data');
            config = {
                noCache: checkedEnv.NOCACHE, 
                sessionSecret: checkedEnv.SESSION_SECRET, 
                mongoHost: checkedEnv.MONGO_HOST, 
                mongoUser: checkedEnv.MONGO_USER, 
                mongoPassword: checkedEnv.MONGO_PASSWORD, 
                mongoPath: checkedEnv.MONGO_PATH, 
                isWizziDev: checkedEnv.IS_WIZZI_DEV, 
                packiConfigPath: checkedEnv.PACKI_CONFIG_PATH, 
                port: checkedEnv.PORT, 
                userUserName: "stfnbssl", 
                userDisplayName: "Stefano Bassoli", 
                userAvatarUrl: "https://avatars.githubusercontent.com/u/728956?v=4", 
                ittfPath: __ittfPath, 
                dataPath: __dataPath, 
                metaHtmlIttfPath: path.join(__ittfPath, 'meta', 'document', 'index.html.ittf'), 
                metaFolderIttfPath: path.join(__ittfPath, 'meta', 'folder', 'index.html.ittf'), 
                metaHtmlTextPath: path.join(__ittfPath, 'meta', 'text', 'index.html.ittf')
             };
            Object.keys(config).forEach((element) => {
                if (element.toLowerCase().indexOf("pass") < 0 && element.indexOf("secr") < 0) {
                    console.log('Created config', element, (config as any)[element])
                }
            }
            )
        }
        return config;
    }
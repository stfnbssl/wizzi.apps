/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\features\config\env.ts.ittf
    utc time: Wed, 31 Jul 2024 13:44:15 GMT
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
        PORT: port(), 
        ITTF_PATH: str()
     });
    return checkedEnv;
}
let config: ConfigType;
export default function create():  ConfigType {
        if (config == null) {
            const checkedEnv = validateEnv();
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
                ittfPath: checkedEnv.ITTF_PATH
             };
            Object.keys(config).forEach((element) => {
                if (element.indexOf("Pass") < 0 && element.indexOf("Secr") < 0) {
                    console.log('Created config', element, (config as any)[element])
                }
            }
            )
        }
        return config;
    }
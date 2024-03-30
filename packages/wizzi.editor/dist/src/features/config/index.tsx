/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\config\index.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
import * as defaults from './defaults';
import {PackiFile} from '../packi';

export type ConfigType = { 
    SERVER_URL: string;
    API_URL: string;
    EDITOR_LOAD_FALLBACK_TIMEOUT: number;
    DEFAULT_PACKI_CODE: { 
        [path: string]: PackiFile;
    };
    PREFERENCES_KEY: string;
};

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'local';

let _config: ConfigType;

function getConfig() {

    if (_config == null) {
        _config = {
            SERVER_URL: 'http://localhost:5100', 
            API_URL: 'http://localhost:5100/api/v1', 
            EDITOR_LOAD_FALLBACK_TIMEOUT: defaults.EDITOR_LOAD_FALLBACK_TIMEOUT, 
            DEFAULT_PACKI_CODE: defaults.DEFAULT_PACKI_CODE, 
            PREFERENCES_KEY: 'packi.preferences.config'
         };
        console.log('features.config', _config, __filename);
    }
    return _config;
}

export const config: ConfigType = getConfig();

export const DEFAULT_PACKI_CODE = config.DEFAULT_PACKI_CODE;

export default config;

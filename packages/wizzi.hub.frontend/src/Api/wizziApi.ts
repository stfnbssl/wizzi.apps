/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Api\wizziApi.ts.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import axios, {AxiosError, AxiosResponse} from 'axios';
import {PackiFiles} from '@/Api/types';
interface Result {
}
const BASE_URL = 'http://localhost:3003/api/v1/wizzi';
export function setToken(token: string) {
    axios.interceptors.request.use((config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
    )
}
axios.interceptors.response.use(res => 
    res
, (error: AxiosError) => {
    const {
        data, 
        status
     } = error.response!;
    switch (status) {
        case 400: {
            console.error(data);
            break;
        }
        case 401: {
            console.error('unauthorised');
            break;
        }
        case 404: {
            console.error('/not-found');
            break;
        }
        case 500: {
            console.error('/server-error');
            break;
        }
    }
    return Promise.reject(error);
}
)
const responseBody = <T>(response: AxiosResponse<T>) => 
    response.data
;
const request = {
    get: async <T>(url: string) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.get<T>(url).then(responseBody)
        ;
    }
    , 
    post: async <T>(url: string, body: { 
    }) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.post<T>(url, body).then(responseBody)
        ;
    }
    
 };
export function generateArtifact(mainIttf: string, packiFiles: PackiFiles, contextItems: any) {
    const url = 'production/artifact';
    const data = {
        ittfDocument: {
            source: 'packi', 
            mainIttf: mainIttf, 
            packiFiles: packiFiles
         }, 
        contextItems: contextItems || []
     };
    return new Promise((resolve, reject) => 
            request.post<Result>(url, data).then((response) => {
                console.log('api.Wizzi.generateArtifact.response', response);
                return resolve(response);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.Wizzi.generateArtifact.error', err);
                return reject(err);
            }
            )
        
        );
}

export function generateFolderArtifacts(
    sourceFolderUri: string, 
    destFolderUri: string, 
    packiFiles: PackiFiles, 
    generateFragments: boolean, 
    contextItems: any) {
    const url = 'production/folder/artifacts';
    const data = {
        ittfFolder: {
            source: 'packi', 
            sourceFolderUri: sourceFolderUri, 
            destFolderUri: destFolderUri, 
            generateFragments: generateFragments, 
            packiFiles: packiFiles
         }, 
        contextItems: contextItems || []
     };
    return new Promise((resolve, reject) => 
            request.post<Result>(url, data).then((response) => {
                console.log('api.Wizzi.generateFolderArtifacts.response', response);
                return resolve(response);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.Wizzi.generateFolderArtifacts.error', err);
                return reject(err);
            }
            )
        
        );
}
/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Api\wizziHubApi.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import axios, {AxiosError, AxiosResponse} from 'axios';
interface ProductionItem {
    id: string;
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
}
interface CRUDResult {
    oper?: string;
    ok: boolean;
    item?: any;
    message?: string;
}
const BASE_URL = 'http://localhost:3003/api/v1/production';
function setToken(token: string) {
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
const responseBody = (response: AxiosResponse<T>) => 
    response.data
;
const request = {
    get: <T>(url: string) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.get<T>(url).then(responseBody)
        ;
    }
    , 
    post: <T>(url: string, body: { 
    }) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.post<T>(url, body).then(responseBody)
        ;
    }
    , 
    put: <T>(url: string, body: { 
    }) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.post<T>(url, body).then(responseBody)
        ;
    }
    , 
    delete: <T>(url: string, body: { 
    }) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.delete<T>(url, body).then(responseBody)
        ;
    }
    
 };
/**
    * 
    * Fetches a ArtifactProduction collection or item
    * 
    * @param {string} owner The owner of the production
    * @param {string} name Optional. The name of the production,
    * -                              if null returns all owner's productions
    * 
*/
export function getArtifact(owner: string, name?: string) {
    let url = 'artifact/' + encodeURIComponent(owner);
    if (name && name.length > 0) {
        url += '/' + name;
    }
    return new Promise((resolve, reject) => {
            console.log('getArtifact.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('getArtifact.response', response);
                return resolve(response);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getArtifact.error', err);
                return reject(err);
            }
            )
        }
        );
}

/**
    * 
    * Updates a ArtifactProduction item
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.putArtifact', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options
function putArtifact(id: string, packiFiles: any, options: any) {
    const url = 'artifact/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putArtifact.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putArtifact.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Creates a new ArtifactProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.createArtifact', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options
function createArtifact(
    owner: string, 
    name: string, 
    packiFiles: any, 
    options: any) {
    options = options || {};
    const url = 'artifact/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description, 
        wizziSchema, 
        mainIttf, 
        ...rest
     } = options;
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('createArtifact.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'createArtifact.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Updates a ArtifactProduction applying a diff object
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
    * 
*/
export // info 'api.WizziHub.putArtifactPackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options
function putArtifactPackiDiffs(id: string, packiDiffs: any, options: any) {
    const url = 'artifact/packidiffs/' + encodeURIComponent(id);
    const data = {
        packiDiffs, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putArtifactPackiDiffs.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putArtifactPackiDiffs.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Delete a ArtifactProduction item
    * 
    * @param {string} id The id of the production item
    * 
*/
export // info 'deleteArtifact', 'id', id
function deleteArtifact(id: string) {
    const url = 'artifact/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('deleteArtifact.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'deleteArtifact.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Fetches a PackageProduction collection or item
    * 
    * @param {string} owner The owner of the production
    * @param {string} name Optional. The name of the production,
    * -                              if null returns all owner's productions
    * 
*/
export function getPackage(owner: string, name?: string) {
    let url = 'package/' + encodeURIComponent(owner);
    if (name && name.length > 0) {
        url += '/' + name;
    }
    return new Promise((resolve, reject) => {
            console.log('getPackage.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('getPackage.response', response);
                return resolve(response);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getPackage.error', err);
                return reject(err);
            }
            )
        }
        );
}
/**
    * 
    * Updates a PackageProduction item
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.putPackage', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options
function putPackage(id: string, packiFiles: any, options: any) {
    const url = 'package/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putPackage.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putPackage.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Creates a new PackageProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.createPackage', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options
function createPackage(
    owner: string, 
    name: string, 
    packiFiles: any, 
    options: any) {
    options = options || {};
    const url = 'package/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('createPackage.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'createPackage.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Updates a PackageProduction applying a diff object
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
    * 
*/
export // info 'api.WizziHub.putPackagePackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options
function putPackagePackiDiffs(id: string, packiDiffs: any, options: any) {
    const url = 'package/packidiffs/' + encodeURIComponent(id);
    const data = {
        packiDiffs, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putPackagePackiDiffs.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putPackagePackiDiffs.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Delete a PackageProduction item
    * 
    * @param {string} id The id of the production item
    * 
*/
export // info 'deletePackage', 'id', id
function deletePackage(id: string) {
    const url = 'package/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('deletePackage.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'deletePackage.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Fetches a PluginProduction collection or item
    * 
    * @param {string} owner The owner of the production
    * @param {string} name Optional. The name of the production,
    * -                              if null returns all owner's productions
    * 
*/
export function getPlugin(owner: string, name?: string) {
    let url = 'plugin/' + encodeURIComponent(owner);
    if (name && name.length > 0) {
        url += '/' + name;
    }
    return new Promise((resolve, reject) => {
            console.log('getPlugin.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('getPlugin.response', response);
                return resolve(response);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getPlugin.error', err);
                return reject(err);
            }
            )
        }
        );
}
/**
    * 
    * Updates a PluginProduction item
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.putPlugin', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options
function putPlugin(id: string, packiFiles: any, options: any) {
    const url = 'plugin/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putPlugin.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putPlugin.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Creates a new PluginProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.createPlugin', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options
function createPlugin(
    owner: string, 
    name: string, 
    packiFiles: any, 
    options: any) {
    options = options || {};
    const url = 'plugin/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('createPlugin.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'createPlugin.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Updates a PluginProduction applying a diff object
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
    * 
*/
export // info 'api.WizziHub.putPluginPackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options
function putPluginPackiDiffs(id: string, packiDiffs: any, options: any) {
    const url = 'plugin/packidiffs/' + encodeURIComponent(id);
    const data = {
        packiDiffs, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putPluginPackiDiffs.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putPluginPackiDiffs.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Delete a PluginProduction item
    * 
    * @param {string} id The id of the production item
    * 
*/
export // info 'deletePlugin', 'id', id
function deletePlugin(id: string) {
    const url = 'plugin/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('deletePlugin.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'deletePlugin.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Fetches a MetaProduction collection or item
    * 
    * @param {string} owner The owner of the production
    * @param {string} name Optional. The name of the production,
    * -                              if null returns all owner's productions
    * 
*/
export function getMeta(owner: string, name?: string) {
    let url = 'meta/' + encodeURIComponent(owner);
    if (name && name.length > 0) {
        url += '/' + name;
    }
    return new Promise((resolve, reject) => {
            console.log('getMeta.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('getMeta.response', response);
                return resolve(response);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getMeta.error', err);
                return reject(err);
            }
            )
        }
        );
}
/**
    * 
    * Updates a MetaProduction item
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.putMeta', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options
function putMeta(id: string, packiFiles: any, options: any) {
    const url = 'meta/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putMeta.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putMeta.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Creates a new MetaProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.createMeta', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options
function createMeta(
    owner: string, 
    name: string, 
    packiFiles: any, 
    options: any) {
    options = options || {};
    const url = 'meta/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('createMeta.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'createMeta.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Updates a MetaProduction applying a diff object
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
    * 
*/
export // info 'api.WizziHub.putMetaPackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options
function putMetaPackiDiffs(id: string, packiDiffs: any, options: any) {
    const url = 'meta/packidiffs/' + encodeURIComponent(id);
    const data = {
        packiDiffs, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putMetaPackiDiffs.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putMetaPackiDiffs.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Delete a MetaProduction item
    * 
    * @param {string} id The id of the production item
    * 
*/
export // info 'deleteMeta', 'id', id
function deleteMeta(id: string) {
    const url = 'meta/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('deleteMeta.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'deleteMeta.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Fetches a TFolderProduction collection or item
    * 
    * @param {string} owner The owner of the production
    * @param {string} name Optional. The name of the production,
    * -                              if null returns all owner's productions
    * 
*/
export function getTFolder(owner: string, name?: string) {
    let url = 'tfolder/' + encodeURIComponent(owner);
    if (name && name.length > 0) {
        url += '/' + name;
    }
    return new Promise((resolve, reject) => {
            console.log('getTFolder.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('getTFolder.response', response);
                return resolve(response);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getTFolder.error', err);
                return reject(err);
            }
            )
        }
        );
}
/**
    * 
    * Updates a TFolderProduction item
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.putTFolder', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options
function putTFolder(id: string, packiFiles: any, options: any) {
    const url = 'tfolder/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putTFolder.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putTFolder.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Creates a new TFolderProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.createTFolder', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options
function createTFolder(
    owner: string, 
    name: string, 
    packiFiles: any, 
    options: any) {
    options = options || {};
    const url = 'tfolder/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('createTFolder.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'createTFolder.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Updates a TFolderProduction applying a diff object
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
    * 
*/
export // info 'api.WizziHub.putTFolderPackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options
function putTFolderPackiDiffs(id: string, packiDiffs: any, options: any) {
    const url = 'tfolder/packidiffs/' + encodeURIComponent(id);
    const data = {
        packiDiffs, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putTFolderPackiDiffs.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putTFolderPackiDiffs.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Delete a TFolderProduction item
    * 
    * @param {string} id The id of the production item
    * 
*/
export // info 'deleteTFolder', 'id', id
function deleteTFolder(id: string) {
    const url = 'tfolder/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('deleteTFolder.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'deleteTFolder.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Fetches a JobProduction collection or item
    * 
    * @param {string} owner The owner of the production
    * @param {string} name Optional. The name of the production,
    * -                              if null returns all owner's productions
    * 
*/
export function getJob(owner: string, name?: string) {
    let url = 'job/' + encodeURIComponent(owner);
    if (name && name.length > 0) {
        url += '/' + name;
    }
    return new Promise((resolve, reject) => {
            console.log('getJob.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('getJob.response', response);
                return resolve(response);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getJob.error', err);
                return reject(err);
            }
            )
        }
        );
}
/**
    * 
    * Updates a JobProduction item
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.putJob', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options
function putJob(id: string, packiFiles: any, options: any) {
    const url = 'job/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putJob.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putJob.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Creates a new JobProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export // info 'api.WizziHub.createJob', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options
function createJob(
    owner: string, 
    name: string, 
    packiFiles: any, 
    options: any) {
    options = options || {};
    const url = 'job/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('createJob.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'createJob.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Updates a JobProduction applying a diff object
    * 
    * @param {string} id The id of the production item
    * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
    * 
*/
export // info 'api.WizziHub.putJobPackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options
function putJobPackiDiffs(id: string, packiDiffs: any, options: any) {
    const url = 'job/packidiffs/' + encodeURIComponent(id);
    const data = {
        packiDiffs, 
        options
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('putJobPackiDiffs.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'putJobPackiDiffs.error', err);
                return reject(err);
            }
            )
        
        );
}
/**
    * 
    * Delete a JobProduction item
    * 
    * @param {string} id The id of the production item
    * 
*/
export // info 'deleteJob', 'id', id
function deleteJob(id: string) {
    const url = 'job/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('deleteJob.response', response);
                resolve(response)
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'deleteJob.error', err);
                return reject(err);
            }
            )
        
        );
}
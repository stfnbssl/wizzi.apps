/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Api\wizziHubApi.ts.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import axios, {AxiosError, AxiosResponse} from 'axios';
import {PackiFiles} from '@/Api/types';
interface CRUDResult {
    oper?: string;
    ok: boolean;
    item?: any;
    message?: string;
}
const BASE_URL = 'http://localhost:3003/api/v1/production';
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
    , 
    put: <T>(url: string, body: { 
    }) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.put<T>(url, body).then(responseBody)
        ;
    }
    , 
    delete: <T>(url: string) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.delete<T>(url, {}).then(responseBody)
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
            console.log('api.WizziHub.getArtifact.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.getArtifact.response', response);
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
function putArtifact(id: string, packiFiles: PackiFiles, options: any) {
    const url = 'artifact/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.put<CRUDResult>(url, data).then((response) => {
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
    packiFiles: PackiFiles, 
    options: any) {
    options = options || {};
    const url = 'artifact/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description, 
        wizziSchema, 
        mainIttf
     } = options;
    const data = {
        packiFiles, 
        description, 
        wizziSchema, 
        mainIttf
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.createArtifact.response', response);
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
            request.put<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.putArtifactPackiDiffs.response', response);
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
export // info 'api.WizziHub.deleteArtifact', 'id', id
function deleteArtifact(id: string) {
    const url = 'artifact/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.deleteArtifact.response', response);
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
    * Creates or update a ArtifactProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export function createOrUpdateArtifact(
    owner: string, 
    name: string, 
    packiFiles: PackiFiles, 
    options: any) {
    return new Promise((resolve, reject) => 
            getArtifact(owner, name).then((response: any) => {
                if (response.err || response.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateArtifact.getArtifact.response", response.err || response.error);
                    return reject(response.err || response.error);
                }
                if (response.ok) {
                    putArtifact(response.item._id, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateArtifact.updateArtifact.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updateArtifact.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
                else {
                    createArtifact(owner, name, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateArtifact.createArtifact.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updateArtifact.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
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
            console.log('api.WizziHub.getPackage.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.getPackage.response', response);
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
function putPackage(id: string, packiFiles: PackiFiles, options: any) {
    const url = 'package/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.put<CRUDResult>(url, data).then((response) => {
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
    packiFiles: PackiFiles, 
    options: any) {
    options = options || {};
    const url = 'package/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        description
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.createPackage.response', response);
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
            request.put<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.putPackagePackiDiffs.response', response);
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
export // info 'api.WizziHub.deletePackage', 'id', id
function deletePackage(id: string) {
    const url = 'package/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.deletePackage.response', response);
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
    * Creates or update a PackageProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export function createOrUpdatePackage(
    owner: string, 
    name: string, 
    packiFiles: PackiFiles, 
    options: any) {
    return new Promise((resolve, reject) => 
            getPackage(owner, name).then((response: any) => {
                if (response.err || response.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdatePackage.getPackage.response", response.err || response.error);
                    return reject(response.err || response.error);
                }
                if (response.ok) {
                    putPackage(response.item._id, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdatePackage.updatePackage.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updatePackage.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
                else {
                    createPackage(owner, name, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdatePackage.createPackage.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updatePackage.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
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
            console.log('api.WizziHub.getPlugin.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.getPlugin.response', response);
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
function putPlugin(id: string, packiFiles: PackiFiles, options: any) {
    const url = 'plugin/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.put<CRUDResult>(url, data).then((response) => {
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
    packiFiles: PackiFiles, 
    options: any) {
    options = options || {};
    const url = 'plugin/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        description
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.createPlugin.response', response);
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
            request.put<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.putPluginPackiDiffs.response', response);
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
export // info 'api.WizziHub.deletePlugin', 'id', id
function deletePlugin(id: string) {
    const url = 'plugin/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.deletePlugin.response', response);
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
    * Creates or update a PluginProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export function createOrUpdatePlugin(
    owner: string, 
    name: string, 
    packiFiles: PackiFiles, 
    options: any) {
    return new Promise((resolve, reject) => 
            getPlugin(owner, name).then((response: any) => {
                if (response.err || response.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdatePlugin.getPlugin.response", response.err || response.error);
                    return reject(response.err || response.error);
                }
                if (response.ok) {
                    putPlugin(response.item._id, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdatePlugin.updatePlugin.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updatePlugin.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
                else {
                    createPlugin(owner, name, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdatePlugin.createPlugin.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updatePlugin.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
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
            console.log('api.WizziHub.getMeta.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.getMeta.response', response);
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
function putMeta(id: string, packiFiles: PackiFiles, options: any) {
    const url = 'meta/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.put<CRUDResult>(url, data).then((response) => {
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
    packiFiles: PackiFiles, 
    options: any) {
    options = options || {};
    const url = 'meta/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        description
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.createMeta.response', response);
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
            request.put<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.putMetaPackiDiffs.response', response);
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
export // info 'api.WizziHub.deleteMeta', 'id', id
function deleteMeta(id: string) {
    const url = 'meta/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.deleteMeta.response', response);
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
    * Creates or update a MetaProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export function createOrUpdateMeta(
    owner: string, 
    name: string, 
    packiFiles: PackiFiles, 
    options: any) {
    return new Promise((resolve, reject) => 
            getMeta(owner, name).then((response: any) => {
                if (response.err || response.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateMeta.getMeta.response", response.err || response.error);
                    return reject(response.err || response.error);
                }
                if (response.ok) {
                    putMeta(response.item._id, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateMeta.updateMeta.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updateMeta.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
                else {
                    createMeta(owner, name, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateMeta.createMeta.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updateMeta.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
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
            console.log('api.WizziHub.getTFolder.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.getTFolder.response', response);
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
function putTFolder(id: string, packiFiles: PackiFiles, options: any) {
    const url = 'tfolder/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.put<CRUDResult>(url, data).then((response) => {
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
    packiFiles: PackiFiles, 
    options: any) {
    options = options || {};
    const url = 'tfolder/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        description
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.createTFolder.response', response);
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
            request.put<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.putTFolderPackiDiffs.response', response);
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
export // info 'api.WizziHub.deleteTFolder', 'id', id
function deleteTFolder(id: string) {
    const url = 'tfolder/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.deleteTFolder.response', response);
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
    * Creates or update a TFolderProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export function createOrUpdateTFolder(
    owner: string, 
    name: string, 
    packiFiles: PackiFiles, 
    options: any) {
    return new Promise((resolve, reject) => 
            getTFolder(owner, name).then((response: any) => {
                if (response.err || response.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateTFolder.getTFolder.response", response.err || response.error);
                    return reject(response.err || response.error);
                }
                if (response.ok) {
                    putTFolder(response.item._id, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateTFolder.updateTFolder.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updateTFolder.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
                else {
                    createTFolder(owner, name, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateTFolder.createTFolder.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updateTFolder.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
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
            console.log('api.WizziHub.getJob.url', url);
            request.get<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.getJob.response', response);
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
function putJob(id: string, packiFiles: PackiFiles, options: any) {
    const url = 'job/' + encodeURIComponent(id);
    const data = {
        packiFiles, 
        options
     };
    return new Promise((resolve, reject) => 
            request.put<CRUDResult>(url, data).then((response) => {
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
    packiFiles: PackiFiles, 
    options: any) {
    options = options || {};
    const url = 'job/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name);
    const {
        description
     } = options;
    const data = {
        packiFiles, 
        description
     };
    return new Promise((resolve, reject) => 
            request.post<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.createJob.response', response);
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
            request.put<CRUDResult>(url, data).then((response) => {
                console.log('api.WizziHub.putJobPackiDiffs.response', response);
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
export // info 'api.WizziHub.deleteJob', 'id', id
function deleteJob(id: string) {
    const url = 'job/' + encodeURIComponent(id);
    return new Promise((resolve, reject) => 
            request.delete<CRUDResult>(url).then((response) => {
                console.log('api.WizziHub.deleteJob.response', response);
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
/**
    * 
    * Creates or update a JobProduction item
    * 
    * @param {string} [owner] The owner of the production item
    * @param {string} [name] The name of the production item
    * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
    * 
*/
export function createOrUpdateJob(
    owner: string, 
    name: string, 
    packiFiles: PackiFiles, 
    options: any) {
    return new Promise((resolve, reject) => 
            getJob(owner, name).then((response: any) => {
                if (response.err || response.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateJob.getJob.response", response.err || response.error);
                    return reject(response.err || response.error);
                }
                if (response.ok) {
                    putJob(response.item._id, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateJob.updateJob.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updateJob.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
                else {
                    createJob(owner, name, packiFiles, options).then((response: any) => {
                        if (response.err || response.error) {
                            console.log("[31m%s[0m", "Error", "api.WizziHub.createOrUpdateJob.createJob.response", response.err || response.error);
                            return reject(response.err || response.error);
                        }
                        alert('updateJob.response' + JSON.stringify(response))
                        return resolve(response);
                    }
                    )
                }
            }
            )
        
        );
}
/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Api\wizziMetaApi.ts.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import axios, {AxiosError, AxiosResponse} from 'axios';
import * as wizziHubApi from '@/Api/wizziHubApi';
import * as packiApi from '@/Api/packiApi';
import {MetaProvidesData} from '@/Data/mvc/MetaProduction/types';
import {ParameterItem} from '@/Components/metaCtxBuilder/types';
import {HubProductionItem, HubDbMetaProvides, MetaPlugin, MetaPluginExt, MetaPluginCategoryExt, MetaProduction, MetaProductionExt, MetaProductionCategoryExt, MetaParameters, MetaProductionFiles} from './types';
interface Result {
    oper?: string;
    ok: boolean;
    message?: string;
}
const BASE_URL = 'http://localhost:3003/api/v1';
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
export function getMetaProvides(owner: string):  Promise<{ 
    metaPluginProvides: any;
    hubMetas: any;
    hubMetaProductionFiles: any;
    metaPluginProvidesEx: MetaProvidesData;
}> {
    const url = 'meta/provides';
    return new Promise((resolve, reject) => 
            request.get<Result>(url).then((responsePlugins: any) => {
                if (responsePlugins.err || responsePlugins.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziMeta.getMetaProvides.pluginMetas.response", responsePlugins.err || responsePlugins.error);
                    return reject(responsePlugins.err || responsePlugins.error);
                }
                console.log('api.WizziMeta.getMetaProvides.pluginMetas.response', responsePlugins);
                wizziHubApi.getMeta(owner).then((responseHub: any) => {
                    if (responseHub.err || responseHub.error) {
                        console.log("[31m%s[0m", "Error", "api.WizziMeta.getMetaProvides.hubmetas.response", responseHub.err || responseHub.error);
                        return reject(responseHub.err || responseHub.error);
                    }
                    console.log('api.WizziMeta.getMetaProvides.hubmetas.response', responseHub);
                    getHubMetaProductionFiles(responseHub.item).then((hubMetaProductionFiles: {metaProductions: MetaProductionFiles[]}) => 
                        mergeModuleAndHubProvides(responsePlugins, responseHub).then((moduleAndHubProvides: any) => {
                            if (moduleAndHubProvides.err || moduleAndHubProvides.error) {
                                console.log("[31m%s[0m", "Error", "api.WizziMeta.getMetaProvides.mergeModuleAndHubProvides.response", moduleAndHubProvides.err || moduleAndHubProvides.error);
                                return reject(moduleAndHubProvides.err || moduleAndHubProvides.error);
                            }
                            return resolve({
                                    metaPluginProvides: responsePlugins, 
                                    hubMetas: responseHub, 
                                    hubMetaProductionFiles, 
                                    metaPluginProvidesEx: moduleAndHubProvides
                                 });
                        }
                        )
                    
                    ).catch((err: any) => {
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'api.WizziMeta.getMetaProvides.getHubMetaProductionFiles.error', err);
                        return reject(err);
                    }
                    )
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'api.WizziMeta.getMetaProvides.wizziHub.getMeta.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.WizziMeta.getMetaProvides.error', err);
                return reject(err);
            }
            )
        
        );
}

export function getMetaParameters(metaProductions: MetaProductionExt[], metaPlugins: HubProductionItem[]):  Promise<MetaParameters> {
    console.log('api.WizziMeta.getMetaParameters.metaProductions', metaProductions);
    console.log('api.WizziMeta.getMetaParameters.metaPlugins', metaPlugins);
    const url = 'meta/parameters';
    const inMemoryMetas: { 
        name: string;
        owner: string;
    }[] = [];
    metaPlugins.forEach((item) => {
        if ((item as any).__is_hub_meta_plugin) {
            inMemoryMetas.push({
                owner: item.owner, 
                name: item.name
             })
        }
    }
    )
    console.log('api.WizziMeta.getMetaParameters.inMemoryMetas', inMemoryMetas);
    const data = {
        metaProductions: metaProductions, 
        inMemoryMetas: inMemoryMetas
     };
    return new Promise((resolve, reject) => 
            request.post<MetaParameters>(url, data).then((metaParameters: any) => {
                if (metaParameters.err || metaParameters.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziMeta.getMetaParameters.metaParameters", metaParameters.err || metaParameters.error);
                    return reject(metaParameters.err || metaParameters.error);
                }
                console.log('api.WizziMeta.getMetaParameters.metaParameters', metaParameters);
                return resolve(metaParameters);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.WizziMeta.getMetaParameters.error', err);
                return reject(err);
            }
            )
        
        );
}

export function getHubMetaProductionFiles(metaItems: HubProductionItem[]):  Promise<{ 
    metaProductions: MetaProductionFiles[];
}> {
    console.log('api.WizziMeta.getHubMetaProductionFiles.metaItems', metaItems);
    const retval: { 
        metaProductions: MetaProductionFiles[];
    } = {
        metaProductions: [
            
        ]
     };
    return new Promise((resolve) => {
            function doItem(count: number) {
                const metaItem = metaItems[count];
                if (!metaItem) {
                    console.log('api.WizziMeta.getHubMetaProductionFiles.retval', retval);
                    return resolve(retval);
                }
                const parameters = packiApi.clonePackiFiles(metaItem.packiFiles, [
                    '.packi/parameters/'
                ]);
                
                if (Object.keys(parameters).length < 1) {
                    return doItem(count + 1);
                }
                console.log('api.WizziMeta.getHubMetaProductionFiles.parameters', metaItem.name, parameters);
                
                const folderTemplates = packiApi.clonePackiFiles(metaItem.packiFiles, [
                    'folderTemplates/'
                ]);
                console.log('api.WizziMeta.getHubMetaProductionFiles.folderTemplates', metaItem.name, folderTemplates);
                
                const ittfDocumentTemplates = packiApi.clonePackiFiles(metaItem.packiFiles, [
                    'ittfDocumentTemplates/'
                ]);
                console.log('api.WizziMeta.getHubMetaProductionFiles.ittfDocumentTemplates', metaItem.name, ittfDocumentTemplates);
                
                const plainDocuments = packiApi.clonePackiFiles(metaItem.packiFiles, [
                    'plainDocuments/'
                ]);
                console.log('api.WizziMeta.getHubMetaProductionFiles.plainDocuments', metaItem.name, plainDocuments);
                retval.metaProductions.push({
                    name: metaItem.name, 
                    parameters, 
                    folderTemplates, 
                    ittfDocumentTemplates, 
                    plainDocuments
                 })
                doItem(count + 1)
            }
            doItem(0)
        }
        );
}

export function MetaExecuteInMemory(metaCtx: { 
    [k: string]: any;
}, inMemoryMetas: { 
    owner: string;
    name: string;
}[], globalContext: { 
    [k: string]: any;
}) {
    const url = 'meta/executeinmemory';
    const data = {
        metaCtx, 
        inMemoryMetas, 
        globalContext
     };
    return new Promise((resolve, reject) => 
            request.post<Result>(url, data).then((result: any) => {
                if (result.err || result.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziMeta.MetaExecuteInMemory.result", result.err || result.error);
                    return reject(result.err || result.error);
                }
                console.log('api.WizziMeta.MetaExecuteInMemory.result', result);
                return resolve(result);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.WizziMeta.MetaExecuteInMemory.error', err);
                return reject(err);
            }
            )
        
        );
}

export function MetaExecute(metaCtx: { 
    [k: string]: any;
}, metaProductions: MetaProductionExt[], globalContext: { 
    [k: string]: any;
}) {
    const url = 'meta/execute';
    const data = {
        metaCtx, 
        metaProductions, 
        globalContext
     };
    return new Promise((resolve, reject) => 
            request.post<Result>(url, data).then((result: any) => {
                if (result.err || result.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziMeta.MetaExecute.result", result.err || result.error);
                    return reject(result.err || result.error);
                }
                console.log('api.WizziMeta.MetaExecute.result', result);
                return resolve(result);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.WizziMeta.MetaExecute.error', err);
                return reject(err);
            }
            )
        
        );
}

export function executeWizziProductionMeta(metaCtx: { 
    [k: string]: any;
}, metaProductions: any, globalContext: { 
    [k: string]: any;
}) {
    const url = 'wizzi/production/meta';
    const data = {
        metaCtx, 
        metaFolder: "___templates", 
        wizziFolder: ".wizzi", 
        metaProductions, 
        globalContext
     };
    return new Promise((resolve, reject) => 
            request.post<Result>(url, data).then((result: any) => {
                if (result.err || result.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziMeta.executeWizziProductionMeta.result", result.err || result.error);
                    return reject(result.err || result.error);
                }
                console.log('api.WizziMeta.executeWizziProductionMeta.result', result);
                return resolve(result);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.WizziMeta.executeWizziProductionMeta.error', err);
                return reject(err);
            }
            )
        
        );
}

export function getMetaCtxValuesObject(metaProductionParameters: ParameterItem[]):  { 
    [key: string]: any;
} {
    const retval: { 
        [key: string]: any;
    } = {};
    setMetaCtxObject(retval, metaProductionParameters)
    return retval;
}

function setMetaCtxObject(valueObject: { 
    [key: string]: any;
}, propertyParameters: ParameterItem[]):  void {
    propertyParameters.forEach((item) => {
        if (item.type == 'use') {
            const useName = "use" + item.name[0].toUpperCase() + item.name.substring(1);
            valueObject[useName] = item.defaultValue || false;
            valueObject[item.name] = {};
            setMetaCtxObject(valueObject[item.name], item.parameters || [])
        }
        else if (item.type == 'object') {
            valueObject[item.name] = {};
            setMetaCtxObject(valueObject[item.name], item.parameters || [])
        }
        else if (item.type == 'array') {
            valueObject[item.name] = [];
            setMetaCtxArray(valueObject[item.name], item.parameters || [])
        }
        else {
            valueObject[item.name] = item.defaultValue;
        }
    }
    )
}
function setMetaCtxArray(valueArray: any[], propertyParameters: ParameterItem[]):  void {
    propertyParameters.forEach((item) => {
        if (item.type == 'object') {
            const itemObj: { 
                [key: string]: any;
            } = {};
            setMetaCtxObject(itemObj, item.parameters || [])
            valueArray.push(itemObj)
        }
        else if (item.type == 'array') {
            const itemArray: any[] = [];
            setMetaCtxArray(itemArray, item.parameters || [])
            valueArray.push(itemArray)
        }
        else {
            valueArray.push(item.defaultValue)
        }
    }
    )
}
export function mergeModuleAndHubProvides(moduleMetaPluginProvides: { 
    nodeModulePlugins: MetaPlugin[];
    metaProductions: MetaProduction[];
}, hubMetas: { 
    item: { 
        name: string;
        owner: string;
        packiFiles: string;
        metaProductionCategoriesObj: { 
            [name: string]: { 
            };
        };
        metaProductionsObj: { 
            [name: string]: { 
            };
        };
    }[];
}) {
    return new Promise((resolve, reject) => {
            const metaPluginsObj: { 
                [name: string]: MetaPluginExt;
            } = {};
            const metaPluginCategoriesObj: { 
                [name: string]: MetaPluginCategoryExt;
            } = {};
            const metaProductionsObj: { 
                [name: string]: MetaProductionExt;
            } = {};
            const metaProductionCategoriesObj: { 
                [name: string]: MetaProductionCategoryExt;
            } = {};
            moduleMetaPluginProvides.nodeModulePlugins.forEach(// 
            // node module meta plugins
            (item) => {
                if (!item.categories) {
                    console.log("[31m%s[0m", 'Plugin "' + item.name + '" missing the "categories" property');
                }
                const mplExt: MetaPluginExt = {
                    name: item.name, 
                    __is_hub_meta_plugin: false, 
                    pluginCategories: item.categories || [], 
                    metaProductionCategories: [], 
                    metaProductionCategoriesObj: {}, 
                    metaProductions: [], 
                    metaProductionsObj: {}
                 };
                if (metaPluginsObj[item.name]) {
                    console.log("[31m%s[0m", 'Duplicated plugin name. Skipped: ' + item.name);
                    return ;
                }
                else {
                    metaPluginsObj[item.name] = mplExt;
                }
                mplExt.pluginCategories.forEach((c) => {
                    if (metaPluginCategoriesObj[c.name]) {
                        metaPluginCategoriesObj[c.name].plugins.push({
                            name: mplExt.name
                         })
                    }
                    else {
                        const cExt: MetaPluginCategoryExt = {
                            name: c.name, 
                            plugins: [
                                
                            ]
                         };
                        cExt.plugins.push({
                            name: mplExt.name
                         })
                        metaPluginCategoriesObj[c.name] = cExt;
                    }
                }
                )
            }
            )
            moduleMetaPluginProvides.metaProductions.forEach(// 
            // node module meta productions
            (mpr) => {
                const mpl = metaPluginsObj[mpr.plugin];
                if (mpl) {
                    const mprExt: MetaProductionExt = {
                        name: mpr.name, 
                        plugin: mpl.name, 
                        categories: mpr.categories || []
                     };
                    metaProductionsObj[mpr.name] = mprExt;
                    if (!mpr.categories) {
                        console.log("[31m%s[0m", 'Meta production "' + mpr.name + '" missing the "categories" property');
                    }
                    else {
                        mpr.categories.forEach((c) => {
                            metaProductionCategoriesObj[c.name] = c;
                            mpl.metaProductionCategoriesObj[c.name] = c;
                        }
                        )
                    }
                    mpl.metaProductionsObj[mpr.name] = mprExt;
                }
                else {
                    console.log("[31m%s[0m", 'Meta production ' + mpr.name + ' missing plugin property');
                }
            }
            )
            hubMetas.item.forEach(// 
            // wizzi hub meta plugins
            (mpl) => {
                const hubDbMetaProvidesData = packiApi.extractPackiFileContent(mpl.packiFiles, '.db/meta.provides.json', {
                    json: true
                 });
                if (hubDbMetaProvidesData.__is_error) {
                    return reject({
                            message: "Error extracting metaProvides data from hub meta plugin: " + mpl.owner + ' / ' + mpl.name, 
                            data: hubDbMetaProvidesData
                         });
                }
                const hubMetaProvides: HubDbMetaProvides = hubDbMetaProvidesData.json as HubDbMetaProvides;
                const mplExt: MetaPluginExt = {
                    name: hubMetaProvides.name || mpl.name, 
                    owner: mpl.owner, 
                    __is_hub_meta_plugin: true, 
                    pluginCategories: hubMetaProvides.pluginCategories || [], 
                    metaProductionCategories: [], 
                    metaProductionCategoriesObj: {}, 
                    metaProductions: [], 
                    metaProductionsObj: {}
                 };
                if (metaPluginsObj[mplExt.name]) {
                    console.log("[31m%s[0m", 'Meta plugins in WizziHub cannot have a name already used. Skipped: ' + mplExt.name);
                    return ;
                }
                else {
                    metaPluginsObj[mplExt.name] = mplExt;
                }
                if (hubMetaProvides.pluginCategories && hubMetaProvides.pluginCategories.length > 0) {
                    hubMetaProvides.pluginCategories.forEach((c) => {
                        if (metaPluginCategoriesObj[c.name]) {
                            metaPluginCategoriesObj[c.name].plugins.push({
                                name: mpl.name
                             })
                        }
                        else {
                            const cExt: MetaPluginCategoryExt = {
                                name: c.name, 
                                plugins: [
                                    
                                ]
                             };
                            cExt.plugins.push({
                                name: mpl.name
                             })
                            metaPluginCategoriesObj[c.name] = cExt;
                        }
                    }
                    )
                }
                else {
                    console.log("[31m%s[0m", 'In hub meta plugin "' + mpl.name + '" missing the "pluginCategories" array. It should be in ".db/meta.provides.json"');
                }
                if (hubMetaProvides.pluginMetaProductions && hubMetaProvides.pluginMetaProductions.length > 0) {
                    hubMetaProvides.pluginMetaProductions.forEach((mpr) => {
                        if (metaProductionsObj[mpr.name]) {
                            console.log("[31m%s[0m", 'In hub meta plugin "' + mplExt.name + '"' + ' the meta productions cannot have a name already used. Skipped: ' + mpr.name);
                            return ;
                        }
                        const mprExt: MetaProductionExt = {
                            name: mpr.name, 
                            plugin: mplExt.name, 
                            categories: mpr.categories || []
                         };
                        metaProductionsObj[mpr.name] = mprExt;
                        mplExt.metaProductionsObj[mpr.name] = mprExt;
                        if (!mpr.categories) {
                            console.log("[31m%s[0m", 'In hub meta plugin "' + mplExt.name + '"' + ' the meta production "' + mpr.name + '"' + ' is missing the "categories" property. It should be in ".db/meta.provides.json"');
                        }
                        else {
                            mpr.categories.forEach((c) => {
                                metaProductionCategoriesObj[c.name] = c;
                                mplExt.metaProductionCategoriesObj[c.name] = c;
                            }
                            )
                        }
                    }
                    )
                }
                else {
                    console.log("[31m%s[0m", 'In hub meta plugin "' + mpl.name + '" missing the "pluginMetaProductions" array. It should be in ".db/meta.provides.json"');
                }
            }
            )
            const allMetaPluginsArray = Object.values(metaPluginsObj);
            allMetaPluginsArray.forEach((mpl) => {
                mpl.metaProductionCategories = Object.values(mpl.metaProductionCategoriesObj);
                mpl.metaProductions = Object.values(mpl.metaProductionsObj);
            }
            )
            resolve({
                metaPlugins: allMetaPluginsArray, 
                metaPluginCategories: Object.values(metaPluginCategoriesObj), 
                metaProductions: Object.values(metaProductionsObj), 
                metaProductionCategories: Object.values(metaProductionCategoriesObj)
             })
        }
        );
}

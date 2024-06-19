/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Api\wizziMetaApi.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import axios, {AxiosError, AxiosResponse} from 'axios';
import * as WizziHub from '@/Api/wizziHubApi';
import * as packiApi from '@/Api/packiApi';
import {PackiFile, PackiFiles, HubProductionItem} from './types';
interface Result {
    oper?: string;
    ok: boolean;
    message?: string;
}
const BASE_URL = 'http://localhost:3003/api/v1';
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
    
 };
export function getMetaProvides(owner: string) {
    const url = 'meta/provides';
    return new Promise((resolve, reject) => 
            request.get<Result>(url).then((responsePlugins: any) => {
                if (responsePlugins.err || responsePlugins.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziMeta.getMetaProvides.pluginMetas.response", responsePlugins.err || responsePlugins.error);
                    return reject(responsePlugins.err || responsePlugins.error);
                }
                console.log('api.WizziMeta.getMetaProvides.pluginMetas.response', responsePlugins);
                WizziHub.getMeta(owner).then((responseHub: any) => {
                    if (responseHub.err || responseHub.error) {
                        console.log("[31m%s[0m", "Error", "api.WizziMeta.getMetaProvides.hubmetas.response", responseHub.err || responseHub.error);
                        return reject(responseHub.err || responseHub.error);
                    }
                    console.log('api.WizziMeta.getMetaProvides.hubmetas.response', responseHub);
                    var i, i_items=responseHub.item, i_len=responseHub.item.length, meta;
                    for (i=0; i<i_len; i++) {
                        meta = responseHub.item[i];
                        meta.__is_hub_meta_plugin = true;
                    }
                    getMetaHubProduction(responseHub.item).then((metaHubProductions: any) => {
                        return resolve({
                                metaPluginProvides: responsePlugins, 
                                hubMetas: responseHub, 
                                metaHubProductions, 
                                metaPluginProvidesEx: mergeModuleAndHubProvides(responsePlugins, responseHub)
                             });
                    }
                    ).catch((err: any) => {
                        if (typeof err === 'object' && err !== null) {
                        }
                        console.log("[31m%s[0m", 'api.WizziMeta.getMetaProvides.getMetaHubProduction.error', err);
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

export function getMetaParameters(metaProductions: any, metaPlugins: any) {
    console.log('### >>> WizziMeta.getMetaParameters.metaPlugins', metaPlugins);
    const url = 'meta/parameters';
    const inMemoryMetas = [];
    var i, i_items=metaPlugins, i_len=metaPlugins.length, item;
    for (i=0; i<i_len; i++) {
        item = metaPlugins[i];
        if (item.__is_hub_meta_plugin) {
            inMemoryMetas.push({
                owner: item.owner, 
                name: item.name
             })
        }
    }
    console.log('### >>> WizziMeta.getMetaParameters.inMemoryMetas', inMemoryMetas);
    const data = {
        metaProductions: metaProductions, 
        inMemoryMetas: inMemoryMetas
     };
    return new Promise((resolve, reject) => 
            request.post<Result>(url, data).then((metaParameters: any) => {
                if (metaParameters.err || metaParameters.error) {
                    console.log("[31m%s[0m", "Error", "api.WizziMeta.getMetaParameters.metaParameters", metaParameters.err || metaParameters.error);
                    return reject(metaParameters.err || metaParameters.error);
                }
                console.log('### >>> api.WizziMeta.getMetaParameters.metaParameters', metaParameters);
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
export function getMetaHubProduction(metaItems: HubProductionItem) {
    const retval = {
        provides: [
            
        ], 
        metaProductions: [
            
        ], 
        parameters: [
            
        ], 
        packiFiles: [
            
        ]
     };
    return new Promise((resolve, reject) => {
            function doItem(count) {
                const metaItem = metaItems[count];
                if (!metaItem) {
                    return resolve(retval);
                }
                const packiFilesString = metaItem.packiFiles;
                const packiFilesObj = packiFilesString ? JSON.parse(packiFilesString) : null;
                const parameters = packiApi.clonePackiFiles(packiFilesObj, [
                    '.packi/parameters/'
                ]);
                
                if (Object.keys(parameters).length < 1) {
                    return doItem(count + 1);
                }
                
                const folderTemplates = packiApi.clonePackiFiles(packiFilesObj, [
                    'folderTemplates/'
                ]);
                
                const ittfDocumentTemplates = packiApi.clonePackiFiles(packiFilesObj, [
                    'ittfDocumentTemplates/'
                ]);
                
                const plainDocuments = packiApi.clonePackiFiles(packiFilesObj, [
                    'plainDocuments/'
                ]);
                retval.metaProductions.push({
                    name: metaItem.name, 
                    packiFilesObj, 
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
}, metaProductions, globalContext: { 
    [k: string]: any;
}) {
    const url = 'meta/execute';
    const data = {
        metaCtx, 
        metaProductions: metaProductions, 
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

export // 
// node module meta plugins
// 
// node module meta productions
// 
// wizzi hub meta plugins
function mergeModuleAndHubProvides(moduleMetaPluginProvides: any, hubMetas: any) {
    const metaPluginsObj = {};
    const metaPluginCategoriesObj = {};
    const metaProductionsObj = {};
    const metaProductionCategoriesObj = {};
    var i, i_items=moduleMetaPluginProvides.nodeModulePlugins, i_len=moduleMetaPluginProvides.nodeModulePlugins.length, mpl;
    for (i=0; i<i_len; i++) {
        mpl = moduleMetaPluginProvides.nodeModulePlugins[i];
        if (!mpl.categories) {
            alert('Plugin "' + mpl.name + '" missing the "categories" property')
        }
        mpl.pluginCategories = mpl.categories || [];
        mpl.metaProductionCategories = {};
        mpl.metaProductions = {};
        delete mpl.categories
        if (metaPluginsObj[mpl.name]) {
            alert('Duplicated plugin name. Skipped: ' + mpl.name)
        }
        else {
            metaPluginsObj[mpl.name] = mpl;
        }
        var j, j_items=mpl.pluginCategories, j_len=mpl.pluginCategories.length, c;
        for (j=0; j<j_len; j++) {
            c = mpl.pluginCategories[j];
            if (metaPluginCategoriesObj[c.name]) {
                metaPluginCategoriesObj[c.name].plugins.push({
                    name: mpl.name
                 })
            }
            else {
                c.plugins = [];
                c.plugins.push({
                    name: mpl.name
                 })
                metaPluginCategoriesObj[c.name] = c;
            }
        }
    }
    var i, i_items=moduleMetaPluginProvides.metaProductions, i_len=moduleMetaPluginProvides.metaProductions.length, mpr;
    for (i=0; i<i_len; i++) {
        mpr = moduleMetaPluginProvides.metaProductions[i];
        metaProductionsObj[mpr.name] = mpr;
        const mpl = metaPluginsObj[mpr.plugin];
        if (mpl) {
            mpl.metaProductions[mpr.name] = {
                name: mpr.name, 
                categories: mpr.categories || []
             };
            if (!mpr.categories) {
                alert('Meta production "' + mpr.name + '" missing the "categories" property')
            }
            else {
                var j, j_items=mpr.categories, j_len=mpr.categories.length, c;
                for (j=0; j<j_len; j++) {
                    c = mpr.categories[j];
                    metaProductionCategoriesObj[c.name] = c;
                    mpl.metaProductionCategories[c.name] = c;
                }
            }
        }
        else {
            alert('Meta production ' + mpr.name + ' missing plugin property')
        }
    }
    var i, i_items=hubMetas.item, i_len=hubMetas.item.length, mpl;
    for (i=0; i<i_len; i++) {
        mpl = hubMetas.item[i];
        const hubMetaProvidesData = Packi.extractPackiFileContent(mpl.packiFiles, '.db/meta.provides.json', {
            json: true
         });
        // info 'WizziMeta.mergeModuleAndHubProvides.hubMetaProvidesData', hubMetaProvidesData
        const hubMetaProvides = hubMetaProvidesData.json;
        mpl.metaProductionCategories = {};
        mpl.metaProductions = {};
        if (hubMetaProvides && hubMetaProvides.pluginMetaProductions && hubMetaProvides.pluginMetaProductions.length > 0) {
            mpl.pluginCategories = hubMetaProvides.pluginCategories || [];
            const name = hubMetaProvides.name || mpl.name;
            if (metaPluginsObj[mpl.name]) {
                alert('Meta plugins in WizziHub cannot have a name already used in jsnode meta plugins. Skipped: ' + mpl.name)
            }
            else {
                metaPluginsObj[mpl.name] = mpl;
            }
        }
        if (hubMetaProvides.pluginCategories && hubMetaProvides.pluginCategories.length > 0) {
            var j, j_items=hubMetaProvides.pluginCategories, j_len=hubMetaProvides.pluginCategories.length, c;
            for (j=0; j<j_len; j++) {
                c = hubMetaProvides.pluginCategories[j];
                if (metaPluginCategoriesObj[c.name]) {
                    metaPluginCategoriesObj[c.name].plugins.push({
                        name: mpl.name
                     })
                }
                else {
                    c.plugins = [];
                    c.plugins.push({
                        name: mpl.name
                     })
                    metaPluginCategoriesObj[c.name] = c;
                }
            }
        }
        else {
            alert('In hub meta plugin "' + mpl.name + '" missing the "pluginCategories" array. It should be in ".db/meta.provides.json"')
        }
        if (hubMetaProvides.pluginMetaProductions && hubMetaProvides.pluginMetaProductions.length > 0) {
            var j, j_items=hubMetaProvides.pluginMetaProductions, j_len=hubMetaProvides.pluginMetaProductions.length, mpr;
            for (j=0; j<j_len; j++) {
                mpr = hubMetaProvides.pluginMetaProductions[j];
                mpr.plugin = mpl.name;
                if (metaProductionsObj[mpr.name]) {
                    alert('Meta productions in WizziHub cannot have a name already used in jsnode meta productions. Skipped: ' + mpr.name)
                }
                else {
                    metaProductionsObj[mpr.name] = mpr;
                }
                mpl.metaProductions[mpr.name] = {
                    name: mpr.name, 
                    categories: mpr.categories || []
                 };
                if (!mpr.categories) {
                    alert('In hub meta plugin "' + mpl.name + '"' + ' the meta production "' + mpr.name + '"' + ' is missing the "categories" property. It should be in ".db/meta.provides.json"')
                }
                else {
                    var k, k_items=mpr.categories, k_len=mpr.categories.length, c;
                    for (k=0; k<k_len; k++) {
                        c = mpr.categories[k];
                        metaProductionCategoriesObj[c.name] = c;
                        mpl.metaProductionCategories[c.name] = c;
                    }
                }
                // ??? set mpl.metaProductionCategories = Object.values(mpl.metaProductionCategories)
            }
        }
        else {
            alert('In hub meta plugin "' + mpl.name + '" missing the "pluginMetaProductions" array. It should be in ".db/meta.provides.json"')
        }
    }
    const allMetaPluginsArray = Object.values(metaPluginsObj);
    var i, i_items=allMetaPluginsArray, i_len=allMetaPluginsArray.length, mpl;
    for (i=0; i<i_len; i++) {
        mpl = allMetaPluginsArray[i];
        mpl.metaProductionCategories = Object.values(mpl.metaProductionCategories);
        mpl.metaProductions = Object.values(mpl.metaProductions);
    }
    return {
            metaPlugins: allMetaPluginsArray, 
            metaPluginCategories: Object.values(metaPluginCategoriesObj), 
            metaProductions: Object.values(metaProductionsObj), 
            metaProductionCategories: Object.values(metaProductionCategoriesObj)
         };
}
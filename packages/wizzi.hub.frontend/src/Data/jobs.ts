/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Data\jobs.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React, {useState, useEffect} from 'react';
import * as wizziMetaApi from "@/Api/wizziMetaApi";
import {getMvc} from "@/Data/mvc/MetaProduction";
import {SelectableCollection} from "@/Data/Components/SelectableCollection";
export function getJobs(owner: string, reload: boolean) {
    return new Promise((resolve, reject) => 
            // reload parameter disactivated for development. Always reload job list
            getMvc().storage.findAllJobs(getMvc().user.id, {
                reload: true
             }).then((result: any) => {
                console.log('----> getJobs.reload.result', reload, result);
                resolve(result);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getJobs.error', err);
                return reject(err);
            }
            )
        
        );
}
export function getJobItem(jobId: string) {
    return new Promise((resolve, reject) => 
            getMvc().storage.findJob(getMvc().user.id, jobId, {
                reload: false
             }).then((result: any) => {
                console.log('----> getJobItem', result);
                resolve(result);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getJobItem.error', err);
                return reject(err);
            }
            )
        
        );
}
export function startCurrentJob(jobId: string, reloadCount: number, states) {
    const {
        appState, 
        setAppState, 
        metaSelectionState, 
        setMetaSelectionState
     } = states;
    let [error, setError] = useState(null);
    let [data, setData] = useState(null);
    useEffect(() => {
        async function doFetch() {
            console.log('----> startCurrentJob start.doFetch reloadCount', reloadCount);
            const metaPluginProvidesData = await wizziMetaApi.getMetaProvides(getMvc().user.id);
            const metaPluginProvides = metaPluginProvidesData.metaPluginProvidesEx;
            console.log('----> startCurrentJob metaPluginProvides', metaPluginProvides);
            let {
                pluginCatSelId, 
                pluginSelId, 
                catSelId, 
                prodSelId
             } = metaSelectionState;
            getJobItem(jobId).then(// in the meta productions SelectableCollection(s) we always load all selectables
            // with the initial selection from the job item
            // they will be filtered by views if their plugins are not selected
            // error 'jobItem.__mpls.json.metaPlugins', JSON.stringify(jobItem.__mpls.json.metaPlugins, null, 2)
            (jobItem: any) => {
                console.log('@@@@@ ----> startPluginJobItem.setup.selections.metaPluginProvides', metaPluginProvides);
                console.log('@@@@@ ----> startPluginJobItem.setup.selections.jobItem', jobItem);
                getMvc().model.setupJobProductionItem(jobItem)
                console.log('@@@@@ ----> startPluginJobItem.setup.selections.jobItem.__mpls.json.metaPluginCategories', jobItem.__mpls.json.metaPluginCategories);
                console.log('@@@@@ ----> startPluginJobItem.setup.selections.jobItem.__mpls.json.metaPlugins', jobItem.__mpls.json.metaPlugins);
                if (pluginCatSelId) {
                    SelectableCollection.drop(pluginCatSelId)
                    SelectableCollection.drop(pluginSelId)
                    SelectableCollection.drop(catSelId)
                    SelectableCollection.drop(prodSelId)
                }
                pluginCatSelId = SelectableCollection.create(metaPluginProvides.metaPluginCategories, jobItem.__mpls.json.metaPluginCategories, "name")
                ;
                console.log("[31m%s[0m", 'metaPluginProvides.metaProductionCategories', JSON.stringify(metaPluginProvides.metaProductionCategories, null, 2));
                console.log("[31m%s[0m", 'jobItem.__mps.json.metaProductionCategories', JSON.stringify(jobItem.__mps.json.metaProductionCategories, null, 2));
                pluginSelId = SelectableCollection.create(metaPluginProvides.metaPlugins, jobItem.__mpls.json.metaPlugins, "name")
                ;
                catSelId = SelectableCollection.create(metaPluginProvides.metaProductionCategories, jobItem.__mps.json.metaProductionCategories, "name")
                ;
                prodSelId = SelectableCollection.create(metaPluginProvides.metaProductions, jobItem.__mps.json.metaProductions, "name")
                ;
                const pluginSel = SelectableCollection.get(pluginSelId);
                setMetaSelectionState({
                    ...metaSelectionState, 
                    pluginCatSelId, 
                    pluginSelId, 
                    catSelId, 
                    prodSelId
                 })
                setAppState({
                    ...appState, 
                    currentJob: jobItem, 
                    selectedMetaPlugins: pluginSel.getSelected()
                 })
                getMvc().controller.setAppState({
                    currentJobId: jobItem.id
                 }, () => 
                    executeMetaJobFilters({
                        pluginCatSelId, 
                        pluginSelId, 
                        catSelId, 
                        prodSelId
                     })
                )
                setData(jobItem)
            }
            ).catch((error: any) => {
                setError(error)
                console.log("[31m%s[0m", 'getJobItem.error', error);
            }
            )
        }
        doFetch();
    }
    , [
        jobId, 
        reloadCount
    ])
    return {
            jobItemError: error, 
            jobItem: data
         };
}
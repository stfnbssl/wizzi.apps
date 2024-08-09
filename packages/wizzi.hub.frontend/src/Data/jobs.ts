/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Data\jobs.ts.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import React, {useState, useEffect} from 'react';
import * as wizziMetaApi from "@/Api/wizziMetaApi";
import {AppState, MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {getMvc, setMetaProvides} from "@/Data/mvc/MetaProduction";
import {SelectableCollection} from "@/Data/Components/SelectableCollection";
import {executeMetaJobFilters} from "@/Components/metaProduction/filters";
export function getJobs(owner: string, reload: boolean) {
    return new Promise((resolve, reject) => 
            // reload parameter disactivated for development. Always reload job list
            getMvc().storage.findAllJobs(owner, {
                reload: true
             }).then((result: any) => {
                console.log("[31m%s[0m", 'Data.jobs.getJobs.reload.result', reload, result);
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
                console.log("[31m%s[0m", 'Data.jobs.getJobItem', result);
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
export function startCurrentJob(jobId: string, reloadCount: number, states: { 
    appState: AppState;
    setAppState: React.Dispatch<React.SetStateAction<AppState|null>>;
    metaSelectionState: MetaSelectionState;
    setMetaSelectionState: React.Dispatch<React.SetStateAction<MetaSelectionState>>;
}) {
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
            const metaPluginProvidesData = await wizziMetaApi.getMetaProvides(getMvc().user.id);
            const metaPluginProvides = metaPluginProvidesData.metaPluginProvidesEx;
            console.log('Data.jobs.startCurrentJob metaPluginProvides', metaPluginProvides);
            setMetaProvides(jobId, metaPluginProvides)
            let {
                pluginCatSelId, 
                pluginSelId, 
                catSelId, 
                prodSelId
             } = metaSelectionState;
            getJobItem(jobId).then(// in the meta productions SelectableCollection(s) we always load all selectables
            // with the initial selection from the job item
            // they will be filtered by views if their plugins are not selected
            (jobItem: any) => {
                getMvc().model.setupJobProductionItem(jobItem)
                console.log('Data.jobs.startCurrentJob.jobItem.__metaPlugins.json', jobItem.__metaPlugins.json);
                console.log('Data.jobs.startCurrentJob.jobItem.__metaProductions.json', jobItem.__metaProductions.json);
                if (pluginCatSelId && pluginSelId && catSelId && prodSelId) {
                    SelectableCollection.drop(pluginCatSelId)
                    SelectableCollection.drop(pluginSelId)
                    SelectableCollection.drop(catSelId)
                    SelectableCollection.drop(prodSelId)
                }
                pluginCatSelId = SelectableCollection.create(metaPluginProvides.metaPluginCategories, jobItem.__metaPlugins.json.metaPluginCategories, "name")
                ;
                pluginSelId = SelectableCollection.create(metaPluginProvides.metaPlugins, jobItem.__metaPlugins.json.metaPlugins, "name")
                ;
                catSelId = SelectableCollection.create(metaPluginProvides.metaProductionCategories, jobItem.__metaProductions.json.metaProductionCategories, "name")
                ;
                prodSelId = SelectableCollection.create(metaPluginProvides.metaProductions, jobItem.__metaProductions.json.metaProductions, "name")
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
                    currentJobId: jobItem.id, 
                    activeView: appState.activeView, 
                    reloadCount: 0
                 }, () => 
                    executeMetaJobFilters({
                        pluginCatSelId, 
                        pluginSelId, 
                        catSelId, 
                        prodSelId, 
                        selCounter: metaSelectionState.selCounter
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

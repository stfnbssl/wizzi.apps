/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\MetaPluginsSelection.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import React, {useState} from "react";
import {JobItem} from "@/Data/types";
import {AppState, MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {getMvc} from "@/Data/mvc/MetaProduction";
import {Jobs} from "@/Components/Jobs";
import {SelectableCollection} from "@/Data/Components/SelectableCollection";
import {GenericSelectionList} from "@/Components/metaProduction/GenericSelectionList";
import {executeMetaJobFilters} from "./filters";
type MetaPluginsSelectionProps = { 
    appState: AppState;
    setAppState: React.Dispatch<React.SetStateAction<AppState|null>>;
    jobList: JobItem[];
    metaSelectionState: MetaSelectionState;
    setMetaSelectionState: React.Dispatch<React.SetStateAction<MetaSelectionState>>;
};
export function MetaPluginsSelection(params: MetaPluginsSelectionProps) {
    const {
        appState, 
        setAppState, 
        jobList, 
        metaSelectionState, 
        setMetaSelectionState
     } = params;
    
    const [availablePluginsSearchText, setAvailablePluginsSearchText] = useState('');
    
    let {
        pluginCatSelId, 
        pluginSelId, 
        catSelId, 
        prodSelId, 
        selCounter
     } = metaSelectionState;
    
    let pluginSel: SelectableCollection = SelectableCollection.getEmpty();
    let pluginCatSel: SelectableCollection = SelectableCollection.getEmpty();
    if (appState.currentJob && pluginCatSelId && pluginSelId) {
        pluginCatSel = SelectableCollection.get(pluginCatSelId)
        ;
        pluginSel = SelectableCollection.get(pluginSelId)
        ;
    }
    
    // rerender
    function updateFilters() {
        executeMetaJobFilters({
            pluginCatSelId, 
            pluginSelId, 
            catSelId, 
            prodSelId, 
            selCounter
         })
        setMetaSelectionState({
            ...metaSelectionState, 
            selCounter: selCounter + 1
         })
        
        
    }
    return  (
        <div className="h-full w-full flex-1 flex">
            <Jobs reload={true}
                jobs={jobList}
                currentJob={ appState.currentJob }
                onSelect={(jobItem) => {
                        setAppState({
                            ...appState, 
                            currentJob: jobItem, 
                            currentJobId: jobItem.id
                         })
                        getMvc().controller.setAppState({
                            currentJobId: jobItem.id, 
                            activeView: appState.activeView, 
                            reloadCount: appState.reloadCount
                         }, () => {
                        }
                        )
                    }
                }
             />
            {
                appState.currentJob && pluginCatSelId && pluginSelId &&  (
                    <React.Fragment>
                        <GenericSelectionList selectableItems={pluginCatSel.getSelected()} title="Selected plugin categories" onUnselect={(categoryName) => {
                                if (appState.currentJob) {
                                    pluginCatSel.unSelect(categoryName);
                                    getMvc().controller.selectMetaPluginCategory(appState.currentJob, categoryName, 'unselect')
                                    updateFilters();
                                }
                            }
                        } />
                        <GenericSelectionList selectableItems={pluginCatSel.getUnselected()} title="Available plugin categories" onSelect={(categoryName) => {
                                if (appState.currentJob) {
                                    pluginCatSel.select(categoryName);
                                    getMvc().controller.selectMetaPluginCategory(appState.currentJob, categoryName, 'select')
                                    updateFilters();
                                }
                            }
                        } />
                        <GenericSelectionList selectableItems={pluginSel.getSelected()} title="Selected plugins" onUnselect={(metaPluginName) => {
                                // TODO may be no more necessary
                                if (appState.currentJob) {
                                    pluginSel.unSelect(metaPluginName);
                                    getMvc().controller.selectMetaPlugin(appState.currentJob, metaPluginName, 'unselect')
                                    updateFilters();
                                    setAppState({
                                        ...appState, 
                                        selectedMetaPlugins: pluginSel.getSelected()
                                     })
                                }
                            }
                        } />
                        <GenericSelectionList selectableItems={pluginSel.getUnselected()}
                            title="Available plugins"
                            searchViewPlaceholder="search plugin ..."
                            searchText={availablePluginsSearchText}
                            onSearchTextChanged={(value) => {
                                    setAvailablePluginsSearchText(value)
                                    pluginSel.setSearchText(value);
                                    updateFilters();
                                }
                            }
                            onSelect={(metaPluginName) => {
                                    // TODO may be no more necessary
                                    if (appState.currentJob) {
                                        pluginSel.select(metaPluginName);
                                        getMvc().controller.selectMetaPlugin(appState.currentJob, metaPluginName, 'select')
                                        updateFilters();
                                        setAppState({
                                            ...appState, 
                                            selectedMetaPlugins: pluginSel.getSelected()
                                         })
                                    }
                                }
                            }
                         />
                    </React.Fragment>
                    )
                
            }
        </div>
        )
    ;
}

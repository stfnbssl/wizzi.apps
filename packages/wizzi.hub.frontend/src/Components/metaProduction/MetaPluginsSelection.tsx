/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\MetaPluginsSelection.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
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
    setAppState: React.Dispatch<React.SetStateAction<AppState>>;
    jobList: JobItem[];
    metaSelectionState: MetaSelectionState;
    setMetaSelectionState: React.Dispatch<React.SetStateAction<MetaSelectionState>>;
};
export // error 'MetaPluginsSelection.pluginSel.items', pluginSel.items
// error 'MetaPluginsSelection.pluginSel.filterExcludeArray', pluginSel.filterExcludeArray
function MetaPluginsSelection(params: MetaPluginsSelectionProps) {
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
    
    if (!pluginCatSelId || !pluginSelId) {
        return  (
            <div className="work-area-content-main" />
            )
        ;
    }
    
    const pluginCatSel = SelectableCollection.get(pluginCatSelId);
    const pluginSel = SelectableCollection.get(pluginSelId);
    
    // rerender
    function updateFilters() {
        executeMetaJobFilters({
            pluginCatSelId, 
            pluginSelId, 
            catSelId, 
            prodSelId
         })
        setMetaSelectionState({
            ...metaSelectionState, 
            selCounter: selCounter + 1
         })
    }
    
    
    return  (
        <div className="work-area-content-main">
            <Jobs reload={true} jobs={jobList} onSelect={(jobItem) => {
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
            } />
            {
                appState.currentJob &&  (
                    <React.Fragment>
                        <GenericSelectionList selectedableItems={pluginCatSel.getSelected()} title="Selected plugin categories" onUnselect={(categoryName) => {
                                pluginCatSel.unSelect(categoryName);
                                getMvc().controller.selectMetaPluginCategory(appState.currentJob, categoryName, 'unselect')
                                updateFilters();
                            }
                        } />
                        <GenericSelectionList selectedableItems={pluginCatSel.getUnselected()} title="Available plugin categories" onSelect={(categoryName) => {
                                pluginCatSel.select(categoryName);
                                getMvc().controller.selectMetaPluginCategory(appState.currentJob, categoryName, 'select')
                                updateFilters();
                            }
                        } />
                        <GenericSelectionList selectedableItems={pluginSel.getSelected()} title="Selected plugins" onUnselect={// TODO may be no more necessary
                            (metaPluginName) => {
                                pluginSel.unSelect(metaPluginName);
                                getMvc().controller.selectMetaPlugin(appState.currentJob, metaPluginName, 'unselect')
                                updateFilters();
                                setAppState({
                                    ...appState, 
                                    selectedMetaPlugins: pluginSel.getSelected()
                                 })
                            }
                        } />
                        <GenericSelectionList selectedableItems={pluginSel.getUnselected()}
                            title="Available plugins"
                            searchViewPlaceholder="search plugin ..."
                            searchText={availablePluginsSearchText}
                            onSearchTextChanged={(value) => {
                                    setAvailablePluginsSearchText(value)
                                    pluginSel.setSearchText(value);
                                    updateFilters();
                                }
                            }
                            onSelect={// TODO may be no more necessary
                                (metaPluginName) => {
                                    pluginSel.select(metaPluginName);
                                    getMvc().controller.selectMetaPlugin(appState.currentJob, metaPluginName, 'select')
                                    updateFilters();
                                    setAppState({
                                        ...appState, 
                                        selectedMetaPlugins: pluginSel.getSelected()
                                     })
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

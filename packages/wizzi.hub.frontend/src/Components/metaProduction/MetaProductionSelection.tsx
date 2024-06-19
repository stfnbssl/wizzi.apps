/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\MetaProductionSelection.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React, {useState} from "react";
import {JobItem} from "@/Data/types";
import {AppState, MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {getMvc} from "@/Data/mvc/MetaProduction";
import {SelectableCollection} from "@/Data/Components/SelectableCollection";
import {SpinnerView} from "@/Components/utils/SpinnerView";
import {Jobs} from "@/Components/Jobs";
import {GenericSelectionList} from "@/Components/metaProduction/GenericSelectionList";
import {executeMetaJobFilters} from "./filters";
type MetaProductionSelectionProps = { 
    appState: AppState;
    setAppState: React.Dispatch<React.SetStateAction<AppState>>;
    jobList: JobItem[];
    metaSelectionState: MetaSelectionState;
    setMetaSelectionState: React.Dispatch<React.SetStateAction<MetaSelectionState>>;
};
export function MetaProductionSelection(params: MetaProductionSelectionProps) {
    const {
        appState, 
        setAppState, 
        jobList, 
        metaSelectionState, 
        setMetaSelectionState
     } = params;
    
    const [availableCategoriesSearchText, setAvailableCategoriesSearchText] = useState('');
    const [availableMetaProductionsSearchText, setAvailableMetaProductionsSearchText] = useState('');
    
    let {
        pluginCatSelId, 
        pluginSelId, 
        catSelId, 
        prodSelId, 
        selCounter
     } = metaSelectionState;
    
    if (!catSelId || !prodSelId) {
        return  (
            <div className="work-area-content-main" />
            )
        ;
    }
    
    const catSel = SelectableCollection.get(catSelId);
    const prodSel = SelectableCollection.get(prodSelId);
    
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
    
    if (!catSel || !appState.selectedMetaPlugins || appState.selectedMetaPlugins.length < 1) {
        return  (
            <SpinnerView />
            )
        ;
    }
    
    if (false) {
        console.log("[31m%s[0m", 'MetaProductionSelection.catSel.items', catSel.items);
        console.log("[31m%s[0m", 'MetaProductionSelection.catSel.filterExcludeArray', catSel.filterExcludeArray);
        console.log("[31m%s[0m", 'MetaProductionSelection.prodSel.items', prodSel.items);
        console.log("[31m%s[0m", 'MetaProductionSelection.prodSel.filterExcludeArray', prodSel.filterExcludeArray);
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
                        <GenericSelectionList selectedableItems={catSel.getSelected()} title="Selected production categories" onUnselect={(categoryName) => {
                                catSel.unSelect(categoryName);
                                getMvc().controller.selectMetaProductionCategory(appState.currentJob, categoryName, 'unselect')
                                updateFilters();
                            }
                        } />
                        <GenericSelectionList selectedableItems={catSel.getUnselected()}
                            title="Available production categories"
                            searchViewPlaceholder="search category ..."
                            searchText={availableCategoriesSearchText}
                            onSearchTextChanged={(value) => {
                                    setAvailableCategoriesSearchText(value)
                                    catSel.setSearchText(value);
                                    updateFilters();
                                }
                            }
                            onSelect={(categoryName) => {
                                    catSel.select(categoryName);
                                    getMvc().controller.selectMetaProductionCategory(appState.currentJob, categoryName, 'select')
                                    updateFilters();
                                }
                            }
                         />
                        <GenericSelectionList selectedableItems={prodSel.getSelected()} title="Selected productions" onUnselect={(metaProductionName) => {
                                prodSel.unSelect(metaProductionName);
                                getMvc().controller.selectMetaProduction(appState.currentJob, metaProductionName, 'unselect')
                                updateFilters();
                                setAppState({
                                    ...appState, 
                                    selectedMetaProductions: prodSel.getSelected()
                                 })
                            }
                        } />
                        <GenericSelectionList selectedableItems={prodSel.getUnselected()}
                            title="Available productions"
                            searchViewPlaceholder="search production ..."
                            searchText={availableMetaProductionsSearchText}
                            onSearchTextChanged={(value) => {
                                    setAvailableMetaProductionsSearchText(value)
                                    prodSel.setSearchText(value);
                                    updateFilters();
                                }
                            }
                            onSelect={(metaProductionName) => {
                                    prodSel.select(metaProductionName);
                                    getMvc().controller.selectMetaProduction(appState.currentJob, metaProductionName, 'select')
                                    updateFilters();
                                    setAppState({
                                        ...appState, 
                                        selectedMetaProductions: prodSel.getSelected()
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

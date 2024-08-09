/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\MetaProductionSelection.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import React, {useState} from "react";
import {JobItem} from "@/Data/types";
import {AppState, MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {getMvc} from "@/Data/mvc/MetaProduction";
import {SelectableCollection} from "@/Data/Components/SelectableCollection";
import {Jobs} from "@/Components/Jobs";
import {GenericSelectionList} from "@/Components/metaProduction/GenericSelectionList";
import {executeMetaJobFilters} from "./filters";
type MetaProductionSelectionProps = { 
    appState: AppState;
    setAppState: React.Dispatch<React.SetStateAction<AppState|null>>;
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
    
    let prodCatSel: SelectableCollection = SelectableCollection.getEmpty();
    let prodSel: SelectableCollection = SelectableCollection.getEmpty();
    if (appState.currentJob && catSelId && prodSelId) {
        prodCatSel = SelectableCollection.get(catSelId)
        ;
        prodSel = SelectableCollection.get(prodSelId)
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
        if (false) {
            console.log('Components.metaproduction.MetaProductionSelection.prodCatSel.items', prodCatSel.items);
            console.log('Components.metaproduction.MetaProductionSelection.prodCatSel.filterExcludeArray', prodCatSel.filterExcludeArray);
            console.log('Components.metaproduction.MetaProductionSelection.prodSel.items', prodSel.items);
            console.log('Components.metaproduction.MetaProductionSelection.prodSel.filterExcludeArray', prodSel.filterExcludeArray);
        }
    }
    
    
    return  (
        <div className="w-full flex-1 flex">
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
                appState.currentJob && catSelId && prodSelId &&  (
                    <React.Fragment>
                        <GenericSelectionList selectableItems={prodCatSel.getSelected()} title="Selected production categories" onUnselect={(categoryName) => {
                                if (appState.currentJob) {
                                    prodCatSel.unSelect(categoryName);
                                    getMvc().controller.selectMetaProductionCategory(appState.currentJob, categoryName, 'unselect')
                                    updateFilters();
                                }
                            }
                        } />
                        <GenericSelectionList selectableItems={prodCatSel.getUnselected()}
                            title="Available production categories"
                            searchViewPlaceholder="search category ..."
                            searchText={availableCategoriesSearchText}
                            onSearchTextChanged={(value) => {
                                    setAvailableCategoriesSearchText(value)
                                    prodCatSel.setSearchText(value);
                                    updateFilters();
                                }
                            }
                            onSelect={(categoryName) => {
                                    if (appState.currentJob) {
                                        prodCatSel.select(categoryName);
                                        getMvc().controller.selectMetaProductionCategory(appState.currentJob, categoryName, 'select')
                                        updateFilters();
                                    }
                                }
                            }
                         />
                        <GenericSelectionList selectableItems={prodSel.getSelected()} title="Selected productions" onUnselect={(metaProductionName) => {
                                if (appState.currentJob) {
                                    prodSel.unSelect(metaProductionName);
                                    getMvc().controller.selectMetaProduction(appState.currentJob, metaProductionName, 'unselect')
                                    updateFilters();
                                    setAppState({
                                        ...appState, 
                                        selectedMetaProductions: prodSel.getSelected()
                                     })
                                }
                            }
                        } />
                        <GenericSelectionList selectableItems={prodSel.getUnselected()}
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
                                    if (appState.currentJob) {
                                        prodSel.select(metaProductionName);
                                        getMvc().controller.selectMetaProduction(appState.currentJob, metaProductionName, 'select')
                                        updateFilters();
                                        setAppState({
                                            ...appState, 
                                            selectedMetaProductions: prodSel.getSelected()
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

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\MetaPluginsExecution.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import React, {useState, useEffect} from "react";
import * as wizziMetaApi from '@/Api/wizziMetaApi';
import {MetaProductionExt, HubProductionItem, MetaParameters} from '@/Api/types';
import {AppState, MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {StringKeyedObject} from "@/Data/types";
import {ParameterItem} from "@/Components/metaCtxBuilder/types";
import {SelectableCollection} from "@/Data/Components/SelectableCollection";
import {ErrorView} from "@/Components/utils/ErrorView";
import {SpinnerView} from "@/Components/utils/SpinnerView";
import {GenericSelectionList} from "@/Components/metaProduction/GenericSelectionList";
import ParamsBuilder from "@/Components/metaCtxBuilder/ParamsBuilder";
import {MetaProductionResult} from "@/Components/metaProduction/MetaProductionResult";
type MetaProductionExecState = { 
    activeMetaProduction?: string;
};
type MetaPluginsExecutionProps = { 
    appState: AppState;
    setAppState: React.Dispatch<React.SetStateAction<AppState|null>>;
    metaSelectionState: MetaSelectionState;
};
function startMetaPluginsExecution(selectedMetaProductions: StringKeyedObject[], selectedMetaPlugins: StringKeyedObject[]) {
    let [allIndexParameters, setAllIndexParameters] = useState<{[productionName: string]: ParameterItem[];}|null>(null);
    let [metaCtx, setMetaCtx] = useState<StringKeyedObject>({});
    let [error, setError] = useState(null);
    const keys = JSON.stringify(selectedMetaProductions);
    useEffect(() => {
        async function doFetch() {
            const metaProductions: MetaProductionExt[] = [];
            selectedMetaProductions.forEach(item => 
                metaProductions.push(item as MetaProductionExt)
            )
            const metaPlugins: HubProductionItem[] = [];
            selectedMetaPlugins.forEach(item => 
                metaPlugins.push(item as HubProductionItem)
            )
            wizziMetaApi.getMetaParameters(metaProductions, metaPlugins).then((metaParameters: MetaParameters) => {
                console.log('Components.metaproduction.MetaPluginsExecution.startMetaPluginsExecution.getMetaParameters.metaParameters', metaParameters);
                const allParameters = extractAllParameters(metaParameters);
                setAllIndexParameters(allParameters.indexParameters)
                setMetaCtx(allParameters.indexInitialValues)
            }
            ).catch((error: any) => {
                setError(error)
                console.log("[31m%s[0m", 'startMetaPluginsExecution.doFetch.error', error);
            }
            )
        }
        doFetch();
    }
    , [
        keys
    ])
    return {
            allIndexParameters, 
            metaCtx, 
            setMetaCtx, 
            metaParametersError: error
         };
}
function extractAllParameters(metaParameters: MetaParameters) {
    const allParameters: { 
        indexParameters: { 
            [productionName: string]: ParameterItem[];
        };
        indexInitialValues: { 
            [productionName: string]: StringKeyedObject;
        };
    } = {
        indexParameters: {
            
         }, 
        indexInitialValues: {
            
         }
     };
    for (var productionName in metaParameters.metaParametersObj) {
        const mpParametersObj = metaParameters.metaParametersObj[productionName];
        const indexParameters = mpParametersObj.parametersIndexObj.parameters;
        const indexInitialValuesObject = wizziMetaApi.getMetaCtxValuesObject(indexParameters);
        allParameters.indexParameters[productionName] = Object.values(indexParameters);
        allParameters.indexInitialValues[productionName] = indexInitialValuesObject;
        const useName = "use" + productionName[0].toUpperCase() + productionName.substring(1);
        (allParameters.indexInitialValues[useName] as any) = true;
    }
    return allParameters;
}
export function MetaPluginsExecution(props: MetaPluginsExecutionProps) {
    const {
        appState, 
        metaSelectionState
     } = props;
    
    let {
        pluginSelId, 
        prodSelId
     } = metaSelectionState;
    const [mpExecState, setMpExecState] = useState<MetaProductionExecState>({});
    
    if (!pluginSelId || !prodSelId) {
        return  (
            <div className="work-area-content-main" />
            )
        ;
    }
    
    const pluginSel = SelectableCollection.get(pluginSelId);
    const prodSel = SelectableCollection.get(prodSelId);
    
    const {
        allIndexParameters, 
        metaCtx, 
        setMetaCtx, 
        metaParametersError
     } = startMetaPluginsExecution(prodSel.getSelected(), pluginSel.getSelected());
    if (metaParametersError) {
        return  (
            <ErrorView error={metaParametersError} />
            )
        ;
    }
    if (!allIndexParameters) {
        return  (
            <SpinnerView />
            )
        ;
    }
    let indexParameters: ParameterItem[] = [];
    let indexValuesObject: StringKeyedObject = {};
    if (mpExecState.activeMetaProduction) {
        indexParameters = allIndexParameters[mpExecState.activeMetaProduction];
        indexValuesObject = metaCtx[mpExecState.activeMetaProduction];
    }
    return  (
        <div className="h-full w-full flex-1 flex">
            <GenericSelectionList selectableItems={prodSel.getSelected()}
                title="Selected productions"
                listClass={'w-area-list-exec-prods w-area-list-15'}
                onSelect={(metaProductionName) => {
                        console.log('Components.metaproduction.MetaPluginsExecution.onSelect.We need properties of ', metaProductionName);
                        setMpExecState({
                            ...mpExecState, 
                            activeMetaProduction: metaProductionName
                         })
                    }
                }
             />
            <ParamsBuilder indexParameters={indexParameters} indexInitialValues={indexValuesObject} onSave={(ctx: StringKeyedObject) => {
                    if (mpExecState.activeMetaProduction) {
                        setMetaCtx({
                            ...metaCtx, 
                            [mpExecState.activeMetaProduction]: ctx
                         })
                    }
                }
            } />
            <MetaProductionResult metaCtx={metaCtx} appState={appState} />
        </div>
        )
    ;
}

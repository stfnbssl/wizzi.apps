/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\MetaPluginsExecution.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React, {useState, useEffect} from "react";
import * as wizziMetaApi from '@/Api/wizziMetaApi';
import {JobItem} from "@/Data/types";
import {AppState, MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {getMvc} from "@/Data/mvc/MetaProduction";
import {SelectableCollection} from "@/Data/Components/SelectableCollection";
import {GenericSelectionList} from "@/Components/metaProduction/GenericSelectionList";
type MetaPluginsExecutionProps = { 
    appState: AppState;
    setAppState: React.Dispatch<React.SetStateAction<AppState>>;
    metaSelectionState: MetaSelectionState;
};
function startMetaPluginsExecution(selectedMetaProductions, selectedMetaPlugins) {
    let [data, setData] = useState(null);
    let [error, setError] = useState(null);
    const keys = JSON.stringify(selectedMetaProductions);
    useEffect(() => {
        async function doFetch() {
            wizziMetaApi.getMetaParameters(selectedMetaProductions, selectedMetaPlugins).then((result: any) => 
                setData(result)
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
            metaParameters: data, 
            metaParametersError: error
         };
}
export function MetaPluginsExecution(props: MetaPluginsExecutionProps) {
    const {
        appState, 
        setAppState, 
        metaSelectionState
     } = props;
    
    let {
        pluginCatSelId, 
        pluginSelId, 
        catSelId, 
        prodSelId, 
        selCounter
     } = metaSelectionState;
    const [metaCtx, setMetaCtx] = useState(null);
    const [mpExecState, setMpExecState] = useState({
        activeMetaProduction: null
     });
    
    if (!pluginSelId || !prodSelId) {
        return  (
            <div className="work-area-content-main" />
            )
        ;
    }
    
    const pluginSel = SelectableCollection.get(pluginSelId);
    const prodSel = SelectableCollection.get(prodSelId);
    
    const {
        metaParameters, 
        metaParametersError
     } = startMetaPluginsExecution(prodSel.getSelected(), pluginSel.getSelected());
    console.log('MetaPluginsExecution.metaParameters', metaParameters, metaParametersError, __filename);
    if (metaParametersError) {
        return  (
            <ErrorView error={metaParametersError} />
            )
        ;
    }
    if (!metaParameters) {
        return  (
            <SpinnerView />
            )
        ;
    }
    let activeMetaProductionParameters = extractParameters(metaParameters, mpExecState.activeMetaProduction || '__dummy__');
    console.log('activeMetaProductionParameters', activeMetaProductionParameters, __filename);
    return  (
        <div className="work-area-content-main">
            <GenericSelectionList selectedableItems={prodSel.getSelected()}
                title="Selected productions"
                listClass={'w-area-list-exec-prods w-area-list-15'}
                onSelect={(metaProductionName) => {
                        console.log('We need properties of ', metaProductionName, __filename);
                        setMpExecState({
                            ...mpExecState, 
                            activeMetaProduction: metaProductionName
                         })
                    }
                }
             />
            <MPExecProductionParameters parameters={activeMetaProductionParameters} onSave={() => {
                    let allProductionParameters = extractParameters(metaParameters);
                    console.log('allProductionParameters', allProductionParameters, __filename);
                    const ctx = parameterListToObject(allProductionParameters);
                    setMetaCtx(ctx)
                    alert('true' + JSON.stringify(ctx, null, 4))
                }
            } />
            <MetaProductionResult metaCtx={metaCtx} appState={appState} />
        </div>
        )
    ;
}

function MPExecProductionParameters(props) {
    console.log('props.parameters', props.parameters, __filename);
    console.log('MPExecProductionParameters.props.parameters', props.parameters, __filename);
    const {
        indexParameters, 
        globalsParameters
     } = props.parameters;
    return  (
        <div className="w-area-list w-area-list-exec-params w-area-list-25">
            <div className="w-area-list-caption">
                Parameters</div>
            <div className="w-area-list-inner">
                <button onClick={() => 
                        props.onSave()
                }>save</button>{
                    globalsParameters.length > 0 &&  (
                        <div>
                            <h4>
                            global parameters</h4>
                            <table>
                                <tbody>
                                    {
                                    globalsParameters.map((item, ndx) => 
                                         (
                                        <ContextParameter key={ndx} item={item} />
                                        )
                                    
                                    )}</tbody>
                            </table>
                        </div>
                        )
                    
                }
                {
                    indexParameters.length > 0 &&  (
                        <div>
                            <h4>
                            production parameters</h4>
                            <table>
                                <tbody>
                                    {
                                    indexParameters.map((item, ndx) => 
                                         (
                                        <ContextParameter key={ndx} item={item} />
                                        )
                                    
                                    )}</tbody>
                            </table>
                        </div>
                        )
                    
                }
                <div style={{
                        marginTop: '200px'
                     }}>
                    <code>{JSON.stringify(props.parameters)}</code></div>
            </div>
        </div>
        )
    ;
}
function extractParameters(metaParameters, activeMetaProduction) {
    console.log('extractParameters.metaParameters.activeMetaProduction', metaParameters, activeMetaProduction, __filename);
    if (!metaParameters) {
        return { indexParameters:[], globalsParameters:[] };
    }
    if (!metaParameters.metaParametersObj) {
        return { indexParameters:[], globalsParameters:[] };
    }
    if (activeMetaProduction) {
        const mpParameters = metaParameters.metaParametersObj[activeMetaProduction];
        if (!mpParameters) {
            return { indexParameters:[], globalsParameters:[] };
        }
        return extractMpParameters(mpParameters);
    }
    else {
        const allParameters = [];
        for (var k in metaParameters.metaParametersObj) {
            const mpParameters = metaParameters.metaParametersObj[k];
            const {
                indexParameters, 
                globalsParameters
             } = extractMpParameters(mpParameters);
            var i, i_items=globalsParameters, i_len=globalsParameters.length, item;
            for (i=0; i<i_len; i++) {
                item = globalsParameters[i];
                allParameters.push(item)
            }
            allParameters.push({
                type: 'use', 
                name: k, 
                value: true, 
                parameters: indexParameters
             })
        }
        return allParameters;
    }
}
function extractMpParameters(mpParameters) {
    const indexParameters = mpParameters.parametersIndexObj ? mpParameters.parametersIndexObj.parameters : [];
    const globalsParameters = mpParameters.parametersGlobalsObj ? mpParameters.parametersGlobalsObj.parameters : [];
    return {
            indexParameters, 
            globalsParameters
         };
}
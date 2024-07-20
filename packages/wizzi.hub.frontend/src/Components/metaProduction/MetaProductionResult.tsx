/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\MetaProductionResult.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import {useState, useEffect} from "react";
import * as packiApi from '@/Api/packiApi';
import * as wizziMetaApi from '@/Api/wizziMetaApi';
import {PackiEntry, MetaPluginExt} from "@/Api/types";
import {AppState} from "@/Data/mvc/MetaProduction/types";
import {ErrorView} from "@/Components/utils/ErrorView";
import FileExplorer from "@/Components/fileExplorer/FileExplorer";
import FileBrowser from "@/Components/fileExplorer/FileBrowser";
function executeResultMetaProduction(metaCtx: { 
}, hubMetaProductions: any[]) {
    let [error, setError] = useState(null);
    let [data, setData] = useState(null);
    console.log('Components.metaproduction.MetaProductionResult.executeResultMetaProduction.hubMetaProductions', hubMetaProductions);
    useEffect(() => {
        async function doFetch() {
            const inMemoryMetas: { 
                owner: string;
                name: string;
            }[] = [];
            hubMetaProductions.forEach((item) => {
                if (item.__is_hub_meta_plugin) {
                    inMemoryMetas.push({
                        owner: item.owner, 
                        name: item.name
                     })
                }
            }
            )
            console.log('Components.metaproduction.MetaProductionResult.executeResultMetaProduction.inMemoryMetas', inMemoryMetas);
            wizziMetaApi.MetaExecuteInMemory(metaCtx, inMemoryMetas, {}).then((result: any) => {
                console.log('Components.metaproduction.MetaProductionResult.executeMetaProduction.result', result);
                if (result.err) {
                    setError(result.err)
                }
                else {
                    setData(result)
                }
            }
            ).catch((error: any) => {
                console.log("[31m%s[0m", '----> Error: MetaExecuteInMemory', error);
                setError(error)
                console.log("[31m%s[0m", 'executeResultMetaProduction.MetaExecuteInMemory.error', error);
            }
            )
        }
        doFetch();
    }
    , [
        JSON.stringify(metaCtx)
    ])
    return {
            executionError: error, 
            executionResult: data
         };
}
type MetaProductionResultProps = { 
    metaCtx: { 
    };
    appState: AppState;
};
export function MetaProductionResult(props: MetaProductionResultProps) {
    const {
        metaCtx, 
        appState
     } = props;
    const {
        selectedMetaPlugins
     } = appState;
    const metaPlugins: MetaPluginExt[] = selectedMetaPlugins as MetaPluginExt[];
    const [selectedEntry, setSelectedEntry]  = useState<PackiEntry|null>(null);
    const {
        executionResult, 
        executionError
     } = executeResultMetaProduction(metaCtx, metaPlugins);
    if (executionError) {
        return  (
            <ErrorView error={executionError} />
            )
        ;
    }
    if (!executionResult) {
        return  (
            <div className="w-area-list w-area-list-15 w-area-list-15" />
            )
        ;
    }
    return  (
        <>
            <div className="w-area-list w-area-list-15 w-area-list-15">
                <div className="w-area-list-caption">
                    Production result</div>
                <div className="w-area-list-inner">
                    <FileExplorer entries={packiApi.packiToEntryArray(executionResult)} onFileSelect={entry => 
                            setSelectedEntry(entry)
                    } />
                </div>
            </div>
            {
                selectedEntry && selectedEntry.uri &&  (
                <div className="w-area-list w-area-list-35">
                    <div className="w-area-list-caption">
                        {selectedEntry.uri}</div>
                    <div className="w-area-list-inner">
                        <FileBrowser entry={selectedEntry} />
                    </div>
                </div>
                )
            
        }
    </>
    )
;
}

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\MetaProductionResult.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import {useState, useEffect} from "react";
import * as packiApi from '@/Api/packiApi';
import * as wizziMetaApi from '@/Api/wizziMetaApi';
import {PackiEntry, MetaPluginExt} from "@/Api/types";
import {AppState} from "@/Data/mvc/MetaProduction/types";
import {ErrorView} from "@/Components/utils/ErrorView";
import FileExplorer from "@/Components/fileExplorer/FileExplorer";
import FileBrowser from "@/Components/fileExplorer2/FileBrowser";
function executeResultMetaProduction(metaCtx: { 
}, hubMetaProductions: any[]) {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [prettifiedError, setPrettifiedError] = useState(null);
    const [prettified, setPrettified] = useState<{[key: string]: any}>({});
    const [generatedError, setGeneratedError] = useState(null);
    const [generated, setGenerated] = useState<{[key: string]: any}>({});
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
                    packiApi.prettify(result).then((response: any) => {
                        setPrettified(response);
                        console.log('prettify.response', response);
                    }
                    ).catch((err) => {
                        console.log("[31m%s[0m", err.message);
                        console.log("[31m%s[0m", err);
                        setPrettifiedError(err)
                    }
                    )
                    packiApi.generate(result, {}).then((response: any) => {
                        setGenerated(response);
                        console.log('generate.response', response);
                    }
                    ).catch((err) => {
                        console.log("[31m%s[0m", err.message);
                        console.log("[31m%s[0m", err);
                        setGeneratedError(err)
                    }
                    )
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
            executionResult: data, 
            executionPrettifiedResult: prettified, 
            executionPrettifiedError: prettifiedError, 
            executionGeneratedResult: generated, 
            executionGeneratedError: generatedError
         };
}
function detectWfjob(packiFiles: PackiFiles):  string {
    var items = Object.keys(packiFiles);
    var i, i_items=items, i_len=items.length, item;
    for (i=0; i<i_len; i++) {
        item = items[i];
        console.log('detectWfjob', item, item.endsWith('.wfjob.ittf'));
        if (item.endsWith('.wfjob.ittf')) {
            return item;
        }
    }
    return null;
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
    const [selectedEntry, setSelectedEntry] = useState<PackiEntry|null>(null);
    const {
        executionResult, 
        executionError, 
        executionPrettifiedResult, 
        executionPrettifiedError, 
        executionGeneratedResult, 
        executionGeneratedError
     } = executeResultMetaProduction(metaCtx, metaPlugins);
    if (executionError) {
        return  (
            <ErrorView error={executionError} />
            )
        ;
    }
    if (executionPrettifiedError) {
        return  (
            <ErrorView error={executionPrettifiedError} />
            )
        ;
    }
    if (executionGeneratedError) {
        return  (
            <ErrorView error={executionGeneratedError} />
            )
        ;
    }
    if (!executionResult) {
        return  (
            <div className="w-area-list w-area-list-15 w-area-list-15" />
            )
        ;
    }
    let explorerEntries: PackiFiles = {};
    let installEntries: PackiFiles = {};
    const wzjobUri = detectWfjob(executionResult);
    if (wzjobUri && wzjobUri.length > 0) {
        explorerEntries = packiApi.packiToEntryArray(packiApi.mergePackiFiles(executionPrettifiedResult, executionGeneratedResult))
        ;
        installEntries = packiApi.mergePackiFiles(executionResult, executionGeneratedResult)
        ;
    }
    else {
        explorerEntries = packiApi.packiToEntryArray(packiApi.mergePackiFiles(executionPrettifiedResult, packiApi.unmountPackiFolder(executionGeneratedResult, '.wizzi')))
        ;
        installEntries = packiApi.mergePackiFiles(executionResult, packiApi.unmountPackiFolder(executionGeneratedResult, '.wizzi'))
        ;
    }
    return  (
        <>
            <div className="h-full flex-1 flex flex-col bg-gray-700 text-zinc-200 rounded-lg shadow-md border-r border-gray-100">
                <div className="p-1 bg-gray-800 text-xs text-center">
                    Result</div>
                <div className="m-1 p-2 flex-grow overflow-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-100">
                    <div className="p-2 bg-gray-600 text-zinc-100">
                        <div className="flex">
                            <div className="py-0.5 mt-0.5 ml-0.5 text-xs rounded bg-gray-700 hover:bg-zinc-200 hover:text-gray-700 cursor-pointer" title={'Install the generated package'} onClick={() => {
                                    console.log('Components.metaproduction.MetaProductionResult.Install.onClick');
                                    alert(JSON.stringify(appState.currentJob?.__metaDemoPackage.json, null, 4))
                                    packiApi.install(installEntries, appState.currentJob?.__metaDemoPackage.json).then((response: any) => {
                                        console.log('install.response', response);
                                        alert(JSON.stringify(response, null, 4))
                                    }
                                    ).catch((err) => {
                                        console.log("[31m%s[0m", err.message);
                                        console.log("[31m%s[0m", err);
                                    }
                                    )
                                }
                            }>
                                Install</div>
                        </div>
                    </div>
                    <FileExplorer entries={explorerEntries} onFileSelect={entry => 
                            setSelectedEntry(entry)
                    } />
                </div>
            </div>
            {
                selectedEntry && selectedEntry.uri &&  (
                <div className="h-full flex-1 flex flex-col bg-gray-700 text-zinc-200 rounded-lg shadow-md border-r border-gray-100">
                    <div className="p-1 bg-gray-800 text-xs text-center">
                        {selectedEntry.uri}</div>
                    <div className="m-1 p-2 flex-grow overflow-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-100">
                        <FileBrowser entry={selectedEntry} />
                    </div>
                </div>
                )
            
        }
    </>
    )
;
}

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\WorkAreaContent.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import {JobItem} from "@/Data/types";
import {AppState, MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {MetaPluginsSelection} from "./MetaPluginsSelection";
import {MetaProductionSelection} from "./MetaProductionSelection";
import {MetaPluginsExecution} from "./MetaPluginsExecution";
type WorkAreaContentProps = { 
    appState: AppState;
    setAppState: React.Dispatch<React.SetStateAction<AppState|null>>;
    jobList: JobItem[];
    jobListError: any;
    jobItemReloadCount: number;
    metaSelectionState: MetaSelectionState;
    setMetaSelectionState: React.Dispatch<React.SetStateAction<MetaSelectionState>>;
};
export function WorkAreaContent(params: WorkAreaContentProps) {
    const {
        appState, 
        setAppState, 
        jobList, 
        metaSelectionState, 
        setMetaSelectionState
     } = params;
    return  (
        <div className="flex-1 flex">
            {
                (appState.activeView == 'plugins-selection') &&  (
                    <MetaPluginsSelection appState={appState}
                        setAppState={setAppState}
                        jobList={jobList}
                        metaSelectionState={metaSelectionState}
                        setMetaSelectionState={setMetaSelectionState}
                     />
                    )
                
            }
            {
                (appState.activeView == 'productions-selection') &&  (
                    <MetaProductionSelection appState={appState}
                        setAppState={setAppState}
                        jobList={jobList}
                        metaSelectionState={metaSelectionState}
                        setMetaSelectionState={setMetaSelectionState}
                     />
                    )
                
            }
            {
                appState.activeView == 'generation-execution' &&  (
                    <MetaPluginsExecution appState={appState} setAppState={setAppState} metaSelectionState={metaSelectionState} />
                    )
                
            }
        </div>
        )
    ;
}

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\WorkAreaContent.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {JobItem} from "@/Data/types";
import {AppState, MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {MetaPluginsSelection} from "./MetaPluginsSelection";
import {MetaProductionSelection} from "./MetaProductionSelection";
import {MetaPluginsExecution} from "./MetaPluginsExecution";
type WorkAreaContentProps = { 
    appState: AppState;
    setAppState: React.Dispatch<React.SetStateAction<AppState>>;
    jobList: JobItem[];
    jobListError: any;
    jobItemReloadCount: number;
    metaSelectionState: MetaSelectionState;
    setMetaSelectionState: React.Dispatch<React.SetStateAction<MetaSelectionState>>;
};
export // log 'WorkAreaContent-appState', appState
function WorkAreaContent(params: WorkAreaContentProps) {
    const {
        appState, 
        setAppState, 
        jobList, 
        jobListError, 
        jobItemReloadCount, 
        metaSelectionState, 
        setMetaSelectionState
     } = params;
    return  (
        <div className="work-area-content">
            {
                (appState.activeView == 'plugins-selection') &&  (
                    <MetaPluginsSelection appState={appState}
                        setAppState={setAppState}
                        jobList={jobList}
                        jobItemReloadCount={jobItemReloadCount}
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
                        jobItemReloadCount={jobItemReloadCount}
                        metaSelectionState={metaSelectionState}
                        setMetaSelectionState={setMetaSelectionState}
                     />
                    )
                
            }
            {
                appState.activeView == 'generation-execution' &&  (
                    <MetaPluginsExecution appState={appState}
                        setAppState={setAppState}
                        metaSelectionState={metaSelectionState}
                        setMetaSelectionState={setMetaSelectionState}
                     />
                    )
                
            }
        </div>
        )
    ;
}

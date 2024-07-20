/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\WorkAreaToolBar.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import React from "react";
import {AppState, ActiveViewKind} from "@/Data/mvc/MetaProduction/types";
type WorkAreaToolBarProps = { 
    appState: AppState;
    onReloadJobList: () => void;
    onChangeView: (view: ActiveViewKind) => void;
};
export function WorkAreaToolBar(params: WorkAreaToolBarProps) {
    const {
        appState
     } = params;
    return  (
        <div className="bg-gray-700 text-zinc-100">
            <div className="flex pad-5">
                <div className="ml-1">
                    <div className="text-sm font-bold">
                        Job</div>
                </div>
                <div className="pl-2 pt-1">
                    {appState.currentJob ? appState.currentJob.name + ' / ' + appState.currentJob.description : ''}</div>
                <div className="ml-2">
                    <div className="text-sm font-bold">
                         </div>
                </div>
                <div className="px-0.5 py-1 mt-0.5 ml-1 text-sm font-bold cursor-pointer hover:bg-zinc-200 hover:text-gray-700" title={'Reload the job list from server'} onClick={() => {
                        console.log('WorkAreaToolBar.reload.onClick', params.onReloadJobList);
                        params.onReloadJobList();
                    }
                }>
                    Reload</div>
                <div className="tlb-item-box">
                    <div className="px-0.5 py-1 mt-0.5 ml-1 text-sm font-bold cursor-pointer hover:bg-zinc-200 hover:text-gray-700">
                        <a href={'/job/new'} target="_blank" title={'Create a new job'}>Add</a></div>
                </div>
                <div className="ml-2">
                    <div className="text-sm font-bold">
                        Select</div>
                </div>
                {
                    ['productions-selection','generation-execution'].indexOf(appState.activeView) > -1 &&  (
                        <React.Fragment>
                            <div className="px-0.5 py-1 mt-0.5 ml-1 text-sm font-bold cursor-pointer hover:bg-zinc-200 hover:text-gray-700" title={'Open the meta plugins selection view'} onClick={() => 
                                    params.onChangeView('plugins-selection')
                            }>
                                Meta plugins</div>
                        </React.Fragment>
                        )
                    
                }
                {
                    appState.activeView == 'plugins-selection' &&  (
                    <div className="px-0.5 py-1 mt-0.5 ml-1 text-sm font-bold">
                        Meta plugins</div>
                    )
                
            }
            {
                ['plugins-selection','generation-execution'].indexOf(appState.activeView) > -1 &&  (
                <div className="px-0.5 py-1 mt-0.5 ml-1 text-sm font-bold cursor-pointer hover:bg-zinc-200 hover:text-gray-700" title={'Open the meta productions selection view'} onClick={() => 
                        params.onChangeView('productions-selection')
                }>
                    Meta productions</div>
                )
            
        }
        {
            appState.activeView == 'productions-selection' &&  (
            <div className="px-0.5 py-1 mt-0.5 ml-1 text-sm font-bold">
                Meta productions</div>
            )
        
    }
    {
        ['plugins-selection','productions-selection'].indexOf(appState.activeView) > -1 &&  (
        <div className="px-0.5 py-1 mt-0.5 ml-1 text-sm font-bold cursor-pointer hover:bg-zinc-200 hover:text-gray-700" title={'Open the meta productions execution view'} onClick={() => 
                params.onChangeView('generation-execution')
        }>
            Execution</div>
        )
    
}
{
    appState.activeView == 'generation-execution' &&  (
    <div className="px-0.5 py-1 mt-0.5 ml-1 text-sm font-bold">
        Execution</div>
    )

}
</div>
</div>
)
;
}

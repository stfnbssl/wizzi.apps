/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\WorkAreaToolBar.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {AppState, ActiveViewKind} from "@/Data/mvc/MetaProduction/types";
type WorkAreaToolBarProps = { 
    appState: AppState;
    onReloadJobList: () => void;
    onChangeView: (view: ActiveViewKind) => void;
};
export // log '=====> WorkAreaToolBar.appState', appState
function WorkAreaToolBar(params: WorkAreaToolBarProps) {
    const {
        appState
     } = params;
    return  (
        <div className="work-area-toolbar">
            <div className="work-area-toolbar-inner">
                <div className="tlb-item-box">
                    <div className="tlb-item-caption">
                        Job</div>
                </div>
                <div className="tlb-item-box">
                    <div className="tlb-item-name">
                        {appState.currentJob ? appState.currentJob.name + ' / ' + appState.currentJob.description : ''}</div>
                </div>
                <div className="tlb-item-box-m-left">
                    <div className="tlb-item-caption">
                         </div>
                </div>
                <div className="tlb-item-box">
                    <div className="tlb-item-button" title={'Reload the job list from server'} onClick={() => {
                            console.log('WorkAreaToolBar.reload.onClick', params.onReloadJobList, __filename);
                            params.onReloadJobList();
                        }
                    }>
                        Reload</div>
                </div>
                <div className="tlb-item-box">
                    <div className="tlb-item-button">
                        <a href={'/job/new'} target="_blank" title={'Create a new job'}>Add</a></div>
                </div>
                <div className="tlb-item-box-m-left">
                    <div className="tlb-item-caption">
                        Select</div>
                </div>
                {
                    ['productions-selection','generation-execution'].indexOf(appState.activeView) > -1 &&  (
                        <React.Fragment>
                            <div className="tlb-item-box">
                                <div className="tlb-item-button" title={'Open the meta plugins selection view'} onClick={() => 
                                        params.onChangeView('plugins-selection')
                                }>
                                    Meta plugins</div>
                            </div>
                        </React.Fragment>
                        )
                    
                }
                {
                    ['plugins-selection','generation-execution'].indexOf(appState.activeView) > -1 &&  (
                    <div className="tlb-item-box">
                        <div className="tlb-item-button" title={'Open the meta productions selection view'} onClick={() => 
                                params.onChangeView('productions-selection')
                        }>
                            Meta productions</div>
                    </div>
                    )
                
            }
            {
                ['plugins-selection','productions-selection'].indexOf(appState.activeView) > -1 &&  (
                <div className="tlb-item-box">
                    <div className="tlb-item-button" title={'Open the meta productions execution view'} onClick={() => 
                            params.onChangeView('generation-execution')
                    }>
                        Execution</div>
                </div>
                )
            
        }
    </div>
</div>
)
;
}

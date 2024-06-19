/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\index.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {useState, useEffect} from "react";
import {getMvc} from "@/Data/mvc/MetaProduction";
import {getJobs, startCurrentJob} from "@/Data/jobs";
import {JobItem} from "@/Data/types";
import {AppState, MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {MainContent, MainContentLeftBar, MainContentWorkArea, MainFooter, MainHeader} from "@/Components/shell/index";
import {SpinnerView} from "@/Components/utils/SpinnerView";
import {MenuItem} from "@/Components/nav/MenuItem";
import {UserNavBar} from "@/Components/nav/UserNavBar";
import {LogoTitleNavBar} from "@/Components/nav/LogoTitleNavBar";
import {WorkAreaToolBar} from "./WorkAreaToolBar";
import {WorkAreaContent} from "./WorkAreaContent";
import {MetaErrorView} from "./MetaErrorView";
function startAppState(initialState: AppState) {
    let [data, setData] = useState<AppState|null>(null);
    useEffect(() => {
        async function doFetch() {
            getMvc().controller.getAppState((result) => {
                const data = Object.assign({}, initialState, result);
                setData(data)
            }
            )
        }
        doFetch();
    }
    , [])
    return {
            appState: data, 
            setAppState: setData
         };
}
function loadJobList(reloadCount: number):  { 
    jobList: JobItem[]|null;
    jobListError: any;
    setJobList: React.Dispatch<React.SetStateAction<JobItem[] | null>>;
    setJobListError: React.Dispatch<React.SetStateAction<any | null>>;
    jobItemReloadCount: number;
} {
    let [data, setData] = useState<JobItem[]|null>(null);
    let [error, setError] = useState<any|null>(null);
    let [jobItemReloadCount, setJobItemReloadCount] = useState(0);
    useEffect(() => {
        async function doFetch() {
            getJobs(getMvc().user.id, reloadCount == 0 ? false : true).then((result: any) => {
                setData(result.jobs)
                setJobItemReloadCount(jobItemReloadCount + 1)
            }
            ).catch((error: any) => {
                setError(error)
                console.log("[31m%s[0m", 'loadJobList.error', error);
            }
            )
        }
        doFetch();
    }
    , [
        reloadCount
    ])
    return {
            jobList: data, 
            jobListError: error, 
            setJobList: setData, 
            setJobListError: setError, 
            jobItemReloadCount: jobItemReloadCount
         };
}
export function MetaProduction() {
    const {
        appState, 
        setAppState
     } = startAppState({
        reloadCount: 0, 
        activeView: 'plugins-selection'
     });
    console.log("AppData.appState", appState);
    
    const {
        jobList, 
        jobListError, 
        jobItemReloadCount
     } = loadJobList(appState ? appState.reloadCount : 0);
    if (jobListError) {
         (
        <MetaErrorView error={jobListError} />
        )
    }
    console.log("AppData.jobList", jobList);
    
    if (!appState || jobList == null) {
        return  (
            <MainHeader>
                <SpinnerView />
            </MainHeader>
            )
        ;
    }
    return  (
        <div>
            <MetaProductionPage appState={appState}
                setAppState={setAppState}
                jobList={jobList}
                jobListError={jobListError}
                jobItemReloadCount={jobItemReloadCount}
             />
        </div>
        )
    ;
}

type MetaProductionPageProps = { 
    appState: AppState;
    setAppState: any;
    jobList: JobItem[];
    jobListError: any;
    jobItemReloadCount: number;
};
// Do increment "metaSelectionState.selCounter" to force rerendering
function MetaProductionPage(params: MetaProductionPageProps) {
    
    const {
        appState, 
        setAppState, 
        jobList, 
        jobListError, 
        jobItemReloadCount
     } = params;
    
    const [metaSelectionState, setMetaSelectionState] = useState<MetaSelectionState>({
        selCounter: 0
     });
    
    if (!appState.currentJobId) {
        return  (
            <MainHeader>
                <p>
                Create/select a job</p>
            </MainHeader>
            )
        ;
    }
    const currentJobId = appState.currentJobId;
    const jobItemData = startCurrentJob(currentJobId, jobItemReloadCount, {
        appState, 
        setAppState, 
        metaSelectionState, 
        setMetaSelectionState
     });
    if (!jobItemData) {
        return  (
            <MainHeader>
                <SpinnerView />
            </MainHeader>
            )
        ;
    }
    console.log("AppMetaJob.jobItemData", jobItemData);
    console.log("AppMetaJob.metaSelectionState", metaSelectionState);
    console.log("AppMetaJob.appState", appState);
    return  (
        <>
            <MainHeader>
                <LogoTitleNavBar title="Meta production jobs" />
                <div className="flex-row">
                    <MenuItem label="Hub productions" href="/~/stfnbssl/lab-meta.html?savecount=0&filepath=hubProductions.html.ittf" />
                    <MenuItem label="Lab" href="/ittf/site/lab.html.ittf" />
                </div>
                <UserNavBar loggedUserId="user.id" />
            </MainHeader>
            <MainContent>
                <MainContentLeftBar />
                <MainContentWorkArea>
                    <WorkAreaToolBar appState={appState} onChangeView={value => 
                            getMvc().controller.setAppState({
                                activeView: value, 
                                reloadCount: appState.reloadCount
                             }, () => 
                                setAppState({
                                    ...appState, 
                                    activeView: value
                                 })
                            )
                    } onReloadJobList={() => 
                            setAppState({
                                ...appState, 
                                reloadCount: appState.reloadCount + 1
                             })
                    } />
                    <WorkAreaContent appState={appState}
                        setAppState={setAppState}
                        jobList={jobList}
                        jobListError={jobListError}
                        jobItemReloadCount={jobItemReloadCount}
                        metaSelectionState={metaSelectionState}
                        setMetaSelectionState={setMetaSelectionState}
                     />
                </MainContentWorkArea>
            </MainContent>
            <MainFooter />
        </>
        )
    ;
}
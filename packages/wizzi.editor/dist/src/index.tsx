/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\index.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
*/
import cookies from 'js-cookie';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import App from './components/App';
import NonExistent from './components/NonExistent';
import {PreferencesProvider} from './features/preferences';
import ThemeProvider from './components/ThemeProvider';
import createStore from './store/createStore';
import type {RouterData, QueryParams} from './features/packi';
declare const __INITIAL_DATA__: { 
    data: any;
    loggedUser: any;
    queryParams: any;
};

const store = createStore({
    packi: {
        loading: false, 
        clonedGithubRepoOwner: undefined, 
        clonedGithubRepoName: undefined, 
        clonedGithubRepoFiles: undefined
     }, 
    wizzi: {
        loading: false, 
        wizziError: undefined, 
        generatedArtifact: undefined, 
        mTreeBuildupScript: undefined, 
        mTreeIttf: undefined, 
        jobGeneratedArtifacts: {
            
         }, 
        wizziMetaFolderIttfDocuments: {
            
         }, 
        wizzifiedIttfContent: undefined, 
        codeASTContent: undefined
     }
 });

function AppContainer(props: any) {

    const {
        data, 
        ...rest
     } = props;
    if (data && data.type === 'success') {
        const appProps = {
            ...props, 
            ...rest, 
            packi: data.packi, 
            defaults: data.defaults
         };
        return  (
            <App
             {...appProps} />
            )
        ;
    }
    else {
        return  (
            <NonExistent
             />
            )
        ;
    }
}
function PackiApp() {

    return  (
        <React.Fragment
        >
            <HelmetProvider
            >
                <Provider
                 store={store}>
                    <PreferencesProvider
                     cookies={cookies}>
                        <ThemeProvider
                        >
                            <AppContainer
                             data={window.__INITIAL_DATA__.data} loggedUser={window.__INITIAL_DATA__.loggedUser} queryParams={window.__INITIAL_DATA__.queryParams} />
                        </ThemeProvider>
                    </PreferencesProvider>
                </Provider>
            </HelmetProvider>
        </React.Fragment>
        )
    ;
}
ReactDOM.render(
<PackiApp
 />
, document.getElementById('root'))

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\index.tsx.ittf
    utc time: Mon, 12 Feb 2024 08:27:22 GMT
*/
import cookies from 'js-cookie';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import App from './components/App';
import NonExistent from './components/NonExistent';
import ThemeProvider from './components/ThemeProvider';
declare const __INITIAL_DATA__: { 
    data: any;
    queryParams: any;
};

function AppContainer(props: any) {

    const {
        data, 
        ...rest
     } = props;
    if (data && data.type === 'success') {
        const appProps = {
            ...props, 
            ...rest, 
            query: props.queryParams, 
            formName: data.formName, 
            formData: data.formData
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
function PageFormsApp() {

    return  (
        <React.Fragment
        >
            <HelmetProvider
            >
                <ThemeProvider
                >
                    <AppContainer
                     data={__INITIAL_DATA__.data} queryParams={__INITIAL_DATA__.queryParams} />
                </ThemeProvider>
            </HelmetProvider>
        </React.Fragment>
        )
    ;
}
ReactDOM.render(
<PageFormsApp
 />
, document.getElementById('root'))

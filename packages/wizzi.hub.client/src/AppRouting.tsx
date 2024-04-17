/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\AppRouting.tsx.ittf
    utc time: Sat, 09 Mar 2024 13:13:32 GMT
*/
import React, {useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CheatPage, {CheatsLoader} from './pages/cheat';
import CheatsheetPage, {CheatsheetLoader} from './pages/cheatsheet';
import HomePage, {HomeLoader} from './pages/home';
import HomePage from './pages/home';
import ErrorPage from "./pages/error";
const router = createBrowserRouter([
    {
        path: "/", 
        element:  (
        <HomePage
         />
        )
        , 
        loader: HomeLoader, 
        errorElement:  (
        <ErrorPage
         />
        )
        , 
        children: [
            {
                path: "/cheat", 
                element:  (
                <CheatPage
                 />
                )
                , 
                loader: CheatsLoader, 
                errorElement:  (
                <ErrorPage
                 />
                )
                , 
                children: [
                    {
                        path: "/cheat/sheet/:schemaName", 
                        element:  (
                        <CheatsheetPage
                         />
                        )
                        , 
                        loader: CheatsheetLoader, 
                        errorElement:  (
                        <ErrorPage
                         />
                        )
                        
                     }
                ]
             }
        ]
     }
]);
const AppRouting: React.FunctionComponent<{}> = (props) => {

    useEffect(() => {
    
        console.log('Loading AppRouting.', __filename);
    }
    , [])
    return  (
        <RouterProvider
         router={router} fallbackElement={ (
            <p
            >
                Loading...
            </p>
            )
        } />
        )
    ;
}
;
export default AppRouting;
if (import.meta.hot) {
    import.meta.hot.dispose(() => 
    
        router.dispose()
    )
}

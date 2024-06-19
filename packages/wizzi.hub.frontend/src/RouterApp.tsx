/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\RouterApp.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from '@/Pages/Home';
import PageOne from '@/Pages/One';
import PageTwo from '@/Pages/Two';
import PageThree from '@/Pages/Three';
import Header from '@/Components/nav/Header';
const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={ (
    <Header />
    )
}>
    <Route index element={ (
        <Home />
        )
    } />
    <Route path="one/:id" element={ (
        <PageOne />
        )
    } />
    <Route path="two/:id" element={ (
        <PageTwo />
        )
    } />
    <Route path="three" element={ (
        <PageThree />
        )
    } />
</Route>
));
const App: React.FC = () => {
    return  (
        <>
            <RouterProvider router={router} />
        </>
        )
    ;
}
;
export default App;
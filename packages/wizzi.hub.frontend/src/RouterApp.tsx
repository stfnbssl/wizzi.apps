/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\RouterApp.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from '@/Pages/Home';
import PageOne from '@/Pages/One';
import PageTwo from '@/Pages/Two';
import PageThree from '@/Pages/Three';
import PageFour from '@/Pages/Four';
const router = createBrowserRouter(createRoutesFromElements(
<Route path="/">
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
    <Route path="four" element={ (
        <PageFour />
        )
    } />
</Route>
));
const App: React.FC = () => {
    return  (
        <RouterProvider router={router} />
        )
    ;
}
;
export default App;
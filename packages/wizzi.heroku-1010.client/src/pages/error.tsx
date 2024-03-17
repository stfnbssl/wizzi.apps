/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\pages\error.tsx.ittf
    utc time: Sat, 09 Mar 2024 13:13:32 GMT
*/
import React from 'react';
import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    
        const error = useRouteError();
        console.log("[31m%s[0m", error);
        return  (
            <div
             id="error-page">
                <h1
                >
                    Oops!
                </h1>
                <p
                >
                    Sorry, an unexpected error has occurred.
                </p>
                <p
                >
                    <i
                    >
                        {error.statusText || error.message}
                    </i>
                </p>
            </div>
            )
        ;
    }

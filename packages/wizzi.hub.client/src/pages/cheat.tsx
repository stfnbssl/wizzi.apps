/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\pages\cheat.tsx.ittf
    utc time: Sat, 09 Mar 2024 13:13:32 GMT
*/
import React from 'react';
import {json, useLoaderData} from "react-router-dom";
import {getCheats} from "../api/cheatsheet";

export async function CheatsLoader({
    params
 }) {

    const cheatsData = await getCheats();
    return json({
            cheatsData
         });
}

function CheatsPage() {

    const data = useLoaderData();
    const {
        cheatsData
     } = data;
    return  (
        <main
        >
            <h1
            >
                Let's view your Cheatsets
            </h1>
            <p
            >
                Your Cheatsheets are ...
            </p>
        </main>
        )
    ;
}
export default CheatsPage;

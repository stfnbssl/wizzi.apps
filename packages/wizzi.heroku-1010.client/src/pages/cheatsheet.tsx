/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\pages\cheatsheet.tsx.ittf
    utc time: Sat, 09 Mar 2024 13:13:32 GMT
*/
import React from 'react';
import {json, useLoaderData} from "react-router-dom";
import {getCheatsheet} from "../api/cheatsheet";

export async function CheatsheetLoader({
    params
 }) {

    const cheatsheetData = await getCheatsheet(params.schemaName);
    return json({
            cheatsheetData
         });
}

function CheatsheetPage() {

    const data = useLoaderData();
    const {
        cheatsheetData
     } = data;
    return  (
        <main
        >
            <h1
            >
                Let's view your Cheatsheet
            </h1>
            <p
            >
                Your Cheatsheet is ...
            </p>
        </main>
        )
    ;
}

export default CheatsheetPage;

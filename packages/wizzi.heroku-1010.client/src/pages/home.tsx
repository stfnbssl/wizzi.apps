/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\pages\home.tsx.ittf
    utc time: Sat, 09 Mar 2024 13:13:32 GMT
*/
import React from 'react';
import {json, useLoaderData} from "react-router-dom";
import {getHomeSections} from "../api/home";
import "./home.css";
import {FullPage, MainHeader, MainContent, MainContentLeftBar, MainContentWorkArea, MainFooter} from '../layout/shell';

export async function HomeLoader({
    params
 }) {

    const homeSections = await getHomeSections();
    return json({
            homeSections
         });
}

const HomePage = function() {

    const data = useLoaderData();
    const {
        homeSections
     } = data;
    return  (
        <FullPage
        >
            <MainHeader
            >
                {
                    homeSections.map((section, ndx) => {
                    
                        return  (
                            <a
                             href={section.path}>
                            {section.name}
                            </a>
                            )
                        ;
                    }
                    )
                }
            </MainHeader>
            <MainContent
            >
                <MainContentLeftBar
                 />
                <MainContentWorkArea
                >
                    <div
                     className="Root">
                        <header
                         className="Root-header">
                            <p
                            >
                                Edit 
                                <code
                                >
                                     src/Root.tsx
                                </code>
                                and save to reload.
                            </p>
                            <a 
                                className="Root-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </div>
                </MainContentWorkArea>
            </MainContent>
            <MainFooter
             />
        </FullPage>
        )
    ;
};

export default HomePage;

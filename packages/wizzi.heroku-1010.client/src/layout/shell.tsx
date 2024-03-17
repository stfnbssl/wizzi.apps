/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\layout\shell.tsx.ittf
    utc time: Sat, 09 Mar 2024 13:13:32 GMT
*/
import React from "react";
import "./shell.css";
export function FullPage(params: any) {

    return  (
        <div
         className="full-page">
            {
                params.children
                
            }
        </div>
        )
    ;
}
export function MainHeader(params: any) {

    return  (
        <div
         className="main-header">
            {
                params.children
                
            }
        </div>
        )
    ;
}
export function MainContent(params: any) {

    return  (
        <div
         className="main-content">
            {
                params.children
                
            }
        </div>
        )
    ;
}
export function MainContentLeftBar(params: any) {

    return  (
        <div
         className="main-content-left-bar">
            {
                params.children
                
            }
        </div>
        )
    ;
}
export function MainContentWorkArea(params: any) {

    return  (
        <div
         className="main-content-work-area">
            {
                params.children
                
            }
        </div>
        )
    ;
}
export function MainFooter(params: any) {

    return  (
        <div
         className="main-footer">
            {
                params.children
                
            }
        </div>
        )
    ;
}
//
export function Shell(params: any) {

    return ;
     (
    <FullPage
    >
        <MainHeader
         />
        <MainContent
         />
        <MainContentLeftBar
         />
        <MainContentWorkArea
         />
        <MainFooter
         />
    </FullPage>
    )
}

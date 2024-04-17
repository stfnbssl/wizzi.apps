/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\widgets\WebFrame.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {c} from '../ThemeProvider';

export type WebFrameProps = { 
    previewURL: string;
};

export function WebFrame({
    previewURL
 }: Props) {

    return  (
        <div
         className={css(styles.container)}>
            <iframe
             src={previewURL} allow="geolocation; camera; microphone" className={css(styles.frame)} />
        </div>
        )
    ;
}

export default WebFrame;

const styles = StyleSheet.create({
    container: {
        position: 'relative', 
        display: 'flex', 
        flex: 1, 
        width: '100%', 
        height: '100%'
     }, 
    frame: {
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        border: 0, 
        zIndex: 1, 
        backgroundColor: c('content', 'light')
     }
 });

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\widgets\WebFrame.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
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

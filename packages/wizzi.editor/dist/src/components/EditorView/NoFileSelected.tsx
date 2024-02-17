/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\EditorView\NoFileSelected.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
export default class NoFileSelected extends React.PureComponent {
        render() {
            return  (
                <div
                 className={css(styles.container)}>
                    <h4
                     className={css(styles.text)}>
                        Select a file to view and edit
                    </h4>
                </div>
                )
            ;
        }
    }
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
     }, 
    text: {
        fontSize: '1.5em', 
        fontWeight: 500, 
        opacity: 0.5
     }
 });

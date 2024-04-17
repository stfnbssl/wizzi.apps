/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\Search\SearchPlaceholder.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {withThemeName, ThemeName} from '../../features/preferences/index';
function Placeholder(props: { 
    theme: ThemeName;
    label: string;
}) {

    return  (
        <div
         className={css(styles.placeholder)}>
            <img
             className={css(styles.image)} src={props.theme === 'dark' ? require('../../assets/packi-icon-dark.svg') : require('../../assets/packi-icon.svg')} />
            {props.label}
        </div>
        )
    ;
}
export default withThemeName(Placeholder);
const styles = StyleSheet.create({
    placeholder: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1, 
        margin: 24, 
        fontSize: 16, 
        opacity: 0.5
     }, 
    image: {
        height: 72, 
        width: 72, 
        margin: 16, 
        opacity: 0.7
     }
 });

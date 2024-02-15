/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\NonExistent.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {Link} from 'react-router-dom';
export default function NonExistent() {
    
        return  (
            <div
             className={css(styles.container)}>
                <div
                 className={css(styles.content)}>
                    <h1
                     className={css(styles.heading)}>
                        Oops!
                    </h1>
                    <p
                     className={css(styles.message)}>
                        We couldn't find the Packi you're looking for. Go to
                        <Link
                         to="/">
                            the homepage
                        </Link>
                        .
                    </p>
                </div>
            </div>
            )
        ;
    }
const styles = StyleSheet.create({
    container: {
        height: '100%', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 24
     }, 
    logo: {
        height: 56, 
        width: 56, 
        marginRight: 24
     }, 
    code: {
        paddingRight: 24, 
        fontSize: '2em'
     }, 
    content: {
        paddingLeft: 24, 
        borderLeft: '1px solid #eee'
     }, 
    heading: {
        margin: 0
     }, 
    message: {
        marginBottom: 0
     }
 });

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\shell\AppShell.tsx.ittf
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {Button} from '../widgets/Button';
import {ProgressIndicator} from '../widgets/ProgressIndicator';
import {ContentShell} from './ContentShell';
import {EditorShell} from './EditorShell';
import {FooterShell} from './FooterShell';
import {LayoutShell} from './LayoutShell';
import {PreviewShell} from './PreviewShell';
import {SidebarShell} from './SidebarShell';
import {ToolbarShell} from './ToolbarShell';
import {ToolbarTitleShell} from './ToolbarTitleShell';
export type AppShellProps = { 
    title?: string | null;
};
export function AppShell(props: AppShellProps) {

    return  (
        <ContentShell
        >
            <ProgressIndicator
             delay={1000} />
            <ToolbarShell
            >
                <ToolbarTitleShell
                >
                    <div
                     className={css(styles.logo)} />
                    <div
                     className={css(styles.header)}>
                        <h1
                         className={css(styles.title)}>
                            {props.title ?? 'packi'}
                        </h1>
                        <div
                         className={css(styles.status)}>
                            …
                        </div>
                    </div>
                </ToolbarTitleShell>
                <Button
                 variant="secondary" onClick={() => 
                    
                        undefined
                    
                } className={css(styles.saveButton)}>
                    {'\u00A0'}
                </Button>
                <div
                 className={css(styles.avatar)} />
            </ToolbarShell>
            <LayoutShell
            >
                <SidebarShell
                 />
                <EditorShell
                 />
                {
                    props.previewShown
                     &&  (
                        <PreviewShell
                         />
                        )
                    
                }
            </LayoutShell>
            <FooterShell
             />
        </ContentShell>
        )
    ;
}

export default AppShell;

const styles = StyleSheet.create({
    logo: {
        backgroundColor: 'currentColor', 
        opacity: 0.2, 
        borderRadius: 3, 
        width: 24, 
        height: 24, 
        marginLeft: 16, 
        marginRight: 16
     }, 
    header: {
        minWidth: 0, 
        marginRight: 16
     }, 
    title: {
        fontSize: '1.3em', 
        lineHeight: '1.3em', 
        fontWeight: 600, 
        margin: 0, 
        padding: '1px 6px'
     }, 
    status: {
        fontSize: 12, 
        margin: '0 6px', 
        opacity: 0.5
     }, 
    saveButton: {
        width: 80, 
        height: 40, 
        pointerEvents: 'none'
     }, 
    avatar: {
        backgroundColor: 'currentColor', 
        opacity: 0.2, 
        height: 26, 
        width: 26, 
        borderRadius: 13, 
        margin: '0 16px'
     }
 });

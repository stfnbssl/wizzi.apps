/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\EditorView\KeyboardShortcuts.tsx.ittf
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {KeyMap} from '../widgets/KeybindingsManager';
import ShortcutLabel from '../widgets/ShortcutLabel';
export const Shortcuts = {
    save: {
        description: 'Save changes', 
        combo: [
            KeyMap.Meta, 
            KeyMap.S
        ]
     }, 
    update: {
        type: 'update', 
        description: 'Update code on device', 
        combo: [
            KeyMap.Meta, 
            KeyMap.U
        ]
     }, 
    tree: {
        description: 'Toggle sidebar', 
        combo: [
            KeyMap.Meta, 
            KeyMap.Backslash
        ]
     }, 
    panels: {
        description: 'Toggle error and log panels', 
        combo: [
            KeyMap.Ctrl, 
            KeyMap.Tilde
        ]
     }, 
    format: {
        description: 'Format code with prettier', 
        combo: [
            KeyMap.Ctrl, 
            KeyMap.Alt, 
            KeyMap.F
        ]
     }, 
    shortcuts: {
        description: 'Show keyboard shortcuts', 
        combo: [
            KeyMap.Meta, 
            KeyMap.Alt, 
            KeyMap.Shift
        ]
     }
 };
class KeyboardShortcuts extends React.PureComponent {
    render() {
        return  (
            <table
             className={css(styles.shortcutList)}>
                <tbody
                >
                    {
                        Object.entries(Shortcuts).map(([type, binding]) => 
                        
                             (
                            <tr
                             key={type}>
                                <td
                                 className={css(styles.shortcutCell, styles.shortcutLabelCell)}>
                                    <ShortcutLabel
                                     boxed combo={binding.combo} />
                                </td>
                                <td
                                 className={css(styles.shortcutCell, styles.shortcutDescriptionCell)}>
                                    {binding.description}
                                </td>
                            </tr>
                            )
                        
                        )
                    }
                </tbody>
            </table>
            )
        ;
    }
}
export default KeyboardShortcuts;
const styles = StyleSheet.create({
    shortcutList: {
        fontSize: '1.2em', 
        tableLayout: 'fixed'
     }, 
    shortcutCell: {
        padding: '6px 8px'
     }, 
    shortcutLabelCell: {
        textAlign: 'right', 
        marginRight: 8
     }, 
    shortcutDescriptionCell: {
        textAlign: 'left'
     }
 });

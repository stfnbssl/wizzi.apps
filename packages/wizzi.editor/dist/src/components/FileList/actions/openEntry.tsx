/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\openEntry.tsx.ittf
*/
import {FileSystemEntry} from '../../../features/file';
import updateEntry from './updateEntry';
export default function openEntry(entries: FileSystemEntry[], path: string, focus: boolean = false):  FileSystemEntry[] {
    
        const entry = entries.find(e => 
        
            e.item.path === path
        );
        const isFolder = entry ? entry.item.type === 'folder' : false;
        return entries.map((e) => {
            
                if (e.item.path === path) {
                    if (e.item.type === 'file') {
                        if (e.state.isSelected && e.state.isFocused && e.state.isOpen) {
                            return e;
                        }
                        
                        // Select, open and focus the file
                        return updateEntry(e, {
                                state: {
                                    isSelected: true, 
                                    isFocused: true, 
                                    isOpen: true
                                 }
                             });
                    }
                    else {
                        
                        // Select and toggle the expand for the directory
                        return updateEntry(e, {
                                state: {
                                    isSelected: true, 
                                    isExpanded: focus ? e.state.isExpanded : !e.state.isExpanded
                                 }
                             });
                    }
                }
                if (e.item.type === 'file') {
                    if (e.state.isSelected || e.state.isFocused) {
                        
                        // Unselect and unfocus the file
                        return updateEntry(e, {
                                state: {
                                    isSelected: false, 
                                    isFocused: isFolder ? e.state.isFocused : false
                                 }
                             });
                    }
                }
                else {
                    if (e.state.isSelected) {
                        
                        // Unselect the folder
                        return updateEntry(e, {
                                state: {
                                    isSelected: false
                                 }
                             });
                    }
                }
                return e;
            }
            );
    }

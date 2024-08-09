/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\pasteEntry.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import {FileSystemEntry, isInsideFolder, changeParentPath} from '../../../features/file';
import createEntryAtPath from './createEntryAtPath';
import updateEntry from './updateEntry';
export default function handleEntryPaste(entries: FileSystemEntry[], path: string | undefined, e: FileSystemEntry) {
        const entry = createEntryAtPath(entries, path, e, '- Copy');
        if (e.item.type === 'folder') {
            const children = entries.filter(it => 
                // Get children of the old folder
                isInsideFolder(it.item.path, e.item.path)
            ).map(it => 
                // Update the parent folder name to the new one
                updateEntry(it, {
                    item: {
                        path: changeParentPath(it.item.path, e.item.path, entry.item.path)
                     }
                 })
            )
            ;
            return [
                    ...entries, 
                    ...children, 
                    entry
                ];
        }
        else {
            return [
                    ...entries, 
                    entry
                ];
        }
    }
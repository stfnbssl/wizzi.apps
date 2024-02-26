/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\renameEntry.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
*/
import {FileSystemEntry, changeParentPath, isInsideFolder} from '../../../features/file';
import recursivelyCreateParents from './recursivelyCreateParents';
import updateEntry from './updateEntry';
export default function renameEntry(entries: FileSystemEntry[], oldPath: string, newPath: string) {
    
        const entry = entries.find(e => 
        
            e.item.path === oldPath
        );
        if (!entry) {
            return entries;
        }
        const renamed = updateEntry(entry, {
            item: {
                path: newPath
             }
         });
        delete renamed.state.isCreating
        const next: FileSystemEntry[] = entries.map((e) => {
        
            if (e.item.path === entry.item.path) {
                return renamed;
            }
            if (renamed.item.type === 'folder' && isInsideFolder(e.item.path, entry.item.path)) {
                return updateEntry(e, {
                        item: {
                            path: changeParentPath(e.item.path, entry.item.path, renamed.item.path)
                         }
                     });
            }
            return e;
        }
        );
        const parents = recursivelyCreateParents(next, renamed.item.path, true);
        return [
                ...next, 
                ...parents
            ];
    }

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\createEntryAtPath.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
import {FileSystemEntry, getUniquePath, getParentPath} from '../../../features/file';
import updateEntry from './updateEntry';
export default function createEntryAtPath(entries: FileSystemEntry[], path: string | undefined, e: FileSystemEntry, suffix?: string):  FileSystemEntry {
    
        
        // Check if an entry exists for the path we want to create the entry at
        
        // If the entry is a folder, we create the new entry inside
        
        // Otherwise we create it inside the parent
        const entry = path ? entries.find(e => 
            
                e.item.path === path
            ) : null;
        
        // If the entry is a folder, we create the new entry inside
        
        // Otherwise we create it inside the parent
        
        // @ts-ignore
        const parent = entry ? entry.item.type === 'folder' ? entry.item.path : getParentPath(entry.item.path) : null; 
        
        // @ts-ignore
        const name: string = e.item.path.split('/').pop(); 
        
        // @ts-ignore
        const item = updateEntry(e, { item: { path: getUniquePath(entries.map(e =>  
                    e.item.path
                ), parent ? `${parent}/${name}` : name, suffix)
             }
         });
        
        
        // @ts-ignore
        item.state = { isCreating: true  }; 
        return item;
    }

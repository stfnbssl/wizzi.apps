/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\__tests__\createNewEntry.test.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
import {FileSystemEntry} from '../../types';
import createNewEntry from '../createNewEntry';
it('creates new file', () => {

    const entries: FileSystemEntry[] = [
        {
            item: {
                path: 'test', 
                type: 'folder'
             }, 
            state: {
                
             }
         }, 
        {
            item: {
                path: 'test/App.js', 
                type: 'file', 
                content: ''
             }, 
            state: {
                
             }
         }, 
        {
            item: {
                path: 'components', 
                type: 'folder'
             }, 
            state: {
                
             }
         }
    ];
    expect(createNewEntry(entries, 'file')).toMatchSnapshot();
    expect(createNewEntry(entries, 'file', 'test')).toMatchSnapshot();
}
)
it('creates new folder', () => {

    const entries: FileSystemEntry[] = [
        {
            item: {
                path: 'test', 
                type: 'folder'
             }, 
            state: {
                
             }
         }, 
        {
            item: {
                path: 'test/App.js', 
                type: 'file', 
                content: ''
             }, 
            state: {
                
             }
         }, 
        {
            item: {
                path: 'components', 
                type: 'folder'
             }, 
            state: {
                
             }
         }
    ];
    expect(createNewEntry(entries, 'folder')).toMatchSnapshot();
    expect(createNewEntry(entries, 'folder', 'test')).toMatchSnapshot();
}
)

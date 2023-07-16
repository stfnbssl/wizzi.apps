/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\file\index.tsx.ittf
*/
import {TextFileEntry, AssetFileEntry, FolderEntry, FileSystemEntry, FileSystemEntryDiff} from './types';
import {isInsideFolder, getParentPath, changeParentPath, getUniquePath, isEntryPoint, isPackageJson, isESLintConfig, isImage, isScript, isJson, isJS, isTS, isTest} from './fileUtilities';
import getFileLanguage from './getFileLanguage';
import getFilesFromQuery from './getFilesFromQuery';
import {getRelativePath, getBasePath, getAbsolutePath} from './path';
import {dragEventIncludes} from './dragUtilities';
import * as fileConversions from './convertFileStructure';

export type {TextFileEntry, AssetFileEntry, FolderEntry, FileSystemEntry, FileSystemEntryDiff};

export {isInsideFolder, getParentPath, changeParentPath, getUniquePath, isEntryPoint, isPackageJson, isESLintConfig, isImage, isScript, isJson, isJS, isTS, isTest, getFileLanguage, getFilesFromQuery, getRelativePath, getBasePath, getAbsolutePath, dragEventIncludes, fileConversions};

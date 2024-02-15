/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\preferences\usePreferences.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
*/
import {useContext} from 'react';
import {PreferencesType, SetPreferencesType, PreferencesContextType, PreferencesContext} from './types';

export default function usePreferences():  [PreferencesType , SetPreferencesType] {
    
        const {
            preferences, 
            setPreferences
         } = useContext(PreferencesContext) as PreferencesContextType
        ;
        return [
                preferences, 
                setPreferences
            ];
    }

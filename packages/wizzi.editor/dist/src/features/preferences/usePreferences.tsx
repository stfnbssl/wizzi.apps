/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\preferences\usePreferences.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
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

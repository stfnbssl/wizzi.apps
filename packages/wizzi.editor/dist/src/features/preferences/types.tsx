/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\preferences\types.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
*/
import React from 'react';
export type ThemeName = 'light' | 'dark';

export type PanelType = 'errors' | 'logs';

export type PreferencesType = { 
    devicePreviewShown: boolean;
    fileTreeShown: boolean;
    panelsShown: boolean;
    panelType: PanelType;
    theme: ThemeName;
    verbose: boolean;
    autoGenSingleDoc: boolean;
    autoExecJob: boolean;
};

export type SetPreferencesType = (overrides: Partial<PreferencesType>) => void;

export type PreferencesContextType = { 
    setPreferences: SetPreferencesType;
    preferences: PreferencesType;
};
    // react-redux doesn't work with forwardRef: https://github.com/reduxjs/react-redux/issues/914
    // so this HOC always needs wrap a connect call, and a connect call cannot wrap this
    

export const PreferencesContext = React.createContext<PreferencesContextType | null>(null);

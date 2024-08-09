/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\preferences\types.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import React from 'react';
export type ThemeName = 'light' | 'dark';
;

export type PanelType = 'errors' | 'logs';
;

export type PreferencesType = { 
    fileTreeShown: boolean;
    panelsShown: boolean;
    panelType: PanelType;
    theme: ThemeName;
    verbose: boolean;
    autoGenSingleDoc: boolean;
    autoExecJob: boolean;
};
;

export type SetPreferencesType = (overrides: Partial<PreferencesType>) => void;
;

// react-redux doesn't work with forwardRef: https://github.com/reduxjs/react-redux/issues/914
// so this HOC always needs wrap a connect call, and a connect call cannot wrap this
export type PreferencesContextType = { 
    setPreferences: SetPreferencesType;
    preferences: PreferencesType;
};
;

export const PreferencesContext = React.createContext<PreferencesContextType | null>(null);

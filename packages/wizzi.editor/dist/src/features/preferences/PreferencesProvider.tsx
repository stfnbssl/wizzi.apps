/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\preferences\PreferencesProvider.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
import debounce from 'lodash/debounce';
import * as React from 'react';
import type {QueryStateParams} from '../packi';
import type {PanelType, ThemeName, PreferencesType, SetPreferencesType} from './types';
import {PreferencesContext} from './types';

type Props = { 
    cookies: { 
        get: (key: string) => string | undefined;
        set?: (key: string, value: string) => void;
    };
    children: React.ReactNode;
};

type State = { 
    preferences: PreferencesType;
};

const EDITOR_CONFIG_KEY = 'packi-editor-config';

const defaults: PreferencesType = {
    fileTreeShown: true, 
    panelsShown: false, 
    panelType: 'errors', 
    theme: 'light', 
    verbose: false, 
    autoGenSingleDoc: false, 
    autoExecJob: false
 };

class PreferencesProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const {
            cookies
         } = this.props;
        let overrides: Partial<PreferencesType> = {};
        try {
            
            // Restore editor preferences from saved data
            overrides = JSON.parse(cookies.get(EDITOR_CONFIG_KEY) ?? '') || {};
        } 
        catch (e) {
        } 
        this.state = {
            preferences: {
                ...defaults, 
                ...overrides
             }
         };
    }
    _persistPreferences = debounce(() => {
    
        const {
            cookies
         } = this.props;
        try {
            cookies.set?.(EDITOR_CONFIG_KEY, JSON.stringify(this.state.preferences));
        } 
        catch (e) {
        } 
    }
    , 1000);
    _setPreferences = (overrides: Partial<PreferencesType>) => 
        this.setState((state) => 
        
            ({
                preferences: {
                    ...state.preferences, 
                    ...overrides
                 }
             })
        , this._persistPreferences);
    render() {
        return  (
            <PreferencesContext.Provider
             value={{
                    setPreferences: this._setPreferences, 
                    preferences: this.state.preferences
                 }}>
                {this.props.children}
            </PreferencesContext.Provider>
            )
        ;
    }
}

export default PreferencesProvider;

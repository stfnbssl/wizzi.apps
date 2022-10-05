/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\ThemeProvider.tsx.ittf
*/
// taken from https://github.com/expo/snack/blob/main/website/src/client/components/ThemeProvider.tsx
// modified
import React, {FunctionComponent} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';

import {colors, shadows} from '@expo/styleguide';
import mapKeys from 'lodash/mapKeys';

type Colors = typeof lightColors;

type ColorName =  keyof typeof lightColors;

type Shadows = typeof lightShadows;

type ShadowName =  keyof typeof lightShadows;

const lightColors = {
    primary: colors.primary[500], 
    secondary: colors.black, 
    error: colors.semantic.error, 
    warning: colors.semantic.warning, 
    success: colors.semantic.success, 
    'primary-text': colors.black, 
    'secondary-text': colors.black, 
    'error-text': colors.black, 
    'warning-text': colors.black, 
    'success-text': colors.black, 
    text: colors.gray[900], 
    soft: colors.gray[500], 
    'soft-text': colors.black, 
    
    // semantic.background offered too little contrast with content
    
    // background: colors.semantic.background,
    background: '#F9F9F9', 
    content: colors.white, 
    hover: colors.gray[100], 
    disabled: colors.gray[300], 
    selected: colors.primary[500], 
    'selected-text': colors.black, 
    border: colors.semantic.border
 };


// Use custom colors for dark theme which are not

// so saturated and blue-ish

// const darkGray = colors.gray;
const lightShadows = {
    popover: shadows.popover, 
    small: shadows.small
 };


// Use custom colors for dark theme which are not

// so saturated and blue-ish

// const darkGray = colors.gray;
const darkGray = {
    100: '#F5F5F5', 
    200: '#EBEBEB', 
    250: '#DDDDDD', 
    300: '#CFCFCF', 
    400: '#B0B0B0', 
    500: '#8F8F8F', 
    600: '#5C5C5C', 
    700: '#3B3B3B', 
    800: '#2F2F2F', 
    900: '#212121'
 };

const darkColors: Colors = {
    primary: colors.primary[400], 
    secondary: colors.white, 
    error: colors.red[500], 
    warning: colors.yellow[500], 
    success: colors.green[600], 
    'primary-text': colors.white, 
    'secondary-text': colors.black, 
    'error-text': colors.white, 
    'warning-text': colors.white, 
    'success-text': colors.white, 
    text: darkGray[200], 
    soft: darkGray[500], 
    'soft-text': colors.black, 
    background: darkGray[900], 
    content: darkGray[800], 
    hover: darkGray[700], 
    disabled: darkGray[600], 
    selected: colors.white, 
    'selected-text': darkGray[800], 
    border: darkGray[700]
 };

const darkShadows: Shadows = {
    popover: shadows.popover, 
    small: 'none'
 };

export type ThemeName = 'light' | 'dark';

export function c(color: ColorName, theme?: ThemeName) {

    if (theme) {
        const colors = theme === 'dark' ? darkColors : lightColors;
        return colors[color];
    }
    else {
        return `var(--color-${color})`;
    }
}

export function s(shadow: ShadowName, theme?: ThemeName) {

    if (theme) {
        const shadows = theme === 'dark' ? darkShadows : lightShadows;
        return shadows[shadow];
    }
    else {
        return `var(--shadow-${shadow})`;
    }
}

export interface ThemeProviderProps {
    style?: any;
    className?: string;
    theme?: ThemeName;
    children: React.ReactNode;
}

const styles = StyleSheet.create({
    container: {
        height: '100%', 
        width: '100%'
     }, 
    light: {
        ...mapKeys(lightColors, (_, key) => `--color-${key}`
        ), 
        ...mapKeys(lightShadows, (_, key) => `--shadow-${key}`
        )
     }, 
    dark: {
        ...mapKeys(darkColors, (_, key) => `--color-${key}`
        ), 
        ...mapKeys(darkShadows, (_, key) => `--shadow-${key}`
        )
     }
 });
export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
    style, 
    className, 
    theme, 
    children
 }) => {

    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [prefs] = theme ? [
            {
                theme
             }
        ] : [
            {
                theme: 'light'
             }
        ];
    return  (
        <div
         className={classnames(css(style || styles.container, prefs.theme === 'dark' ? styles.dark : styles.light), className)}>
            {children}
        </div>
        )
    ;
}
;
export default ThemeProvider;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\shell\FooterShell.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {c} from '../ThemeProvider';

export interface FooterShellProps {
    type?: 'loading' | 'error' | null;
    children?: React.ReactNode;
}

interface StyledRootProps {
    type?: 'loading' | 'error' | null;
}
const StyledRoot = styled.div<StyledRootProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 .25em;
    border-top: ${props => "1px solid " + c('border')};
    background-color: ${props => props.type === 'error' ? c('error') : props.type === 'loading' ? c('primary') : c('content')};
    color: ${props => props.type === 'error' ? c('error-text') : props.type === 'loading' ? c('primary-text') : c('soft')};
    height: 30px;
    z-index: 10;
`
export const FooterShell: FunctionComponent<FooterShellProps> = ({
    type, 
    children
 }) => 
     (
    <StyledRoot type={type}>
        {children}</StyledRoot>
    )

;
export default FooterShell;
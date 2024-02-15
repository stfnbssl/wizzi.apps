/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\shell\PreviewShell.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {c} from '../ThemeProvider';

export interface PreviewShellProps {
    children?: React.ReactNode;
}

const StyledRoot = styled.div`
    height: 100%;
    display: none;
    min-width: 334;
    background-color: ${props => c('content')};
    border-left: ${props => "1px solid " + c('border')};
    @media (min-width: 780px) {
        display: 'flex';
    }
`
export const PreviewShell: FunctionComponent<PreviewShellProps> = ({
    children
 }) => 

     (
    <StyledRoot
    >
        {children}
    </StyledRoot>
    )

;
export default PreviewShell;

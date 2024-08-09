/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\shell\ToolbarShell.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {c} from '../ThemeProvider';

export interface ToolbarShellProps {
    children: React.ReactNode;
}

const StyledRoot = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    height: 50px;
    margin-bottom: 20px;
    background-color: ${props => c('content')};
`
export const ToolbarShell: FunctionComponent<ToolbarShellProps> = ({
    children
 }) => 
     (
    <StyledRoot>
        {children}</StyledRoot>
    )

;
export default ToolbarShell;
/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\shell\ContentShell.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {c} from '../ThemeProvider';

export interface ContentShellProps {
    children: React.ReactNode;
}

const StyledRoot = styled.div`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: ${props => c('background')};
    color: ${props => c('text')};
`
export const ContentShell: FunctionComponent<ContentShellProps> = ({
    children
 }) => 

     (
    <StyledRoot
    >
        {children}
    </StyledRoot>
    )

;
export default ContentShell;

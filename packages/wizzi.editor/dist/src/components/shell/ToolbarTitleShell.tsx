/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\shell\ToolbarTitleShell.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';


export interface ToolbarTitleShellProps {
    children: React.ReactNode;
}

const StyledRoot = styled.div`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    minWidth: 0;
    -ms-flex: 1;
    flex: 1;
`
export const ToolbarTitleShell: FunctionComponent<ToolbarTitleShellProps> = ({
    children
 }) => 
     (
    <StyledRoot>
        {children}</StyledRoot>
    )

;
export default ToolbarTitleShell;
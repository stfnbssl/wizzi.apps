/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\HR.tsx.ittf
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {c} from '../../ThemeProvider';

export interface HRProps {
}

interface RootStyleProps {
}
const StyledRoot = styled.hr<RootStyleProps>`
    background: transparent;
    border: 0;
    border-bottom: ${props => '1px solid ' + c('border')};
    height: 0;
    margin: 15px 0;
    overflow: hidden;
`
export const HR: FunctionComponent<HRProps> = () => {

    return  (
        <StyledRoot
         />
        )
    ;
}
;
export default HR;

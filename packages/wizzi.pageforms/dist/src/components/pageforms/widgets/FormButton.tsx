/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\FormButton.tsx.ittf
    utc time: Mon, 12 Feb 2024 08:27:22 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {c} from '../../ThemeProvider';

export interface FormButtonProps {
    id: string;
    label: string;
    type: string;
    variant?: string;
    onClick?: any;
}

interface RootStyleProps {
    bgColor: string;
}
const StyledRoot = styled.button<RootStyleProps>((props: RootStyleProps) => {

    return {
            appearance: "none", 
            border: "1px solid", 
            borderRadius: "6px", 
            cursor: "pointer", 
            display: "inline-block", 
            fontSize: "14px", 
            fontWeight: "500", 
            lineHeight: "20px", 
            padding: "5px 16px", 
            position: "relative", 
            userSelect: "none", 
            verticalAlign: "middle", 
            whiteSpace: "nowrap", 
            backgroundColor: props.bgColor || 'aliceblue'
         };
}
);
export const FormButton: FunctionComponent<FormButtonProps> = ({
    id, 
    label, 
    type, 
    variant, 
    onClick
 }) => {

    return  (
        <StyledRoot 
            id={id}
            type={type}
            variant={variant}
            onClick={onClick}
        >
            {label}
        </StyledRoot>
        )
    ;
}
;
export default FormButton;

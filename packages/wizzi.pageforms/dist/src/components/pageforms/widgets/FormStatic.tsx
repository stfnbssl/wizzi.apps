/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\FormStatic.tsx.ittf
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {c, s} from '../../ThemeProvider';

export interface FormStaticProps {
    id: string;
    name: string;
    label: string;
    value: string;
}

interface RootStyleProps {
}
const StyledFormGroup = styled.dl<RootStyleProps>`
    
`
const StyledInputLabel = styled.dt<RootStyleProps>`
    font-weight: 600;
    
`
const StyledLabelSpan = styled.span<RootStyleProps>`
    color: ${props => c('secondary-text')};
    font-size: 12px;
    margin: 4px 4px 2px;
    min-height: 17px;
`
const StyledInputBox = styled.dd<RootStyleProps>`
    margin: 2px 0;
    
`
const StyledInput = styled.input<RootStyleProps>`
    color: ${props => c('primary-text')};
    border: none;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    padding: 5px 12px;
    vertical-align: middle;
`
export const FormStatic: FunctionComponent<FormStaticProps> = ({
    id, 
    name, 
    label, 
    value
 }) => {

    return  (
        <StyledFormGroup
        >
            <StyledInputLabel
             autocomplete="off">
                {label}
            </StyledInputLabel>
            <StyledInputBox
            >
                <StyledInput 
                    autocomplete="off"
                    type="text"
                    name={name}
                    id={name}
                    value={value}
                    enabled={false}
                    readOnly={true}
                 />
            </StyledInputBox>
        </StyledFormGroup>
        )
    ;
}
;
export default FormStatic;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\FormText.tsx.ittf
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {c, s} from '../../ThemeProvider';

export interface FormTextProps {
    id: string;
    name: string;
    label: string;
    required?: boolean;
    value: string;
    rows?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RootStyleProps {
}
const StyledFormGroup = styled.dl<RootStyleProps>`
    width: 80%;
    
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
    width: 100%;
    
`
const StyledInput = styled.textarea<RootStyleProps>`
    background-color: ${props => c('background')};
    background-position: right 8px center;
    background-repeat: no-repeat;
    border: ${props => '1px solid ' + c('border')};
    -webkit-border-radius: 6px;
    -khtml-border-radius: 6px;
    -moz-border-radius: 6px;
    -o-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: ${props => s('small')};
    -moz-box-shadow: ${props => s('small')};
    -o-box-shadow: ${props => s('small')};
    box-shadow: ${props => s('small')};
    color: ${props => c('primary-text')};
    font-size: 14px;
    line-height: 20px;
    outline: none;
    padding: 5px 12px;
    vertical-align: middle;
    width: 100%;
`
export const FormText: FunctionComponent<FormTextProps> = ({
    id, 
    name, 
    label, 
    required, 
    value, 
    rows, 
    onChange
 }) => {

    return  (
        <StyledFormGroup
        >
            <StyledInputLabel
             autocomplete="off" htmlFor={name}>
                {label}
                <StyledLabelSpan
                >
                    { required ? '(*)' : '(optional)' }
                </StyledLabelSpan>
            </StyledInputLabel>
            <StyledInputBox
            >
                <StyledInput 
                    autocomplete="off"
                    type="text"
                    name={name}
                    id={name}
                    value={value}
                    rows={rows || 20}
                    onChange={onChange}
                 />
            </StyledInputBox>
        </StyledFormGroup>
        )
    ;
}
;
export default FormText;

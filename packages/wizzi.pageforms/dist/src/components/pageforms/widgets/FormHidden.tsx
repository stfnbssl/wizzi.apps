/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\FormHidden.tsx.ittf
*/
import React, {FunctionComponent} from 'react';


export interface FormHiddenProps {
    id: string;
    name: string;
    value: string;
}

export const FormHidden: FunctionComponent<FormHiddenProps> = ({
    id, 
    name, 
    value
 }) => {

    return  (
        <input 
            type="hidden"
            id={name}
            name={name}
            value={value}
         />
        )
    ;
}
;
export default FormHidden;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\FormHidden.tsx.ittf
    utc time: Wed, 13 Jul 2022 18:16:24 GMT
*/
import React, {FunctionComponent} from 'react';


export interface FormHiddenProps {
    name: string;
    value: string;
}

export const FormHidden: FunctionComponent<FormHiddenProps> = ({
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

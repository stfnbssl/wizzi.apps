/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\form\withStatus.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
*/
import * as React from 'react';
import {FormValidationContext} from './Form';
import {$Subtract} from '../../types';

// The property ( 'disabled' ) is injected in the component
// enhanced by withStatus ( should be 'withEnabled' ).
// The 'disabled' status is inferred from the FormValidationContext.Consumer.
type InjectedProps = { 
    disabled: boolean | undefined;
};

export default function withStatus<P extends InjectedProps>(Comp: React.ComponentType<P>):  React.ComponentType<$Subtract<P, InjectedProps>> {
    
        function withStatusFn(props: any) {
        
            return  (
                <FormValidationContext.Consumer
                >
                    {
                        (value: { 
                            valid: boolean;
                        } | undefined = {
                            valid: true
                         }) => 
                        
                             (
                            <Comp
                             disabled={!value.valid} {...props} />
                            )
                        
                        
                    }
                </FormValidationContext.Consumer>
                )
            ;
        }
        withStatusFn.displayName = `withValidation(${Comp.displayName || Comp.name})`;
        return withStatusFn;
    }

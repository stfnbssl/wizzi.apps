/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\form\Form.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
*/
import * as React from 'react';
import {Register, Unregister, Update, FormValidation} from './types';

export type FormProps = { 
    onSubmit: () => void;
    children: React.ReactNode;
};
type State = { 
    isValid: boolean;
};

export const FormValidationContext = React.createContext<FormValidation | undefined>(undefined);

export default class Form extends React.Component<FormProps, State> {
        state = {
            isValid: false
        }
        ;
        componentDidMount() {
            this._update();
        }
        _key = 0;
        _inputs: Array<{ 
            key: number;
            validate: () => Error | null;
            focus: () => void;
        }> = [];
        _register: Register = ({
            validate, 
            focus
         }) => {
        
            const key = this._key++;
            this._inputs.push({
                key, 
                validate, 
                focus
             })
            return key;
        }
        ;
        _unregister: Unregister = (key: number) => 
        
            this._inputs = this._inputs.filter(it => 
            
                it.key !== key
            )
        
        ;
        _update: Update = () => 
        
            this.setState({
                isValid: this._inputs.every(it => 
                
                    !it.validate()
                )
             })
        ;
        _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
            e.preventDefault();
            for (const input of this._inputs) {
                if (input.validate()) {
                    input.focus();
                    return ;
                }
            }
            this.props.onSubmit();
        }
        ;
        render() {
            return  (
                <FormValidationContext.Provider
                 value={{
                        register: this._register, 
                        unregister: this._unregister, 
                        update: this._update, 
                        valid: this.state.isValid
                     }}>
                    <form
                     onSubmit={this._handleSubmit}>
                        {this.props.children}
                    </form>
                </FormValidationContext.Provider>
                )
            ;
        }
    }

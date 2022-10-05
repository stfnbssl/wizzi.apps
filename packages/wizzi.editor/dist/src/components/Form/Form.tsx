/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\components\Form\Form.tsx.ittf
    utc time: Mon, 12 Jul 2021 16:27:29 GMT
*/
import * as React from 'react';
type Props = { 
    onSubmit: () => void;
    children: React.ReactNode;
};
type State = { 
    isValid: boolean;
};
type RegisterOptions = { 
    validate: () => Error | null;
    focus: () => void;
};
type Register = (options: RegisterOptions) => number;
type Unregister = (key: number) => void;
type Update = () => void;
export type FormValidation = { 
    register: Register;
    unregister: Unregister;
    update: Update;
    valid: boolean;
};
export const FormValidationContext = React.createContext<FormValidation | undefined>(undefined);
export default class Form extends React.Component<Props, State> {
        state = {
            isValid: false
        }
        ;
        componentDidMount() {
            this._update();
        }
        _key = 0;
        _inputs: { 
            key: number;
            validate: () => Error | null;
            focus: () => void;
        }[] = [];
        _register = ({
            validate, 
            focus
         }: RegisterOptions) => {
            const key = this._key++;
            this._inputs.push({
                key, 
                validate, 
                focus
             })
            return key;
        };
        _unregister = (key: number) => 
            this._inputs = this._inputs.filter(it => 
            
                it.key !== key
            )
        ;
        _update = () => 
            this.setState({
                isValid: this._inputs.every(it => 
                
                    !it.validate()
                )
             });
        _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            for (const input of this._inputs) {
                if (input.validate()) {
                    input.focus();
                    return ;
                }
            }
            this.props.onSubmit();
        };
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

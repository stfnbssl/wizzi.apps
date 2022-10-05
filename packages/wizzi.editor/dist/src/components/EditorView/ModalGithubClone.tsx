/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\EditorView\ModalGithubClone.tsx.ittf
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {Form, withStatus, withValidation} from '../../features/form';
import {c} from '../ThemeProvider';
import {Button} from '../widgets/Button';
import LargeInput from '../widgets/LargeInput';
import LargeTextArea from '../widgets/LargeTextArea';
import {ModalDialog} from '../widgets/ModalDialog';
type Props = { 
    visible: boolean;
    title: string;
    action: string;
    onSubmit: (details: { 
        owner: string;
        name: string;
        branch: string;
    }) => void;
    onDismiss: () => void;
    packiProduction: PackiProduction;
    owner: string;
    name: string;
    branch: string;
    isWorking?: boolean;
};
type State = { 
    owner: string;
    name: string;
    branch: string;
    visible: boolean;
};

// @ts-ignore
const FormButton = withStatus(Button); 

// @ts-ignore
const ValidatedInput = withValidation(LargeInput); 
export default class ModalGithubClone extends React.Component<Props, State> {
        static getDerivedStateFromProps(props: Props, state: State) {
            if (state.visible !== props.visible) {
                if (props.visible) {
                    return {
                            owner: props.owner || '', 
                            name: props.name ?? '', 
                            branch: props.branch ?? '', 
                            visible: props.visible
                         };
                }
                else {
                    return {
                            visible: props.visible
                         };
                }
            }
            return null;
        }
        state = {
            owner: this.props.owner || '', 
            name: this.props.name ?? '', 
            branch: this.props.branch ?? '', 
            visible: this.props.visible
        }
        ;
        _handleSubmit = () => 
            this.props.onSubmit({
                owner: this.state.name, 
                name: this.state.name, 
                branch: this.state.branch
             });
        _validateName = (name: string) => 
            name ? /^[a-z_\-\.\/\d\s]+$/i.test(name) ? null : new Error('Name can only contain letters, numbers, space, hyphen (-) and underscore (_).') : new Error('Name cannot be empty.');
        handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
            this.setState({
                [e.target.name]: e.target.value
             });
        
        // log 'ModalGithubClone.state', this.state
        render() {
            const {
                visible, 
                title, 
                onDismiss, 
                isWorking, 
                action
             } = this.props;
            return  (
                <ModalDialog
                 visible={visible} title={title} onDismiss={onDismiss}>
                    <Form
                     onSubmit={this._handleSubmit}>
                        <h4
                         className={css(styles.subtitle)}>
                            Owner
                        </h4>
                        <ValidatedInput 
                            name='owner'
                            
                            // @ts-ignore
                            autoFocus
                            value={this.state.owner}
                            onChange={this.handleChange}
                            placeholder="Repo owner"
                            validate={this._validateName}
                         />
                        <ValidatedInput 
                            name='name'
                            
                            // @ts-ignore
                            autoFocus
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="Repo name"
                            validate={this._validateName}
                         />
                        <ValidatedInput 
                            name='branch'
                            
                            // @ts-ignore
                            autoFocus
                            value={this.state.branch}
                            onChange={this.handleChange}
                            placeholder="Repo branch"
                            validate={this._validateName}
                         />
                        <div
                         className={css(styles.buttons)}>
                            <FormButton 
                                
                                // @ts-ignore
                                type="submit"
                                large
                                variant="primary"
                                loading={isWorking}
                            >
                                {action}
                            </FormButton>
                        </div>
                    </Form>
                </ModalDialog>
                )
            ;
        }
    }
const styles = StyleSheet.create({ subtitle: { fontSize: 16,  fontWeight: 500,  padding: 0,  lineHeight: '22px',  margin: '16px 0 6px 0'  },  buttons: { margin: '20px 0 0 0'  }  }); 

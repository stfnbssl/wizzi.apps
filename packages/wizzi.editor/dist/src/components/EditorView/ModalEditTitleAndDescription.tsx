/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\components\EditorView\ModalEditTitleAndDescription.tsx.ittf
    utc time: Mon, 12 Jul 2021 16:01:41 GMT
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
        name: string;
        description: string;
        mainIttf: string;
        wizziSchema: string;
    }) => void;
    onDismiss: () => void;
    description: string | undefined;
    name: string;
    mainIttf?: string;
    wizziSchema?: string;
    isWorking?: boolean;
};
type State = { 
    name: string;
    description: string;
    mainIttf: string;
    wizziSchema: string;
    visible: boolean;
};

// @ts-ignore
const FormButton = withStatus(Button); 

// @ts-ignore
const ValidatedInput = withValidation(LargeInput); 
export default class ModalEditTitleAndDescription extends React.Component<Props, State> {
        static getDerivedStateFromProps(props: Props, state: State) {
            if (state.visible !== props.visible) {
                if (props.visible) {
                    return {
                            name: props.name || '', 
                            description: props.description ?? '', 
                            mainIttf: props.mainIttf ?? '', 
                            wizziSchema: props.wizziSchema ?? '', 
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
            name: this.props.name || '', 
            description: this.props.description ?? '', 
            mainIttf: this.props.mainIttf ?? '', 
            wizziSchema: this.props.wizziSchema ?? '', 
            visible: this.props.visible
        }
        ;
        _handleSubmit = () => 
            this.props.onSubmit({
                name: this.state.name, 
                description: this.state.description, 
                mainIttf: this.state.mainIttf, 
                wizziSchema: this.state.wizziSchema
             });
        _validateName = (name: string) => 
            name ? /^[a-z_\-\d\s]+$/i.test(name) ? null : new Error('Name can only contain letters, numbers, space, hyphen (-) and underscore (_).') : new Error('Name cannot be empty.');
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
                            Project name
                        </h4>
                        <ValidatedInput 
                            
                            // @ts-ignore
                            autoFocus
                            value={this.state.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  
                                    this.setState({
                                        name: e.target.value
                                     })
                            }
                            placeholder="Unnamed Packi"
                            validate={this._validateName}
                         />
                        <h4
                         className={css(styles.subtitle)}>
                            Description
                        </h4>
                        <LargeTextArea
                         value={this.state.description} onChange={e => 
                            
                                this.setState({
                                    description: e.target.value
                                 })
                        } minRows={4} />
                        <h4
                         className={css(styles.subtitle)}>
                            Main ittf
                        </h4>
                        <LargeInput
                         value={this.state.mainIttf} onChange={e => 
                            
                                this.setState({
                                    mainIttf: e.target.value
                                 })
                        } />
                        <h4
                         className={css(styles.subtitle)}>
                            Wizzi schema
                        </h4>
                        <LargeInput
                         value={this.state.wizziSchema} onChange={e => 
                            
                                this.setState({
                                    mainIttf: e.target.value
                                 })
                        } />
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
const styles = StyleSheet.create({ subtitle: { fontSize: 16,  fontWeight: 500,  padding: 0,  lineHeight: '22px',  margin: '16px 0 6px 0'  },  buttons: { margin: '20px 0 0 0'  },  caption: { marginTop: 24,  fontSize: '16px',  lineHeight: '22px',  textAlign: 'center'  },  link: { cursor: 'pointer',  color: c('primary'),  textDecoration: 'underline'  }  }); 

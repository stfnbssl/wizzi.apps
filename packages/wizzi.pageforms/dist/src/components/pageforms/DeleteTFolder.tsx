/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\DeleteTFolder.tsx.ittf
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import {ContextRef, TFolderRef} from '../types';
import FormContainer from './widgets/FormContainer';
import FormTitle from './widgets/FormTitle';
import FormGroup from './widgets/FormGroup';
import FormText from './widgets/FormText';
import FormSelect from './widgets/FormSelect';
import FormCheckBox from './widgets/FormCheckBox';
import FormRadioBox from './widgets/FormRadioBox';
import FormRow from './widgets/FormRow';
import FormFile from './widgets/FormFile';
import FormHidden from './widgets/FormHidden';
import FormStatic from './widgets/FormStatic';
import FormButton from './widgets/FormButton';
import HR from './widgets/HR';
import FlexRow from './widgets/styles/FlexRow';
import Para from './widgets/styles/Para';
import Text from './widgets/styles/Text';
import Link from './widgets/styles/Link';
import Box from './widgets/styles/Box';

export interface DeleteTFolderProductionProps {
    data: any;
}

type DeleteTFolderProductionState = { 
    tf_id: string;
    tf_owner: string;
    tf_name: string;
    tf_description: string;
};


export class DeleteTFolderProduction extends Component<DeleteTFolderProductionProps, DeleteTFolderProductionState> {
    constructor(props: DeleteTFolderProductionProps) {
        super(props);
    }
    state: DeleteTFolderProductionState = {
        tf_id: "", 
        tf_owner: "", 
        tf_name: "", 
        tf_description: ""
    }
    ;
    
    formRef = React.createRef();
    
    componentDidMount() {
        console.log('DeleteTFolderProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description
         } = this.props.data;
        this.setState({
            tf_id: _id, 
            tf_owner: owner, 
            tf_name: name, 
            tf_description: description
         })
    }
    
    handleSubmitDelete = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitDelete', __filename);
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/productions/tfolders";
    };
    
    render() {
        console.log('DeleteTFolderProduction.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Delete tfolder' />
                <HR
                 />
                <form 
                    action="/tfolder/delete"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormStatic 
                        label='TFolder id'
                        name='tf_id'
                        id='tf_id'
                        value={this.state.tf_id}
                     />
                    <FormStatic 
                        label='TFolder owner'
                        name='tf_owner'
                        id='tf_owner'
                        value={this.state.tf_owner}
                     />
                    <FormStatic 
                        label='TFolder name'
                        name='tf_name'
                        id='tf_name'
                        value={this.state.tf_name}
                     />
                    <HR
                     />
                    <FormStatic 
                        label='Description'
                        name='tf_description'
                        id='tf_description'
                        value={this.state.tf_description}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Delete tfolder production'
                                id='btn_delete_tf'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitDelete(ev)
                                }
                             />
                            <FormButton 
                                label='Cancel'
                                id='btn_cancel_tf'
                                type='button'
                                onClick={this.handleCancel}
                             />
                        </FlexRow>
                    </React.Fragment>
                </form>
            </FormContainer>
            )
        ;
    }
}
export default DeleteTFolderProduction;

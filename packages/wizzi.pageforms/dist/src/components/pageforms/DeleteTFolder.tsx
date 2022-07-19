/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\DeleteTFolder.tsx.ittf
    utc time: Tue, 19 Jul 2022 18:40:05 GMT
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
    tf_userid: string;
    tf_name: string;
    tf_description: string;
};


export class DeleteTFolderProduction extends Component<DeleteTFolderProductionProps, DeleteTFolderProductionState> {
    constructor(props: DeleteTFolderProductionProps) {
        super(props);
    }
    state: DeleteTFolderProductionState = {
        tf_id: "", 
        tf_userid: "", 
        tf_name: "", 
        tf_description: ""
    }
    ;
    
    componentDidMount() {
        console.log('DeleteTFolderProduction.componentDidMount.props', this.props);
        const {
            _id, 
            userid, 
            name, 
            description
         } = this.props.data;
        this.setState({
            tf_id: _id, 
            tf_userid: userid, 
            tf_name: name, 
            tf_description: description
         })
    }
    
    handleSubmitDelete = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        this.formRef.dispatchEvent(new Event('submit'));
    };
    
    render() {
        console.log('DeleteTFolderProduction.render', 'state', this.state);
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
                    ref={ref => 
                        
                            this.formRef = ref
                    }
                >
                    <FormStatic 
                        label='TFolder id'
                        name='tf_id'
                        id='tf_id'
                        value={this.state.tf_id}
                     />
                    <FormStatic 
                        label='TFolder owner'
                        name='tf_userid'
                        id='tf_userid'
                        value={this.state.tf_userid}
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
                    <HR
                     />
                    <FormButton 
                        label='Delete tfolder'
                        id='btn_delete_tf'
                        variant='submit'
                        type="submit"
                        onClick={this.handleSubmitDelete}
                     />
                </form>
            </FormContainer>
            )
        ;
    }
}
export default DeleteTFolderProduction;

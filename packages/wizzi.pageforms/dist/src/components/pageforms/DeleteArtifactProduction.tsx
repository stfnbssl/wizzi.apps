/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\DeleteArtifactProduction.tsx.ittf
    utc time: Mon, 25 Jul 2022 18:06:15 GMT
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

export interface DeleteArtifactProductionProps {
    data: any;
}

type DeleteArtifactProductionState = { 
    ap_owner: string;
    ap_name: string;
    ap_description: string;
};


export class DeleteArtifactProduction extends Component<DeleteArtifactProductionProps, DeleteArtifactProductionState> {
    constructor(props: DeleteArtifactProductionProps) {
        super(props);
    }
    state: DeleteArtifactProductionState = {
        ap_owner: "", 
        ap_name: "", 
        ap_description: ""
    }
    ;
    
    componentDidMount() {
        console.log('DeleteArtifactProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description
         } = this.props.data;
        this.setState({
            ap_id: _id, 
            ap_owner: owner, 
            ap_name: name, 
            ap_description: description
         })
    }
    
    handleSubmitDelete = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        this.formRef.dispatchEvent(new Event('submit'));
    };
    
    render() {
        console.log('DeleteArtifactProduction.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Delete artifact production' />
                <HR
                 />
                <form 
                    action="/artifact/delete"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={ref => 
                        
                            this.formRef = ref
                    }
                >
                    <FormStatic 
                        label='Artifact id'
                        name='ap_id'
                        id='ap_id'
                        value={this.state.ap_id}
                     />
                    <FormStatic 
                        label='Artifact owner'
                        name='ap_owner'
                        id='ap_owner'
                        value={this.state.ap_owner}
                     />
                    <FormStatic 
                        label='Artifact name'
                        name='ap_name'
                        id='ap_name'
                        value={this.state.ap_name}
                     />
                    <HR
                     />
                    <FormStatic 
                        label='Description'
                        name='ap_description'
                        id='ap_description'
                        value={this.state.ap_description}
                     />
                    <HR
                     />
                    <FormButton 
                        label='Delete artifact production'
                        id='btn_delete_ap'
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
export default DeleteArtifactProduction;

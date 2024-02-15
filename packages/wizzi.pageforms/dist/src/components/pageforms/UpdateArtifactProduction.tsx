/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdateArtifactProduction.tsx.ittf
    utc time: Mon, 12 Feb 2024 08:27:22 GMT
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import debounce from 'lodash/debounce';
import nullthrows from 'nullthrows';
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

export interface UpdateArtifactProductionProps {
    data: any;
}

type UpdateArtifactProductionState = { 
    ap_id: string;
    ap_owner: string;
    ap_name_old: string;
    ap_name_new: string;
    ap_description: string;
    ap_add_context: boolean;
    ap_mainIttf: string;
    ap_wizziSchema: string;
    ap_contexts: any[];
    ap_add_tfolder: boolean;
    ap_dependencies: any[];
    ap_name_new_available: boolean;
    ap_name_new_checked: boolean;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class UpdateArtifactProduction extends Component<UpdateArtifactProductionProps, UpdateArtifactProductionState> {
    constructor(props: UpdateArtifactProductionProps) {
        super(props);
    }
    state: UpdateArtifactProductionState = {
        ap_id: "", 
        ap_owner: "", 
        ap_name_old: "", 
        ap_name_new: "", 
        ap_description: "", 
        ap_add_context: false, 
        ap_mainIttf: "", 
        ap_wizziSchema: "", 
        ap_contexts: [
            
        ], 
        ap_add_tfolder: false, 
        ap_dependencies: [
            
        ], 
        ap_name_new_available: false, 
        ap_name_new_checked: false
    }
    ;
    async _checkAvalibleArtifactName() {
        const {
            owner
         } = this.props.data;
        const ap_name_new_checked = this.state.ap_name_new;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/artifact/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(ap_name_new_checked)}`;
        console.log('CreateArtifact._checkAvalibleArtifactName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalible_artifact_Name error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreateArtifact._checkAvalibleArtifactName.result', result, __filename);
        this.setState({
            ap_name_new_available: result.isValid, 
            ap_name_new_checked: ap_name_new_checked
         })
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    handleArtifactNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleArtifactNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            ap_name_new: ev.target.value
         }, () => {
        
            if (ev.target.value !== this.state.ap_name_old) {
                this._checkAvalibleArtifactName();
            }
        }
        )
    };
    
    handleSubmitUpdate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitUpdate', __filename);
        console.log('this.state.ap_name_new_available', this.state.ap_name_new_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.ap_name_new_available == true)) {
            console.log('handleSubmitUpdate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/artifacts";
    };
    componentDidMount() {
        console.log('UpdateArtifactProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description, 
            mainIttf, 
            wizziSchema, 
            contexts, 
            dependencies
         } = this.props.data;
        const ap_contexts = contexts || [];
        const ap_dependencies = dependencies || [];
        this.setState({
            ap_id: _id, 
            ap_owner: owner, 
            ap_name_old: name, 
            ap_name_new: name, 
            ap_name_new_available: true, 
            ap_description: description, 
            ap_mainIttf: mainIttf, 
            ap_wizziSchema: wizziSchema, 
            ap_add_context: ap_contexts.length > 0, 
            ap_contexts, 
            ap_add_tfolder: ap_dependencies.length > 0, 
            ap_dependencies
         })
    }
    
    render() {
        console.log('UpdatePacki.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Update artifact production' subtitle='An artifact production contains the ittf documents for a software artifact.' />
                <HR
                 />
                <form 
                    action="/artifact/update"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormHidden
                     name='ap_id' id='ap_id' value={this.state.ap_id} />
                    <FormHidden
                     name='ap_owner' id='ap_owner' value={this.state.ap_owner} />
                    <FormHidden
                     name='ap_name_old' id='ap_name_old' value={this.state.ap_name_old} />
                    <FormGroup 
                        label='Artifact name'
                        name='ap_name_new'
                        id='ap_name_new'
                        required={true}
                        value={this.state.ap_name_new}
                        onChange={this.handleArtifactNameChange}
                     />
                    {
                        this.state.ap_name_new.length > 0 && this.state.ap_name_old !== this.state.ap_name_new && this.state.ap_name_new_available
                         &&  (
                            <Para
                            >
                                {'Artifact name ' + this.state.ap_name_new_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.ap_name_new.length > 0 && this.state.ap_name_old !== this.state.ap_name_new && !this.state.ap_name_new_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Artifact name ' + this.state.ap_name_new_checked + ' is not available'}
                            </Para>
                            )
                        
                    }
                    <HR
                     />
                    <FormGroup 
                        label='Description'
                        name='ap_description'
                        id='ap_description'
                        required={true}
                        value={this.state.ap_description}
                        onChange={this.handleInputChange}
                     />
                    <HR
                     />
                    <FormGroup 
                        label='Main ittf'
                        name='ap_mainIttf'
                        id='ap_mainIttf'
                        required={true}
                        value={this.state.ap_mainIttf}
                        onChange={this.handleInputChange}
                     />
                    <FormGroup 
                        label='Wizzi schema'
                        name='ap_wizziSchema'
                        id='ap_wizziSchema'
                        required={true}
                        value={this.state.ap_wizziSchema}
                        onChange={this.handleInputChange}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Update artifact production'
                                id='btn_update_ap'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitUpdate(ev)
                                }
                             />
                            <FormButton 
                                label='Cancel'
                                id='btn_cancel_ap'
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
export default UpdateArtifactProduction;

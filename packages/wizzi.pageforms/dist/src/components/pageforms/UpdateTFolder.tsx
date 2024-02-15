/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdateTFolder.tsx.ittf
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

export interface UpdateTFolderProductionProps {
    data: any;
}

type UpdateTFolderProductionState = { 
    tf_id: string;
    tf_owner: string;
    tf_name_old: string;
    tf_name_new: string;
    tf_description: string;
    tf_add_context: boolean;
    tf_contexts: any[];
    tf_add_tfolder: boolean;
    tf_dependencies: any[];
    tf_name_new_available: boolean;
    tf_name_new_checked: boolean;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class UpdateTFolderProduction extends Component<UpdateTFolderProductionProps, UpdateTFolderProductionState> {
    constructor(props: UpdateTFolderProductionProps) {
        super(props);
    }
    state: UpdateTFolderProductionState = {
        tf_id: "", 
        tf_owner: "", 
        tf_name_old: "", 
        tf_name_new: "", 
        tf_description: "", 
        tf_add_context: false, 
        tf_contexts: [
            
        ], 
        tf_add_tfolder: false, 
        tf_dependencies: [
            
        ], 
        tf_name_new_available: false, 
        tf_name_new_checked: false
    }
    ;
    async _checkAvalibleTFolderName() {
        const {
            owner
         } = this.props.data;
        const tf_name_new_checked = this.state.tf_name_new;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/tFolder/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(tf_name_new_checked)}`;
        console.log('CreateTFolder._checkAvalibleTFolderName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalible_tFolder_Name error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreateTFolder._checkAvalibleTFolderName.result', result, __filename);
        this.setState({
            tf_name_new_available: result.isValid, 
            tf_name_new_checked: tf_name_new_checked
         })
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    handleTFolderNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleTFolderNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            tf_name_new: ev.target.value
         }, () => {
        
            if (ev.target.value !== this.state.tf_name_old) {
                this._checkAvalibleTFolderName();
            }
        }
        )
    };
    
    handleSubmitUpdate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitUpdate', __filename);
        console.log('this.state.tf_name_new_available', this.state.tf_name_new_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.tf_name_new_available == true)) {
            console.log('handleSubmitUpdate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/tfolders";
    };
    componentDidMount() {
        console.log('UpdateTFolderProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description, 
            contexts, 
            dependencies
         } = this.props.data;
        const tf_contexts = contexts || [];
        const tf_dependencies = dependencies || [];
        this.setState({
            tf_id: _id, 
            tf_owner: owner, 
            tf_name_old: name, 
            tf_name_new: name, 
            tf_name_new_available: true, 
            tf_description: description, 
            tf_add_context: tf_contexts.length > 0, 
            tf_contexts, 
            tf_add_tfolder: tf_dependencies.length > 0, 
            tf_dependencies
         })
    }
    
    render() {
        console.log('UpdatePacki.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Update tFolder' subtitle='A tFolder contains the ittf documents for a software tFolder.' />
                <HR
                 />
                <form 
                    action="/tfolder/update"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormHidden
                     name='tf_id' id='tf_id' value={this.state.tf_id} />
                    <FormHidden
                     name='tf_owner' id='tf_owner' value={this.state.tf_owner} />
                    <FormHidden
                     name='tf_name_old' id='tf_name_old' value={this.state.tf_name_old} />
                    <FormGroup 
                        label='TFolder name'
                        name='tf_name_new'
                        id='tf_name_new'
                        required={true}
                        value={this.state.tf_name_new}
                        onChange={this.handleTFolderNameChange}
                     />
                    {
                        this.state.tf_name_new.length > 0 && this.state.tf_name_old !== this.state.tf_name_new && this.state.tf_name_new_available
                         &&  (
                            <Para
                            >
                                {'TFolder name ' + this.state.tf_name_new_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.tf_name_new.length > 0 && this.state.tf_name_old !== this.state.tf_name_new && !this.state.tf_name_new_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'TFolder name ' + this.state.tf_name_new_checked + ' is not available'}
                            </Para>
                            )
                        
                    }
                    <HR
                     />
                    <FormGroup 
                        label='Description'
                        name='tf_description'
                        id='tf_description'
                        required={true}
                        value={this.state.tf_description}
                        onChange={this.handleInputChange}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Update tfolder production'
                                id='btn_update_tf'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitUpdate(ev)
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
export default UpdateTFolderProduction;

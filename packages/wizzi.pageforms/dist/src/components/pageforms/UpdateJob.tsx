/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdateJob.tsx.ittf
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

export interface UpdateJobProductionProps {
    data: any;
}

type UpdateJobProductionState = { 
    job_id: string;
    job_owner: string;
    job_name_old: string;
    job_name_new: string;
    job_description: string;
    job_add_context: boolean;
    job_contexts: any[];
    job_add_job: boolean;
    job_dependencies: any[];
    job_name_new_available: boolean;
    job_name_new_checked: boolean;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class UpdateJobProduction extends Component<UpdateJobProductionProps, UpdateJobProductionState> {
    constructor(props: UpdateJobProductionProps) {
        super(props);
    }
    state: UpdateJobProductionState = {
        job_id: "", 
        job_owner: "", 
        job_name_old: "", 
        job_name_new: "", 
        job_description: "", 
        job_add_context: false, 
        job_contexts: [
            
        ], 
        job_add_job: false, 
        job_dependencies: [
            
        ], 
        job_name_new_available: false, 
        job_name_new_checked: false
    }
    ;
    async _checkAvalibleJobName() {
        const {
            owner
         } = this.props.data;
        const job_name_new_checked = this.state.job_name_new;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/job/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(job_name_new_checked)}`;
        console.log('CreateJob._checkAvalibleJobName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalible_job_Name error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreateJob._checkAvalibleJobName.result', result, __filename);
        this.setState({
            job_name_new_available: result.isValid, 
            job_name_new_checked: job_name_new_checked
         })
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    handleJobNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleJobNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            job_name_new: ev.target.value
         }, () => {
        
            if (ev.target.value !== this.state.job_name_old) {
                this._checkAvalibleJobName();
            }
        }
        )
    };
    
    handleSubmitUpdate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitUpdate', __filename);
        console.log('this.state.job_name_new_available', this.state.job_name_new_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.job_name_new_available == true)) {
            console.log('handleSubmitUpdate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/job";
    };
    componentDidMount() {
        console.log('UpdateJobProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description, 
            contexts, 
            dependencies
         } = this.props.data;
        const job_contexts = contexts || [];
        const job_dependencies = dependencies || [];
        this.setState({
            job_id: _id, 
            job_owner: owner, 
            job_name_old: name, 
            job_name_new: name, 
            job_name_new_available: true, 
            job_description: description, 
            job_add_context: job_contexts.length > 0, 
            job_contexts, 
            job_add_tfolder: job_dependencies.length > 0, 
            job_dependencies
         })
    }
    
    render() {
        console.log('UpdatePacki.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Update job' subtitle='A Job defines a folder template for generating the tasks that execute a Wizzi production.' />
                <HR
                 />
                <form 
                    action="/job/update"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormHidden
                     name='job_id' id='job_id' value={this.state.job_id} />
                    <FormHidden
                     name='job_owner' id='job_owner' value={this.state.job_owner} />
                    <FormHidden
                     name='job_name_old' id='job_name_old' value={this.state.job_name_old} />
                    <FormGroup 
                        label='Job name'
                        name='job_name_new'
                        id='job_name_new'
                        required={true}
                        value={this.state.job_name_new}
                        onChange={this.handleJobNameChange}
                     />
                    {
                        this.state.job_name_new.length > 0 && this.state.job_name_old !== this.state.job_name_new && this.state.job_name_new_available
                         &&  (
                            <Para
                            >
                                {'Job name ' + this.state.job_name_new_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.job_name_new.length > 0 && this.state.job_name_old !== this.state.job_name_new && !this.state.job_name_new_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Job name ' + this.state.job_name_new_checked + ' is not available'}
                            </Para>
                            )
                        
                    }
                    <HR
                     />
                    <FormGroup 
                        label='Description'
                        name='job_description'
                        id='job_description'
                        required={true}
                        value={this.state.job_description}
                        onChange={this.handleInputChange}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Update job production'
                                id='btn_update_job'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitUpdate(ev)
                                }
                             />
                            <FormButton 
                                label='Cancel'
                                id='btn_cancel_job'
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
export default UpdateJobProduction;

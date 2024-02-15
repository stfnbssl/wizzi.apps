/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\DeleteJob.tsx.ittf
    utc time: Mon, 12 Feb 2024 08:27:22 GMT
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

export interface DeleteJobProductionProps {
    data: any;
}

type DeleteJobProductionState = { 
    job_id: string;
    job_owner: string;
    job_name: string;
    job_description: string;
};


export class DeleteJobProduction extends Component<DeleteJobProductionProps, DeleteJobProductionState> {
    constructor(props: DeleteJobProductionProps) {
        super(props);
    }
    state: DeleteJobProductionState = {
        job_id: "", 
        job_owner: "", 
        job_name: "", 
        job_description: ""
    }
    ;
    
    formRef = React.createRef();
    
    componentDidMount() {
        console.log('DeleteJobProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description
         } = this.props.data;
        this.setState({
            job_id: _id, 
            job_owner: owner, 
            job_name: name, 
            job_description: description
         })
    }
    
    handleSubmitDelete = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitDelete', __filename);
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/job";
    };
    
    render() {
        console.log('DeleteJobProduction.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Delete job' />
                <HR
                 />
                <form 
                    action="/job/delete"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormStatic 
                        label='Job id'
                        name='job_id'
                        id='job_id'
                        value={this.state.job_id}
                     />
                    <FormStatic 
                        label='Job owner'
                        name='job_owner'
                        id='job_owner'
                        value={this.state.job_owner}
                     />
                    <FormStatic 
                        label='Job name'
                        name='job_name'
                        id='job_name'
                        value={this.state.job_name}
                     />
                    <HR
                     />
                    <FormStatic 
                        label='Description'
                        name='job_description'
                        id='job_description'
                        value={this.state.job_description}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Delete job production'
                                id='btn_delete_job'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitDelete(ev)
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
export default DeleteJobProduction;

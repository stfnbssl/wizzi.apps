/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreateJob.tsx.ittf
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

export interface CreateJobProps {
    data: any;
}

type CreateJobState = { 
    job_name: string;
    job_name_available: boolean;
    job_name_checked: string;
    job_description: string;
    job_schema: string;
    job_type: string;
    job_add_context: boolean;
    job_contexts: any[];
    job_add_job: boolean;
    job_dependencies: any[];
    job_upload_files: any[];
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class CreateJob extends Component<CreateJobProps, CreateJobState> {
    constructor(props: CreateJobProps) {
        super(props);
    }
    state: CreateJobState = {
        job_name: "", 
        job_name_available: false, 
        job_name_checked: "", 
        job_description: "", 
        job_schema: "", 
        job_type: "", 
        job_add_context: false, 
        job_contexts: [
            
        ], 
        job_add_job: false, 
        job_dependencies: [
            
        ], 
        job_upload_files: [
            
        ]
    }
    ;
    formRef = React.createRef();
    
    async _checkAvalibleJobName() {
        const {
            owner
         } = this.props.data;
        const job_checked = this.state.job_name;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/artifact/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(job_checked)}`;
        console.log('CreateJob._checkAvalibleJobName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalibleJobName error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreateJob._checkAvalibleJobName.result', result, __filename);
        this.setState({
            job_name_available: result.isValid, 
            job_name_checked: job_checked
         })
    }
    componentDidMount() {
        this._checkAvalibleJobName = debounce(this._checkAvalibleJobName, 100)
        ;
    }
    
    componentDidMount() {
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    handleContextAdd = (context: ContextRef) => 
        this.setState((state) => 
        
            ({
                job_contexts: [context, ...state.job_contexts]
             })
        );
    handleContextDelete = (delcontext: ContextRef) => 
        this.setState((state) => {
        
            const contexts = [];
            var i, i_items=this.state.job_contexts, i_len=this.state.job_contexts.length, context;
            for (i=0; i<i_len; i++) {
                context = this.state.job_contexts[i];
                if (context.name !== delcontext.name) {
                    contexts.push(context)
                }
            }
            return {
                    job_contexts: contexts
                 };
        }
        );
    handleTFolderAdd = (tfolder: TFolderRef) => 
        this.setState((state) => 
        
            ({
                job_dependencies: [tfolder, ...state.job_dependencies]
             })
        );
    handleTFolderDelete = (deltfolder: TFolderRef) => 
        this.setState((state) => {
        
            const tfolders = [];
            var i, i_items=this.state.job_dependencies, i_len=this.state.job_dependencies.length, tfolder;
            for (i=0; i<i_len; i++) {
                tfolder = this.state.job_dependencies[i];
                if (tfolder.name !== deltfolder.name) {
                    tfolders.push(tfolder)
                }
            }
            return {
                    job_dependencies: tfolders
                 };
        }
        );
    
    handleJobNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleJobNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            job_name: ev.target.value
         })
        this._checkAvalibleJobName();
    };
    
    handleSubmitCreate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitCreate', __filename);
        console.log('this.state.job_name_available', this.state.job_name_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.job_name_available == true)) {
            console.log('handleSubmitCreate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/job";
    };
    
    handleJobUploadChange = files => {
        console.log('CreateJob.handleJobUploadChange', files, __filename);
        const uploadfiles = [];
        var i, i_items=files, i_len=files.length, file;
        for (i=0; i<i_len; i++) {
            file = files[i];
            if (file.webkitRelativePath.endsWith('.ittf')) {
                uploadfiles.push({
                    relPath: file.webkitRelativePath, 
                    file: file
                 })
            }
        }
        this.setState({
            job_upload_files: uploadfiles
         })
    };
    
    render() {
        console.log('CreatePacki.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Create a new job' subtitle='A Job defines a folder template for generating the tasks that execute a Wizzi production.' />
                <HR
                 />
                <form 
                    action="/job/new"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormGroup 
                        label='Job name'
                        name='job_name'
                        id='job_name'
                        required={true}
                        value={this.state.job_name}
                        onChange={this.handleJobNameChange}
                     />
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
                    <HR
                     />
                    <HR
                     />
                    <FormHidden
                     id='job_contexts' name='job_contexts' value={JSON.stringify(this.state.job_contexts)} />
                    <FormCheckBox 
                        label='Add a data context'
                        name='job_add_context'
                        id='job_add_context'
                        value={this.state.job_add_context}
                        onChange={this.handleInputChange}
                     />
                    {
                        this.state.job_add_context
                         &&  (
                            <div
                            >
                                {
                                    this.state.job_contexts.map((context, ndx) => {
                                    
                                        console.log('Createjob.context', context, __filename);
                                        return  (
                                            <div
                                             key={ndx}>
                                                <FormRow
                                                 type='delete' value={context} onDelete={this.handleContextDelete} />
                                            </div>
                                            )
                                        ;
                                    }
                                    )
                                }
                                <FormRow
                                 type='add' onAdd={this.handleContextAdd} />
                            </div>
                            )
                        
                    }
                    <HR
                     />
                    <FormHidden
                     id='job_tfolders' name='job_tfolders' value={JSON.stringify(this.state.job_dependencies)} />
                    <FormCheckBox 
                        label='Add a tfolder dependency'
                        name='job_add_tfolder'
                        id='job_add_tfolder'
                        value={this.state.job_add_tfolder}
                        onChange={this.handleInputChange}
                     />
                    {
                        this.state.job_add_tfolder
                         &&  (
                            <div
                            >
                                {
                                    this.state.job_dependencies.map((tfolder, ndx) => {
                                    
                                        console.log('Createjob.tfolder', tfolder, __filename);
                                        return  (
                                            <div
                                             key={ndx}>
                                                <FormRow
                                                 type='delete' value={tfolder} onDelete={this.handleTFolderDelete} />
                                            </div>
                                            )
                                        ;
                                    }
                                    )
                                }
                                <FormRow
                                 type='add' onAdd={this.handleTFolderAdd} />
                            </div>
                            )
                        
                    }
                    <FormFile 
                        label='Upload fragments'
                        name='job_upload'
                        id='job_upload'
                        value={this.state.job_upload_files}
                        onChange={this.handleJobUploadChange}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Create job production'
                                id='btn_create_job'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitCreate(ev)
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
export default CreateJob;

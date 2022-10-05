/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreateArtifactProduction.tsx.ittf
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

export interface CreateArtifactProductionProps {
    data: any;
}

type CreateArtifactProductionState = { 
    ap_name: string;
    ap_name_available: boolean;
    ap_name_checked: string;
    ap_description: string;
    ap_wizzi_schema: string;
    ap_main_ittf: string;
    ap_type: string;
    ap_add_context: boolean;
    ap_contexts: any[];
    ap_add_tfolder: boolean;
    ap_dependencies: any[];
    ap_upload_files: any[];
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class CreateArtifactProduction extends Component<CreateArtifactProductionProps, CreateArtifactProductionState> {
    constructor(props: CreateArtifactProductionProps) {
        super(props);
    }
    state: CreateArtifactProductionState = {
        ap_name: "", 
        ap_name_available: false, 
        ap_name_checked: "", 
        ap_description: "", 
        ap_wizzi_schema: "", 
        ap_main_ittf: "", 
        ap_type: "", 
        ap_add_context: false, 
        ap_contexts: [
            
        ], 
        ap_add_tfolder: false, 
        ap_dependencies: [
            
        ], 
        ap_upload_files: [
            
        ]
    }
    ;
    formRef = React.createRef();
    
    async _checkAvalibleArtifactName() {
        const {
            owner
         } = this.props.data;
        const ap_checked = this.state.ap_name;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/artifact/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(ap_checked)}`;
        console.log('CreateArtifact._checkAvalibleArtifactName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalibleArtifactName error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreateArtifact._checkAvalibleArtifactName.result', result, __filename);
        this.setState({
            ap_name_available: result.isValid, 
            ap_name_checked: ap_checked
         })
    }
    componentDidMount() {
        this._checkAvalibleArtifactName = debounce(this._checkAvalibleArtifactName, 100)
        ;
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
                ap_contexts: [context, ...state.ap_contexts]
             })
        );
    handleContextDelete = (delcontext: ContextRef) => 
        this.setState((state) => {
        
            const contexts = [];
            var i, i_items=this.state.ap_contexts, i_len=this.state.ap_contexts.length, context;
            for (i=0; i<i_len; i++) {
                context = this.state.ap_contexts[i];
                if (context.name !== delcontext.name) {
                    contexts.push(context)
                }
            }
            return {
                    ap_contexts: contexts
                 };
        }
        );
    handleTFolderAdd = (tfolder: TFolderRef) => 
        this.setState((state) => 
        
            ({
                ap_dependencies: [tfolder, ...state.ap_dependencies]
             })
        );
    handleTFolderDelete = (deltfolder: TFolderRef) => 
        this.setState((state) => {
        
            const tfolders = [];
            var i, i_items=this.state.ap_dependencies, i_len=this.state.ap_dependencies.length, tfolder;
            for (i=0; i<i_len; i++) {
                tfolder = this.state.ap_dependencies[i];
                if (tfolder.name !== deltfolder.name) {
                    tfolders.push(tfolder)
                }
            }
            return {
                    ap_dependencies: tfolders
                 };
        }
        );
    
    handleArtifactNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleArtifactNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            ap_name: ev.target.value
         })
        this._checkAvalibleArtifactName();
    };
    
    handleSubmitCreate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitCreate', __filename);
        console.log('this.state.ap_name_available', this.state.ap_name_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.ap_name_available == true)) {
            console.log('handleSubmitCreate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/productions/artifacts";
    };
    
    render() {
        console.log('CreateArtifactProduction.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Create a new artifact production' subtitle='An artifact production contains the ittf documents for a single software artifact.' />
                <HR
                 />
                <form 
                    action="/artifact/new"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormGroup 
                        label='Artifact name'
                        name='ap_name'
                        id='ap_name'
                        required={true}
                        value={this.state.ap_name}
                        onChange={this.handleArtifactNameChange}
                     />
                    {
                        this.state.ap_name.length > 0 && this.state.ap_name_available
                         &&  (
                            <Para
                            >
                                {'Artifact name ' + this.state.ap_name_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.ap_name.length > 0 && !this.state.ap_name_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Artifact name ' + this.state.ap_name_checked + ' is not available'}
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
                    <FormGroup 
                        label='Wizzi schema'
                        name='ap_wizzi_schema'
                        id='ap_wizzi_schema'
                        required={true}
                        value={this.state.ap_wizzi_schema}
                        onChange={this.handleInputChange}
                     />
                    <HR
                     />
                    <FormGroup 
                        label='Main ittf'
                        name='ap_main_ittf'
                        id='ap_main_ittf'
                        required={true}
                        value={this.state.ap_main_ittf}
                        onChange={this.handleInputChange}
                     />
                    <HR
                     />
                    <HR
                     />
                    <FormHidden
                     id='ap_contexts' name='ap_contexts' value={JSON.stringify(this.state.ap_contexts)} />
                    <FormCheckBox 
                        label='Add a data context'
                        name='ap_add_context'
                        id='ap_add_context'
                        value={this.state.ap_add_context}
                        onChange={this.handleInputChange}
                     />
                    {
                        this.state.ap_add_context
                         &&  (
                            <div
                            >
                                {
                                    this.state.ap_contexts.map((context, ndx) => {
                                    
                                        console.log('Createap.context', context, __filename);
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
                     id='ap_tfolders' name='ap_tfolders' value={JSON.stringify(this.state.ap_dependencies)} />
                    <FormCheckBox 
                        label='Add a tfolder dependency'
                        name='ap_add_tfolder'
                        id='ap_add_tfolder'
                        value={this.state.ap_add_tfolder}
                        onChange={this.handleInputChange}
                     />
                    {
                        this.state.ap_add_tfolder
                         &&  (
                            <div
                            >
                                {
                                    this.state.ap_dependencies.map((tfolder, ndx) => {
                                    
                                        console.log('Createap.tfolder', tfolder, __filename);
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
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Create artifact production'
                                id='btn_create_ap'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitCreate(ev)
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
export default CreateArtifactProduction;

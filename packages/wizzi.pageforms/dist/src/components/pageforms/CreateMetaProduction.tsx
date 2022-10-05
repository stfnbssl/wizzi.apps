/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreateMetaProduction.tsx.ittf
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

export interface CreateMetaProductionProps {
    data: any;
}

type CreateMetaProductionState = { 
    mp_name: string;
    mp_name_available: boolean;
    mp_name_checked: string;
    mp_description: string;
    mp_type: string;
    mp_add_context: boolean;
    mp_contexts: any[];
    mp_add_tfolder: boolean;
    mp_dependencies: any[];
    mp_upload_files: any[];
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class CreateMetaProduction extends Component<CreateMetaProductionProps, CreateMetaProductionState> {
    constructor(props: CreateMetaProductionProps) {
        super(props);
    }
    state: CreateMetaProductionState = {
        mp_name: "", 
        mp_name_available: false, 
        mp_name_checked: "", 
        mp_description: "", 
        mp_type: "", 
        mp_add_context: false, 
        mp_contexts: [
            
        ], 
        mp_add_tfolder: false, 
        mp_dependencies: [
            
        ], 
        mp_upload_files: [
            
        ]
    }
    ;
    formRef = React.createRef();
    
    async _checkAvalibleMetaName() {
        const {
            owner
         } = this.props.data;
        const mp_checked = this.state.mp_name;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/artifact/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(mp_checked)}`;
        console.log('CreateMeta._checkAvalibleMetaName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalibleMetaName error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreateMeta._checkAvalibleMetaName.result', result, __filename);
        this.setState({
            mp_name_available: result.isValid, 
            mp_name_checked: mp_checked
         })
    }
    componentDidMount() {
        this._checkAvalibleMetaName = debounce(this._checkAvalibleMetaName, 100)
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
                mp_contexts: [context, ...state.mp_contexts]
             })
        );
    handleContextDelete = (delcontext: ContextRef) => 
        this.setState((state) => {
        
            const contexts = [];
            var i, i_items=this.state.mp_contexts, i_len=this.state.mp_contexts.length, context;
            for (i=0; i<i_len; i++) {
                context = this.state.mp_contexts[i];
                if (context.name !== delcontext.name) {
                    contexts.push(context)
                }
            }
            return {
                    mp_contexts: contexts
                 };
        }
        );
    handleTFolderAdd = (tfolder: TFolderRef) => 
        this.setState((state) => 
        
            ({
                mp_dependencies: [tfolder, ...state.mp_dependencies]
             })
        );
    handleTFolderDelete = (deltfolder: TFolderRef) => 
        this.setState((state) => {
        
            const tfolders = [];
            var i, i_items=this.state.mp_dependencies, i_len=this.state.mp_dependencies.length, tfolder;
            for (i=0; i<i_len; i++) {
                tfolder = this.state.mp_dependencies[i];
                if (tfolder.name !== deltfolder.name) {
                    tfolders.push(tfolder)
                }
            }
            return {
                    mp_dependencies: tfolders
                 };
        }
        );
    
    handleMetaNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleMetaNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            mp_name: ev.target.value
         })
        this._checkAvalibleMetaName();
    };
    
    handleSubmitCreate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitCreate', __filename);
        console.log('this.state.mp_name_available', this.state.mp_name_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.mp_name_available == true)) {
            console.log('handleSubmitCreate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/productions/metas";
    };
    
    render() {
        console.log('CreateMetaProduction.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Create a new meta production' subtitle='A meta production contains ittf documents for a production setup.' />
                <HR
                 />
                <form 
                    action="/meta/new"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormGroup 
                        label='Meta name'
                        name='mp_name'
                        id='mp_name'
                        required={true}
                        value={this.state.mp_name}
                        onChange={this.handleMetaNameChange}
                     />
                    {
                        this.state.mp_name.length > 0 && this.state.mp_name_available
                         &&  (
                            <Para
                            >
                                {'Meta name ' + this.state.mp_name_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.mp_name.length > 0 && !this.state.mp_name_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Meta name ' + this.state.mp_name_checked + ' is not available'}
                            </Para>
                            )
                        
                    }
                    <HR
                     />
                    <FormGroup 
                        label='Description'
                        name='mp_description'
                        id='mp_description'
                        required={true}
                        value={this.state.mp_description}
                        onChange={this.handleInputChange}
                     />
                    <HR
                     />
                    <FormHidden
                     id='mp_contexts' name='mp_contexts' value={JSON.stringify(this.state.mp_contexts)} />
                    <FormCheckBox 
                        label='Add a data context'
                        name='mp_add_context'
                        id='mp_add_context'
                        value={this.state.mp_add_context}
                        onChange={this.handleInputChange}
                     />
                    {
                        this.state.mp_add_context
                         &&  (
                            <div
                            >
                                {
                                    this.state.mp_contexts.map((context, ndx) => {
                                    
                                        console.log('Createmp.context', context, __filename);
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
                     id='mp_tfolders' name='mp_tfolders' value={JSON.stringify(this.state.mp_dependencies)} />
                    <FormCheckBox 
                        label='Add a tfolder dependency'
                        name='mp_add_tfolder'
                        id='mp_add_tfolder'
                        value={this.state.mp_add_tfolder}
                        onChange={this.handleInputChange}
                     />
                    {
                        this.state.mp_add_tfolder
                         &&  (
                            <div
                            >
                                {
                                    this.state.mp_dependencies.map((tfolder, ndx) => {
                                    
                                        console.log('Createmp.tfolder', tfolder, __filename);
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
                                label='Create meta production'
                                id='btn_create_mp'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitCreate(ev)
                                }
                             />
                            <FormButton 
                                label='Cancel'
                                id='btn_cancel_mp'
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
export default CreateMetaProduction;

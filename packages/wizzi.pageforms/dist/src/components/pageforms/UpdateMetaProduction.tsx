/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdateMetaProduction.tsx.ittf
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

export interface UpdateMetaProductionProps {
    data: any;
}

type UpdateMetaProductionState = { 
    mp_id: string;
    mp_owner: string;
    mp_name_old: string;
    mp_name_new: string;
    mp_name_new_checked: string;
    mp_name_new_available: boolean;
    mp_description: string;
    mp_add_context: boolean;
    mp_contexts: any[];
    mp_add_tfolder: boolean;
    mp_dependencies: any[];
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class UpdateMetaProduction extends Component<UpdateMetaProductionProps, UpdateMetaProductionState> {
    constructor(props: UpdateMetaProductionProps) {
        super(props);
    }
    state: UpdateMetaProductionState = {
        mp_id: "", 
        mp_owner: "", 
        mp_name_old: "", 
        mp_name_new: "", 
        mp_name_new_checked: "", 
        mp_name_new_available: false, 
        mp_description: "", 
        mp_add_context: false, 
        mp_contexts: [
            
        ], 
        mp_add_tfolder: false, 
        mp_dependencies: [
            
        ]
    }
    ;
    
    formRef = React.createRef();
    async _checkAvalibleMetaName() {
        const {
            owner
         } = this.props.data;
        const mp_name_new_checked = this.state.mp_name_new;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/meta/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(mp_name_new_checked)}`;
        console.log('CreateMeta._checkAvalibleMetaName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalible_meta_Name error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreateMeta._checkAvalibleMetaName.result', result, __filename);
        this.setState({
            mp_name_new_available: result.isValid, 
            mp_name_new_checked: mp_name_new_checked
         })
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    handleMetaNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleMetaNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            mp_name_new: ev.target.value
         }, () => {
        
            if (ev.target.value !== this.state.mp_name_old) {
                this._checkAvalibleMetaName();
            }
        }
        )
    };
    
    handleSubmitUpdate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitUpdate', __filename);
        console.log('this.state.mp_name_new_available', this.state.mp_name_new_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.mp_name_new_available == true)) {
            console.log('handleSubmitUpdate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/metas";
    };
    componentDidMount() {
        console.log('UpdateMetaProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description, 
            contexts, 
            dependencies
         } = this.props.data;
        const mp_contexts = contexts || [];
        const mp_dependencies = dependencies || [];
        this.setState({
            mp_id: _id, 
            mp_owner: owner, 
            mp_name_old: name, 
            mp_name_new: name, 
            mp_name_new_available: true, 
            mp_description: description, 
            mp_add_context: mp_contexts.length > 0, 
            mp_contexts, 
            mp_add_tfolder: mp_dependencies.length > 0, 
            mp_dependencies
         })
    }
    
    render() {
        console.log('UpdatePacki.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Update meta production' subtitle='A meta production contains ittf documents for a production setup.' />
                <HR
                 />
                <form 
                    action="/meta/update"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={ref => 
                        
                            this.formRef = ref
                    }
                    onSubmit={
                        // _ ev.preventDefault()
                        (ev) => {
                        
                            console.log('onSubmit preventing default', __filename);
                        }
                    }
                >
                    <FormHidden
                     name='mp_id' id='mp_id' value={this.state.mp_id} />
                    <FormHidden
                     name='mp_owner' id='mp_owner' value={this.state.mp_owner} />
                    <FormHidden
                     name='mp_name_old' id='mp_name_old' value={this.state.mp_name_old} />
                    <FormGroup 
                        label='Meta name'
                        name='mp_name_new'
                        id='mp_name_new'
                        required={true}
                        value={this.state.mp_name_new}
                        onChange={this.handleMetaNameChange}
                     />
                    {
                        this.state.mp_name_new.length > 0 && this.state.mp_name_old !== this.state.mp_name_new && this.state.mp_name_new_available
                         &&  (
                            <Para
                            >
                                {'Meta name ' + this.state.mp_name_new_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.mp_name_new.length > 0 && this.state.mp_name_old !== this.state.mp_name_new && !this.state.mp_name_new_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Meta name ' + this.state.mp_name_new_checked + ' is not available'}
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
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Update meta production'
                                id='btn_update_mp'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitUpdate(ev)
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
export default UpdateMetaProduction;

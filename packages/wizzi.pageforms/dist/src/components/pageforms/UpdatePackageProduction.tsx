/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdatePackageProduction.tsx.ittf
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

export interface UpdatePackageProductionProps {
    data: any;
}

type UpdatePackageProductionState = { 
    pp_id: string;
    pp_owner: string;
    pp_name_old: string;
    pp_name_new: string;
    pp_description: string;
    pp_add_context: boolean;
    pp_contexts: any[];
    pp_add_tfolder: boolean;
    pp_dependencies: any[];
    pp_name_new_available: boolean;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class UpdatePackageProduction extends Component<UpdatePackageProductionProps, UpdatePackageProductionState> {
    constructor(props: UpdatePackageProductionProps) {
        super(props);
    }
    state: UpdatePackageProductionState = {
        pp_id: "", 
        pp_owner: "", 
        pp_name_old: "", 
        pp_name_new: "", 
        pp_description: "", 
        pp_add_context: false, 
        pp_contexts: [
            
        ], 
        pp_add_tfolder: false, 
        pp_dependencies: [
            
        ], 
        pp_name_new_available: false
    }
    ;
    async _checkAvaliblePackageName() {
        const {
            owner
         } = this.props.data;
        const pp_name_new_checked = this.state.pp_name_new;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/package/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(pp_name_new_checked)}`;
        console.log('CreatePackage._checkAvaliblePackageName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalible_package_Name error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreatePackage._checkAvaliblePackageName.result', result, __filename);
        this.setState({
            pp_name_new_available: result.isValid, 
            pp_name_new_checked: pp_name_new_checked
         })
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    handlePackageNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handlePackageNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            pp_name_new: ev.target.value
         }, () => {
        
            if (ev.target.value !== this.state.pp_name_old) {
                this._checkAvaliblePackageName();
            }
        }
        )
    };
    
    handleSubmitUpdate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitUpdate', __filename);
        console.log('this.state.pp_name_new_available', this.state.pp_name_new_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.pp_name_new_available == true)) {
            console.log('handleSubmitUpdate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/packages";
    };
    componentDidMount() {
        console.log('UpdatePackageProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description, 
            contexts, 
            dependencies
         } = this.props.data;
        const pp_contexts = contexts || [];
        const pp_dependencies = dependencies || [];
        this.setState({
            pp_id: _id, 
            pp_owner: owner, 
            pp_name_old: name, 
            pp_name_new: name, 
            pp_name_new_available: true, 
            pp_description: description, 
            pp_add_context: pp_contexts.length > 0, 
            pp_contexts, 
            pp_add_tfolder: pp_dependencies.length > 0, 
            pp_dependencies
         })
    }
    
    render() {
        console.log('UpdatePacki.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Update package production' subtitle='A package production contains the ittf documents for a software package.' />
                <HR
                 />
                <form 
                    action="/package/update"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormHidden
                     name='pp_id' id='pp_id' value={this.state.pp_id} />
                    <FormHidden
                     name='pp_owner' id='pp_owner' value={this.state.pp_owner} />
                    <FormHidden
                     name='pp_name_old' id='pp_name_old' value={this.state.pp_name_old} />
                    <FormGroup 
                        label='Package name'
                        name='pp_name_new'
                        id='pp_name_new'
                        required={true}
                        value={this.state.pp_name_new}
                        onChange={this.handlePackageNameChange}
                     />
                    {
                        this.state.pp_name_new.length > 0 && this.state.pp_name_old !== this.state.pp_name_new && this.state.pp_name_new_available
                         &&  (
                            <Para
                            >
                                {'Package name ' + this.state.pp_name_new_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.pp_name_new.length > 0 && this.state.pp_name_old !== this.state.pp_name_new && !this.state.pp_name_new_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Package name ' + this.state.pp_name_new_checked + ' is not available'}
                            </Para>
                            )
                        
                    }
                    <HR
                     />
                    <FormGroup 
                        label='Description'
                        name='pp_description'
                        id='pp_description'
                        required={true}
                        value={this.state.pp_description}
                        onChange={this.handleInputChange}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Update package production'
                                id='btn_update_pp'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitUpdate(ev)
                                }
                             />
                            <FormButton 
                                label='Cancel'
                                id='btn_cancel_pp'
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
export default UpdatePackageProduction;

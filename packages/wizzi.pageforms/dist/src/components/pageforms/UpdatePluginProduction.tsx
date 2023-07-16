/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdatePluginProduction.tsx.ittf
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

export interface UpdatePluginProductionProps {
    data: any;
}

type UpdatePluginProductionState = { 
    pl_id: string;
    pl_owner: string;
    pl_name_old: string;
    pl_name_new: string;
    pl_description: string;
    pl_add_context: boolean;
    pl_contexts: any[];
    pl_add_tfolder: boolean;
    pl_dependencies: any[];
    pl_name_new_available: boolean;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class UpdatePluginProduction extends Component<UpdatePluginProductionProps, UpdatePluginProductionState> {
    constructor(props: UpdatePluginProductionProps) {
        super(props);
    }
    state: UpdatePluginProductionState = {
        pl_id: "", 
        pl_owner: "", 
        pl_name_old: "", 
        pl_name_new: "", 
        pl_description: "", 
        pl_add_context: false, 
        pl_contexts: [
            
        ], 
        pl_add_tfolder: false, 
        pl_dependencies: [
            
        ], 
        pl_name_new_available: false
    }
    ;
    async _checkAvaliblePluginName() {
        const {
            owner
         } = this.props.data;
        const pl_name_new_checked = this.state.pl_name_new;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/plugin/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(pl_name_new_checked)}`;
        console.log('CreatePlugin._checkAvaliblePluginName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalible_plugin_Name error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreatePlugin._checkAvaliblePluginName.result', result, __filename);
        this.setState({
            pl_name_new_available: result.isValid, 
            pl_name_new_checked: pl_name_new_checked
         })
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    handlePluginNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handlePluginNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            pl_name_new: ev.target.value
         }, () => {
        
            if (ev.target.value !== this.state.pl_name_old) {
                this._checkAvaliblePluginName();
            }
        }
        )
    };
    
    handleSubmitUpdate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitUpdate', __filename);
        console.log('this.state.pl_name_new_available', this.state.pl_name_new_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.pl_name_new_available == true)) {
            console.log('handleSubmitUpdate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/plugins";
    };
    componentDidMount() {
        console.log('UpdatePluginProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description, 
            contexts, 
            dependencies
         } = this.props.data;
        const pl_contexts = contexts || [];
        const pl_dependencies = dependencies || [];
        this.setState({
            pl_id: _id, 
            pl_owner: owner, 
            pl_name_old: name, 
            pl_name_new: name, 
            pl_name_new_available: true, 
            pl_description: description, 
            pl_add_context: pl_contexts.length > 0, 
            pl_contexts, 
            pl_add_tfolder: pl_dependencies.length > 0, 
            pl_dependencies
         })
    }
    
    render() {
        console.log('UpdatePacki.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Update plugin production' subtitle='A plugin production contains the ittf documents for a software plugin.' />
                <HR
                 />
                <form 
                    action="/plugin/update"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormHidden
                     name='pl_id' id='pl_id' value={this.state.pl_id} />
                    <FormHidden
                     name='pl_owner' id='pl_owner' value={this.state.pl_owner} />
                    <FormHidden
                     name='pl_name_old' id='pl_name_old' value={this.state.pl_name_old} />
                    <FormGroup 
                        label='Plugin name'
                        name='pl_name_new'
                        id='pl_name_new'
                        required={true}
                        value={this.state.pl_name_new}
                        onChange={this.handlePluginNameChange}
                     />
                    {
                        this.state.pl_name_new.length > 0 && this.state.pl_name_old !== this.state.pl_name_new && this.state.pl_name_new_available
                         &&  (
                            <Para
                            >
                                {'Plugin name ' + this.state.pl_name_new_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.pl_name_new.length > 0 && this.state.pl_name_old !== this.state.pl_name_new && !this.state.pl_name_new_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Plugin name ' + this.state.pl_name_new_checked + ' is not available'}
                            </Para>
                            )
                        
                    }
                    <HR
                     />
                    <FormGroup 
                        label='Description'
                        name='pl_description'
                        id='pl_description'
                        required={true}
                        value={this.state.pl_description}
                        onChange={this.handleInputChange}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Update plugin production'
                                id='btn_update_pl'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitUpdate(ev)
                                }
                             />
                            <FormButton 
                                label='Cancel'
                                id='btn_cancel_pl'
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
export default UpdatePluginProduction;

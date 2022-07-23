/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdatePluginProduction.tsx.ittf
    utc time: Fri, 22 Jul 2022 13:18:43 GMT
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

export class UpdatePluginProduction extends Component<UpdatePluginProductionProps, UpdatePluginProductionState> {
    constructor(props: UpdatePluginProductionProps) {
        super(props);
    }
    state: UpdatePluginProductionState = {
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
    async _checkAvaliblePluginName() {
        const {
            owner
         } = this.props.data;
        const pp_name_new_checked = this.state.pp_name_new;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/plugin/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(pp_name_new_checked)}`;
        console.log('CreatePlugin._checkAvaliblePluginName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalible_plugin_Name error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreatePlugin._checkAvaliblePluginName.result', result, __filename);
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
    
    handlePluginNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handlePluginNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            pp_name_new: ev.target.value
         }, () => {
        
            if (ev.target.value !== this.state.pp_name_old) {
                this._checkAvaliblePluginName();
            }
        }
        )
    };
    
    handleSubmitUpdate = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        if (this.state.pp_name_new_available) {
            this.formRef.dispatchEvent(new Event('submit'));
        }
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
        const pp_contexts = contexts || [];
        const pp_dependencies = dependencies || [];
        this.setState({
            pp_id: _id, 
            pp_owner: owner, 
            pp_name_old: name, 
            pp_name_new: name, 
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
                 title='Update plugin production' subtitle='A plugin production contains the ittf documents for a software plugin.' />
                <HR
                 />
                <form 
                    action="/plugin/update"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={ref => 
                        
                            this.formRef = ref
                    }
                >
                    <FormHidden
                     name='pp_id' id='pp_id' value={this.state.pp_id} />
                    <FormHidden
                     name='pp_owner' id='pp_owner' value={this.state.pp_owner} />
                    <FormHidden
                     name='pp_name_old' id='pp_name_old' value={this.state.pp_name_old} />
                    <FormGroup 
                        label='Plugin name'
                        name='pp_name_new'
                        id='pp_name_new'
                        required={true}
                        value={this.state.pp_name_new}
                        onChange={this.handlePluginNameChange}
                     />
                    {
                        this.state.pp_name_new.length > 0 && this.state.pp_name_old !== this.state.pp_name_new && this.state.pp_name_new_available
                         &&  (
                            <Para
                            >
                                {'Plugin name ' + this.state.pp_name_new_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.pp_name_new.length > 0 && this.state.pp_name_old !== this.state.pp_name_new && !this.state.pp_name_new_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Plugin name ' + this.state.pp_name_new_checked + ' is not available'}
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
                    <HR
                     />
                    <FormButton 
                        label='Update plugin production'
                        id='btn_update_ap'
                        variant='submit'
                        type="submit"
                        onClick={this.handleSubmitUpdate}
                     />
                </form>
            </FormContainer>
            )
        ;
    }
}
export default UpdatePluginProduction;

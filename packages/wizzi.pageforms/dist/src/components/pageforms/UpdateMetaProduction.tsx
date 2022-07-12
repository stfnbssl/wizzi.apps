/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdateMetaProduction.tsx.ittf
    utc time: Tue, 12 Jul 2022 16:15:51 GMT
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import debounce from 'lodash/debounce';
import nullthrows from 'nullthrows';
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
    mp_userid: string;
    mp_name_old: string;
    mp_name_new: string;
    mp_description: string;
    mp_add_context: boolean;
    mp_contexts: any[];
    mp_add_tfolder: boolean;
    mp_dependencies: any[];
    mp_name_new_available: boolean;
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
    async _checkAvalibleMetaName() {
        const mp_name_new_checked = this.state.mp_name_new;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/meta/checkname/${mp_name_new_checked}`;
        console.log('CreateMeta._checkAvalibleMetaName.endpoint', endpoint);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalible_meta_Name error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreateMeta._checkAvalibleMetaName.result', result);
        this.setState({
            mp_name_new_available: result.isValid, 
            mp_name_new_checked: mp_name_new_checked
         })
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    handleMetaNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleMetaNameChange', ev.target.type, ev.target.checked, ev.target.value);
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
        ev.preventDefault();
        if (this.state.mp_name_new_available) {
            this.formRef.dispatchEvent(new Event('submit'));
        }
    };
    componentDidMount() {
        console.log('UpdateMetaProduction.componentDidMount.props', this.props);
        const {
            _id, 
            userid, 
            name, 
            description, 
            contexts, 
            dependencies
         } = this.props.data;
        const mp_contexts = contexts || [];
        const mp_dependencies = dependencies || [];
        this.setState({
            mp_id: _id, 
            mp_userid: userid, 
            mp_name_old: name, 
            mp_name_new: name, 
            mp_description: description, 
            mp_add_context: mp_contexts.length > 0, 
            mp_contexts, 
            mp_add_tfolder: mp_dependencies.length > 0, 
            mp_dependencies
         })
    }
    
    render() {
        console.log('UpdatePacki.render', 'state', this.state);
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
                >
                    <FormHidden
                     name='mp_id' id='mp_id' value={this.state.mp_id} />
                    <FormHidden
                     name='mp_userid' id='mp_userid' value={this.state.mp_userid} />
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
                    <HR
                     />
                    <FormButton 
                        label='Update meta production'
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
export default UpdateMetaProduction;

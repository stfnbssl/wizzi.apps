/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\DeletePluginProduction.tsx.ittf
    utc time: Mon, 25 Jul 2022 18:06:15 GMT
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

export interface DeletePluginProductionProps {
    data: any;
}

type DeletePluginProductionState = { 
    pp_owner: string;
    pp_name: string;
    pp_description: string;
};


export class DeletePluginProduction extends Component<DeletePluginProductionProps, DeletePluginProductionState> {
    constructor(props: DeletePluginProductionProps) {
        super(props);
    }
    state: DeletePluginProductionState = {
        pp_owner: "", 
        pp_name: "", 
        pp_description: ""
    }
    ;
    
    componentDidMount() {
        console.log('DeletePluginProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description
         } = this.props.data;
        this.setState({
            pp_id: _id, 
            pp_owner: owner, 
            pp_name: name, 
            pp_description: description
         })
    }
    
    handleSubmitDelete = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        this.formRef.dispatchEvent(new Event('submit'));
    };
    
    render() {
        console.log('DeletePluginProduction.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Delete plugin production' />
                <HR
                 />
                <form 
                    action="/plugin/delete"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={ref => 
                        
                            this.formRef = ref
                    }
                >
                    <FormStatic 
                        label='Plugin id'
                        name='pp_id'
                        id='pp_id'
                        value={this.state.pp_id}
                     />
                    <FormStatic 
                        label='Plugin owner'
                        name='pp_owner'
                        id='pp_owner'
                        value={this.state.pp_owner}
                     />
                    <FormStatic 
                        label='Plugin name'
                        name='pp_name'
                        id='pp_name'
                        value={this.state.pp_name}
                     />
                    <HR
                     />
                    <FormStatic 
                        label='Description'
                        name='pp_description'
                        id='pp_description'
                        value={this.state.pp_description}
                     />
                    <HR
                     />
                    <FormButton 
                        label='Delete plugin production'
                        id='btn_delete_pp'
                        variant='submit'
                        type="submit"
                        onClick={this.handleSubmitDelete}
                     />
                </form>
            </FormContainer>
            )
        ;
    }
}
export default DeletePluginProduction;

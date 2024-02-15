/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\DeletePluginProduction.tsx.ittf
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

export interface DeletePluginProductionProps {
    data: any;
}

type DeletePluginProductionState = { 
    pl_id: string;
    pl_owner: string;
    pl_name: string;
    pl_description: string;
};


export class DeletePluginProduction extends Component<DeletePluginProductionProps, DeletePluginProductionState> {
    constructor(props: DeletePluginProductionProps) {
        super(props);
    }
    state: DeletePluginProductionState = {
        pl_id: "", 
        pl_owner: "", 
        pl_name: "", 
        pl_description: ""
    }
    ;
    
    formRef = React.createRef();
    
    componentDidMount() {
        console.log('DeletePluginProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description
         } = this.props.data;
        this.setState({
            pl_id: _id, 
            pl_owner: owner, 
            pl_name: name, 
            pl_description: description
         })
    }
    
    handleSubmitDelete = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitDelete', __filename);
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/plugins";
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
                    ref={this.formRef}
                >
                    <FormStatic 
                        label='Plugin id'
                        name='pl_id'
                        id='pl_id'
                        value={this.state.pl_id}
                     />
                    <FormStatic 
                        label='Plugin owner'
                        name='pl_owner'
                        id='pl_owner'
                        value={this.state.pl_owner}
                     />
                    <FormStatic 
                        label='Plugin name'
                        name='pl_name'
                        id='pl_name'
                        value={this.state.pl_name}
                     />
                    <HR
                     />
                    <FormStatic 
                        label='Description'
                        name='pl_description'
                        id='pl_description'
                        value={this.state.pl_description}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Delete plugin production'
                                id='btn_delete_pl'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitDelete(ev)
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
export default DeletePluginProduction;

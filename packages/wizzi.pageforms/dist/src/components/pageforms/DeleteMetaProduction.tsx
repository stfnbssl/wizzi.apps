/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\DeleteMetaProduction.tsx.ittf
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

export interface DeleteMetaProductionProps {
    data: any;
}

type DeleteMetaProductionState = { 
    mp_id: string;
    mp_owner: string;
    mp_name: string;
    mp_description: string;
};


export class DeleteMetaProduction extends Component<DeleteMetaProductionProps, DeleteMetaProductionState> {
    constructor(props: DeleteMetaProductionProps) {
        super(props);
    }
    state: DeleteMetaProductionState = {
        mp_id: "", 
        mp_owner: "", 
        mp_name: "", 
        mp_description: ""
    }
    ;
    
    formRef = React.createRef();
    
    componentDidMount() {
        console.log('DeleteMetaProduction.componentDidMount.props', this.props, __filename);
        const {
            _id, 
            owner, 
            name, 
            description
         } = this.props.data;
        this.setState({
            mp_id: _id, 
            mp_owner: owner, 
            mp_name: name, 
            mp_description: description
         })
    }
    
    handleSubmitDelete = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitDelete', __filename);
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/metas";
    };
    
    render() {
        console.log('DeleteMetaProduction.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Delete meta production' />
                <HR
                 />
                <form 
                    action="/meta/delete"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormStatic 
                        label='Meta id'
                        name='mp_id'
                        id='mp_id'
                        value={this.state.mp_id}
                     />
                    <FormStatic 
                        label='Meta owner'
                        name='mp_owner'
                        id='mp_owner'
                        value={this.state.mp_owner}
                     />
                    <FormStatic 
                        label='Meta name'
                        name='mp_name'
                        id='mp_name'
                        value={this.state.mp_name}
                     />
                    <HR
                     />
                    <FormStatic 
                        label='Description'
                        name='mp_description'
                        id='mp_description'
                        value={this.state.mp_description}
                     />
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Delete meta production'
                                id='btn_delete_mp'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitDelete(ev)
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
export default DeleteMetaProduction;

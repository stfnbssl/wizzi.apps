/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\DeletePackageProduction.tsx.ittf
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

export interface DeletePackageProductionProps {
    data: any;
}

type DeletePackageProductionState = { 
    pp_id: string;
    pp_owner: string;
    pp_name: string;
    pp_description: string;
};


export class DeletePackageProduction extends Component<DeletePackageProductionProps, DeletePackageProductionState> {
    constructor(props: DeletePackageProductionProps) {
        super(props);
    }
    state: DeletePackageProductionState = {
        pp_id: "", 
        pp_owner: "", 
        pp_name: "", 
        pp_description: ""
    }
    ;
    
    formRef = React.createRef();
    
    componentDidMount() {
        console.log('DeletePackageProduction.componentDidMount.props', this.props, __filename);
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
        console.log('handleSubmitDelete', __filename);
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/packages";
    };
    
    render() {
        console.log('DeletePackageProduction.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Delete package production' />
                <HR
                 />
                <form 
                    action="/package/delete"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormStatic 
                        label='Package id'
                        name='pp_id'
                        id='pp_id'
                        value={this.state.pp_id}
                     />
                    <FormStatic 
                        label='Package owner'
                        name='pp_owner'
                        id='pp_owner'
                        value={this.state.pp_owner}
                     />
                    <FormStatic 
                        label='Package name'
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
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Delete package production'
                                id='btn_delete_pp'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitDelete(ev)
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
export default DeletePackageProduction;

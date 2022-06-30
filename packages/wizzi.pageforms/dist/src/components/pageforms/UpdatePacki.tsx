/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\pageforms\UpdatePacki.tsx.ittf
    utc time: Tue, 29 Jun 2021 16:30:19 GMT
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import HR from './widgets/HR';
import FormContainer from './widgets/FormContainer';
import FormTitle from './widgets/FormTitle';
import FormGroup from './widgets/FormGroup';
import FormCheckBox from './widgets/FormCheckBox';
import FormRadioBox from './widgets/FormRadioBox';
import FormRow from './widgets/FormRow';
import FormFile from './widgets/FormFile';
import FormButton from './widgets/FormButton';

export interface UpdatePackiProps {
    data: any;
}

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class UpdatePacki extends Component<UpdatePackiProps, {}> {
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    componentDidUpdate() {
        const {
            name, 
            description, 
            wizziSchema, 
            mainIttf, 
            contexts, 
            dependencies
         } = this.props.data;
        const packi_contexts = contexts || [];
        const packi_dependencies = dependencies || [];
        this.setState({
            packi_name: name, 
            packi_description: description, 
            packi_wizziSchema: wizziSchema, 
            packi_mainIttf: mainIttf, 
            packi_add_context: packi_contexts.length > 0, 
            packi_contexts, 
            packi_add_tfolder: packi_dependencies.length > 0, 
            packi_dependencies
         })
    }
    
    render() {
        console.log('UpdatePacki.render', 'state', this.state);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Update packi' subtitle='A packi contains the ittf documents for a single software artifact or for an entire project.' />
                <HR
                 />
                <FormGroup 
                    label='Packi name'
                    name='packi_name'
                    id='packi_name'
                    required={true}
                    value={this.state.packi_name}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormGroup 
                    label='Description'
                    name='packi_description'
                    id='packi_description'
                    required={true}
                    value={this.state.packi_description}
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                <FormButton
                 label='Update packi' id='btn_update_packi' />
            </FormContainer>
            )
        ;
    }
}
export default UpdatePacki;

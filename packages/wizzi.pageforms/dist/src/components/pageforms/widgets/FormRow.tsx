/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\FormRow.tsx.ittf
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import {c, s} from '../../ThemeProvider';
import {AddIcon} from '../../../assets/AddIcon';
import {DeleteIcon} from '../../../assets/DeleteIcon';

export interface FormRowProps {
    type: string;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDelete?: any;
    onAdd?: any;
}

type FormRowState = { 
    name: string;
};

interface RootStyleProps {
}
const StyledInput = styled.input<RootStyleProps>`
    background-color: ${props => c('background')};
    background-position: right 8px center;
    background-repeat: no-repeat;
    border: ${props => '1px solid ' + c('border')};
    -webkit-border-radius: 6px;
    -khtml-border-radius: 6px;
    -moz-border-radius: 6px;
    -o-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: ${props => s('small')};
    -moz-box-shadow: ${props => s('small')};
    -o-box-shadow: ${props => s('small')};
    box-shadow: ${props => s('small')};
    color: ${props => c('primary-text')};
    font-size: 14px;
    line-height: 20px;
    outline: none;
    padding: 5px 12px;
    vertical-align: middle;
`
const StyledButton = styled.button<RootStyleProps>`
    margin-left: 5px;
    margin-top: 6px;
    line-height: 20px;
    padding: 3px;
    
`

export class FormRow extends Component<FormRowProps, FormRowState> {
    constructor(props: FormRowProps) {
        super(props);
    }
    state: FormRowState = {
        name: ""
    }
    ;
    componentDidMount() {
        if (this.props.type == 'delete') {
            console.log('FormRow.componentDidMount.props.value.name', this.props.value.name, __filename);
            this.setState({
                name: this.props.value.name
             })
        }
    }
    componentDidUpdate(prevProps: FormRowProps) {
        if (this.props.type == 'delete' && prevProps.value !== this.props.value) {
            console.log('FormRow.componentDidUpdate.props.value.name', this.props.value.name, __filename);
            this.setState({
                name: this.props.value.name
             })
        }
    }
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    handleContextAdd = ev => {
        this.props.onAdd({
            name: this.state.name
         })
        this.setState({
            name: ''
         })
        ev.stopPropagation();
    };
    handleContextDelete = ev => {
        this.props.onDelete({
            name: this.state.name
         })
        this.setState({
            name: ''
         })
        ev.stopPropagation();
    };
    render() {
        console.log('FormRow.state', this.state, 'props', this.props, __filename);
        return  (
            <div
            >
                <StyledInput 
                    type="text"
                    name='name'
                    id='name'
                    value={this.state.name}
                    disabled={this.props.type == 'delete'}
                    onChange={this.handleInputChange}
                 />
                {
                    this.props.type == 'add'
                     &&  (
                        <StyledButton
                         type='button' onClick={this.handleContextAdd}>
                            <AddIcon
                             theme={'light'} width={16} height={16} />
                        </StyledButton>
                        )
                    
                }
                {
                    this.props.type == 'delete'
                     &&  (
                        <StyledButton
                         type='button' onClick={this.handleContextDelete}>
                            <DeleteIcon
                             theme={'light'} width={16} height={16} />
                        </StyledButton>
                        )
                    
                }
            </div>
            )
        ;
    }
}
export default FormRow;

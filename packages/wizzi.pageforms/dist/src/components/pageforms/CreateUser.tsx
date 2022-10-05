/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreateUser.tsx.ittf
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
import FormAvatar from './widgets/FormAvatar';

export interface CreateUserProps {
    data: any;
}

type CreateUserState = { 
    u_username: string;
    u_username_checked: string;
    u_username_available: boolean;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class CreateUser extends Component<CreateUserProps, CreateUserState> {
    constructor(props: CreateUserProps) {
        super(props);
    }
    state: CreateUserState = {
        u_username: "", 
        u_username_checked: "", 
        u_username_available: false
    }
    ;
    formRef = React.createRef();
    
    async _checkAvalibleUserName() {
        const u_checked = this.state.u_username;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/user/checkusername/${u_checked}`;
        console.log('CreateUser.checkAvalibleUserName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvalibleUserName error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreateUser.checkAvalibleUserName.result', result, __filename);
        this.setState({
            u_username_available: result.isValid, 
            u_username_checked: u_checked
         })
    }
    componentDidMount() {
        this.checkAvalibleUserName = debounce(this._checkAvalibleUserName, 100)
        ;
    }
    
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    
    handleUsernameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleUsernameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            u_username: ev.target.value
         })
        this.checkAvalibleUserName();
    };
    
    handleSubmitSignUp = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        if (this.state.u_username_available) {
            this.formRef.dispatchEvent(new Event('submit'));
        }
    };
    
    render() {
        console.log('CreateUser.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Create a new user' subtitle={'Hello ' + this.props.data.name + '.'} subtitle2={'It seems that you are not a registered user yet. Choose your unique Wizzi user name to sign up.'} />
                <HR
                 />
                <FlexRow
                >
                    <FormStatic 
                        label='Email'
                        name='u_email'
                        id='u_email'
                        value={this.props.data.email}
                     />
                    <FormAvatar
                     avatar_url={this.props.data.avatar_url} />
                </FlexRow>
                <HR
                 />
                <form 
                    action="/user/new"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormHidden
                     name='u_name' value={this.props.data.name} />
                    <FormHidden
                     name='u_email' value={this.props.data.email} />
                    <FormHidden
                     name='u_avatar_url' value={this.props.data.avatar_url} />
                    <FormHidden
                     name='u_openid_provider' value={this.props.data.openid_provider} />
                    <FormGroup 
                        label='User name'
                        name='u_username'
                        id='u_username'
                        required={true}
                        value={this.state.u_username}
                        onChange={this.handleUsernameChange}
                     />
                    {
                        this.state.u_username.length > 0 && this.state.u_username_available
                         &&  (
                            <Para
                            >
                                {'Username ' + this.state.u_username_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.u_username.length > 0 && !this.state.u_username_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Username ' + this.state.u_username_checked + ' is not available'}
                            </Para>
                            )
                        
                    }
                    <HR
                     />
                    <FormButton 
                        label='Sign up'
                        id='btn_create_u'
                        variant='submit'
                        type="submit"
                        onClick={ev => 
                            
                                this.handleSubmitSignUp(ev)
                        }
                     />
                </form>
                <Para
                >
                    By creating an account, you agree to the
                    <Link
                     href="/terms-of-service">
                        Terms of Service
                    </Link>
                    <Text
                    >
                        . For more information about Wizzi's privacy practices, see the
                        <Link
                         href="/privacy">
                            Wizzi Privacy Statement
                        </Link>
                        <Text
                        >
                            . We'll occasionally send you account-related emails.
                        </Text>
                    </Text>
                </Para>
            </FormContainer>
            )
        ;
    }
}
export default CreateUser;

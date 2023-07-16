/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreatePackageProduction.tsx.ittf
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
import lodashSet from 'lodash/set';
import FormObject from './widgets/FormObject';
import {getData} from '../../fetch';

export interface CreatePackageProductionProps {
    data: any;
}

type CreatePackageProductionState = { 
    pp_name: string;
    pp_name_available: boolean;
    pp_name_checked: string;
    pp_description: string;
    pp_type: string;
    pp_add_context: boolean;
    pp_contexts: any[];
    pp_add_tfolder: boolean;
    pp_dependencies: any[];
    pp_upload_files: any[];
    meta_id: any;
    meta_listOptions: any;
    meta_props: any[];
    meta_propsValues: any;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class CreatePackageProduction extends Component<CreatePackageProductionProps, CreatePackageProductionState> {
    constructor(props: CreatePackageProductionProps) {
        super(props);
        this.state = {
            ...this.state, 
            meta_propsValues: {}, 
            meta_props: [], 
            meta_id: '', 
            meta_listOptions: []
         };
    }
    state: CreatePackageProductionState = {
        pp_name: "", 
        pp_name_available: false, 
        pp_name_checked: "", 
        pp_description: "", 
        pp_type: "", 
        pp_add_context: false, 
        pp_contexts: [
            
        ], 
        pp_add_tfolder: false, 
        pp_dependencies: [
            
        ], 
        pp_upload_files: [
            
        ], 
        meta_id: null, 
        meta_listOptions: null, 
        meta_props: [
            
        ], 
        meta_propsValues: null
    }
    ;
    formRef = React.createRef();
    
    async _checkAvaliblePackageName() {
        const {
            owner
         } = this.props.data;
        const pp_checked = this.state.pp_name;
        const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/production/artifact/checkname/${encodeURIComponent(owner)}/${encodeURIComponent(pp_checked)}`;
        console.log('CreatePackage._checkAvaliblePackageName.endpoint', endpoint, __filename);
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`checkAvaliblePackageName error - ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        console.log('CreatePackage._checkAvaliblePackageName.result', result, __filename);
        this.setState({
            pp_name_available: result.isValid, 
            pp_name_checked: pp_checked
         })
    }
    async componentDidMount() {
        this._checkAvaliblePackageName = debounce(this._checkAvaliblePackageName, 100)
        ;
        const {
            owner
         } = this.props.data;
        const metas = await getData('production/meta/' + encodeURIComponent(owner));
        console.log('componentDidMount.metas', metas, __filename);
        const options = [
            {
                name: '', 
                value: ''
             }
        ];
        var i, i_items=metas, i_len=metas.length, item;
        for (i=0; i<i_len; i++) {
            item = metas[i];
            options.push({
                name: item.owner + '/' + item.name, 
                value: item.id
             })
        }
        this.setState({
            meta_listOptions: options
         })
    }
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    handleContextAdd = (context: ContextRef) => 
        this.setState((state) => 
        
            ({
                pp_contexts: [context, ...state.pp_contexts]
             })
        );
    handleContextDelete = (delcontext: ContextRef) => 
        this.setState((state) => {
        
            const contexts = [];
            var i, i_items=this.state.pp_contexts, i_len=this.state.pp_contexts.length, context;
            for (i=0; i<i_len; i++) {
                context = this.state.pp_contexts[i];
                if (context.name !== delcontext.name) {
                    contexts.push(context)
                }
            }
            return {
                    pp_contexts: contexts
                 };
        }
        );
    handleTFolderAdd = (tfolder: TFolderRef) => 
        this.setState((state) => 
        
            ({
                pp_dependencies: [tfolder, ...state.pp_dependencies]
             })
        );
    handleTFolderDelete = (deltfolder: TFolderRef) => 
        this.setState((state) => {
        
            const tfolders = [];
            var i, i_items=this.state.pp_dependencies, i_len=this.state.pp_dependencies.length, tfolder;
            for (i=0; i<i_len; i++) {
                tfolder = this.state.pp_dependencies[i];
                if (tfolder.name !== deltfolder.name) {
                    tfolders.push(tfolder)
                }
            }
            return {
                    pp_dependencies: tfolders
                 };
        }
        );
    
    // value is the meta id
    handleMetaChange = async (value: string) => {
    
        console.log('handleMetaChange.value', value, __filename);
        if (value && value.length > 0) {
            const result = await getData('production/meta/props/' + encodeURIComponent(value));
            console.log('handleMetaChange.result', result, result.meta.properties, __filename);
            const properties = result.meta.properties;
            const values: any = {};
            var i, i_items=properties, i_len=properties.length, prop;
            for (i=0; i<i_len; i++) {
                prop = properties[i];
                if (prop.type == 'string' || prop.type == 'number') {
                    values[prop.name] = prop.defaultValue || '';
                }
                else if (prop.type == 'array') {
                    values[prop.name] = [];
                }
                else if (prop.type == 'object') {
                    values[prop.name] = {};
                }
            }
            this.setState({
                meta_id: value, 
                meta_props: result.meta.properties, 
                meta_propsValues: values
             })
        }
        else {
            this.setState({
                meta_id: value, 
                meta_props: [], 
                meta_propsValues: {}
             })
        }
    }
    handleMetaPropsValuesChange = (valuePath: string, value: any) => 
        this.setState((state) => {
        
            const newValues = lodashSet(state.meta_propsValues, valuePath, value);
            return {
                    meta_propsValues: newValues
                 };
        }
        );
    
    handlePackageNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handlePackageNameChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            pp_name: ev.target.value
         })
        this._checkAvaliblePackageName();
    };
    
    handleSubmitCreate = (ev: React.MouseEvent<HTMLElement>) => {
        console.log('handleSubmitCreate', __filename);
        console.log('this.state.pp_name_available', this.state.pp_name_available, __filename);
        
        /**
            * this.formRef.dispatchEvent
                * Event
                    * 'submit'
                    * 
                        * cancelable true
                        * bubbles true
        */
        if (!(this.state.pp_name_available == true)) {
            console.log('handleSubmitCreate prevent default', __filename);
            ev.preventDefault();
        }
    };
    handleCancel = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault();
        window.location.href = "/packi/productions/packages";
    };
    
    render() {
        console.log('CreatePackageProduction.render', 'state', this.state, __filename);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Create a new package production' subtitle='A package production contains the ittf documents for a package.' />
                <HR
                 />
                <form 
                    action="/package/new"
                    acceptCharset="UTF-8"
                    method="POST"
                    ref={this.formRef}
                >
                    <FormGroup 
                        label='Package name'
                        name='pp_name'
                        id='pp_name'
                        required={true}
                        value={this.state.pp_name}
                        onChange={this.handlePackageNameChange}
                     />
                    {
                        this.state.pp_name.length > 0 && this.state.pp_name_available
                         &&  (
                            <Para
                            >
                                {'Package name ' + this.state.pp_name_checked + ' is available'}
                            </Para>
                            )
                        
                    }
                    {
                        this.state.pp_name.length > 0 && !this.state.pp_name_available
                         &&  (
                            <Para
                             color='#ff0000'>
                                {'Package name ' + this.state.pp_name_checked + ' is not available'}
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
                    <FormHidden
                     id='pp_contexts' name='pp_contexts' value={JSON.stringify(this.state.pp_contexts)} />
                    <FormCheckBox 
                        label='Add a data context'
                        name='pp_add_context'
                        id='pp_add_context'
                        value={this.state.pp_add_context}
                        onChange={this.handleInputChange}
                     />
                    {
                        this.state.pp_add_context
                         &&  (
                            <div
                            >
                                {
                                    this.state.pp_contexts.map((context, ndx) => {
                                    
                                        console.log('Createpp.context', context, __filename);
                                        return  (
                                            <div
                                             key={ndx}>
                                                <FormRow
                                                 type='delete' value={context} onDelete={this.handleContextDelete} />
                                            </div>
                                            )
                                        ;
                                    }
                                    )
                                }
                                <FormRow
                                 type='add' onAdd={this.handleContextAdd} />
                            </div>
                            )
                        
                    }
                    <HR
                     />
                    <FormHidden
                     id='pp_tfolders' name='pp_tfolders' value={JSON.stringify(this.state.pp_dependencies)} />
                    <FormCheckBox 
                        label='Add a tfolder dependency'
                        name='pp_add_tfolder'
                        id='pp_add_tfolder'
                        value={this.state.pp_add_tfolder}
                        onChange={this.handleInputChange}
                     />
                    {
                        this.state.pp_add_tfolder
                         &&  (
                            <div
                            >
                                {
                                    this.state.pp_dependencies.map((tfolder, ndx) => {
                                    
                                        console.log('Createpp.tfolder', tfolder, __filename);
                                        return  (
                                            <div
                                             key={ndx}>
                                                <FormRow
                                                 type='delete' value={tfolder} onDelete={this.handleTFolderDelete} />
                                            </div>
                                            )
                                        ;
                                    }
                                    )
                                }
                                <FormRow
                                 type='add' onAdd={this.handleTFolderAdd} />
                            </div>
                            )
                        
                    }
                    <HR
                     />
                    <FormSelect 
                        label={'Use meta production'}
                        name='meta_id'
                        id='meta_id'
                        value={this.state.meta_id}
                        options={this.state.meta_listOptions}
                        onChange={ev => 
                            
                                this.handleMetaChange(ev.target.value)
                        }
                     />
                    {
                        this.state.meta_props
                         && this.state.meta_props.map((p: any, ndx) => {
                        
                            if (p.type == 'string' || p.type == 'number') {
                                return  (
                                    <FormGroup 
                                        key={ndx}
                                        label={p.label || p.name}
                                        name={p.name}
                                        id={p.name}
                                        value={this.state.meta_propsValues[p.name]}
                                        onChange={ev => 
                                            
                                                this.handleMetaPropsValuesChange(p.name, ev.target.value)
                                        }
                                     />
                                    )
                                ;
                            }
                            if (p.type == 'object') {
                                return  (
                                    <FormObject 
                                        key={ndx}
                                        label={p.label || p.name}
                                        name={p.name}
                                        id={p.name}
                                        path={p.name}
                                        values={this.state.meta_propsValues[p.name] || {}}
                                        properties={p.properties}
                                        onChange={this.handleMetaPropsValuesChange}
                                     />
                                    )
                                ;
                            }
                        }
                        )
                    }
                    {
                        this.state.meta_id.length > 0
                         &&  (
                            <FormText 
                                label='Values'
                                name='meta_propsValues'
                                id='meta_propsValues'
                                required={true}
                                value={JSON.stringify(this.state.meta_propsValues, null, 4)}
                             />
                            )
                        
                    }
                    <React.Fragment
                    >
                        <HR
                         />
                        <FlexRow
                         justifyContent="space-evenly">
                            <FormButton 
                                label='Create package production'
                                id='btn_create_pp'
                                variant='submit'
                                type='submit'
                                bgColor="#2ea44f"
                                onClick={ev => 
                                    
                                        this.handleSubmitCreate(ev)
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
export default CreatePackageProduction;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\PropertyEditor.tsx.ittf
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import lodashSet from 'lodash/set';
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
import FormObject from './widgets/FormObject';
import {getData} from '../../fetch';

export interface PropertyEditorProps {
    data: any;
}

type PropertyEditorState = { 
    pe_values: any;
    pe_metas: any;
    pe_metaProduction: string;
    pe_properties: any;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class PropertyEditor extends Component<PropertyEditorProps, PropertyEditorState> {
    constructor(props: PropertyEditorProps) {
        super(props);
        const values: any = {};
        this.state = {
            pe_values: values, 
            pe_metas: [], 
            pe_meta: null, 
            pe_properties: [], 
            pe_metaProduction: ''
         };
    }
    state: PropertyEditorState = {
        pe_values: null, 
        pe_metas: null, 
        pe_metaProduction: "", 
        pe_properties: null
    }
    ;
    async componentDidMount() {
        const metas = await getData('production/meta/list');
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
                value: item.owner + '|' + item.name
             })
        }
        this.setState({
            pe_metas: options
         })
    }
    handleMetaChange = async (value) => {
    
        const parts = value.split('|');
        if (parts.length == 2) {
            const result = await getData('production/meta/props/' + parts[0] + '/' + parts[1]);
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
                pe_metaProduction: value, 
                pe_properties: result.meta.properties, 
                pe_values: values
             })
        }
        else {
            this.setState({
                pe_metaProduction: value, 
                pe_properties: [], 
                pe_values: {}
             })
        }
    }
    handleValuesChange = (valuePath, value) => 
        this.setState((state) => {
        
            const newValues = lodashSet(state.pe_values, valuePath, value);
            return {
                    pe_values: newValues
                 };
        }
        );
    
    // const properties = this.props.data.schema.properties
    render() {
        console.log('PropertyEditor.render', 'state', this.state, __filename);
        const properties = this.state.pe_properties;
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Property editor' />
                <FormSelect 
                    label={'Meta production'}
                    name='pe_meta_production'
                    id='pe_meta_production'
                    value={this.state.pe_metaProduction}
                    options={this.state.pe_metas}
                    onChange={ev => 
                        
                            this.handleMetaChange(ev.target.value)
                    }
                 />
                {
                    properties
                     && properties.map((p: any, ndx) => {
                    
                        if (p.type == 'string' || p.type == 'number') {
                            return  (
                                <FormGroup 
                                    key={ndx}
                                    label={p.label || p.name}
                                    name={p.name}
                                    id={p.name}
                                    value={this.state.pe_values[p.name]}
                                    onChange={ev => 
                                        
                                            this.handleValuesChange(p.name, ev.target.value)
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
                                    values={this.state.pe_values[p.name] || {}}
                                    properties={p.properties}
                                    onChange={this.handleValuesChange}
                                 />
                                )
                            ;
                        }
                    }
                    )
                }
            </FormContainer>
            )
        ;
    }
}
export default PropertyEditor;

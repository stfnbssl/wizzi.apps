/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\ListArtifactProduction.tsx.ittf
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
import {AddDocumentIcon} from '../../assets/AddDocumentIcon';

export interface ListArtifactProductionProps {
    data: any;
}

type ListArtifactProductionState = { 
    l_artifacts: any[];
    l_search: string;
    l_sort: string;
    l_wizziSchema: string;
    l_wizziSchemas: any[];
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class ListArtifactProduction extends Component<ListArtifactProductionProps, ListArtifactProductionState> {
    constructor(props: ListArtifactProductionProps) {
        super(props);
    }
    state: ListArtifactProductionState = {
        l_artifacts: [
            
        ], 
        l_search: "", 
        l_sort: "", 
        l_wizziSchema: "", 
        l_wizziSchemas: [
            
        ]
    }
    ;
    componentDidMount() {
        console.log('ListArtifactProduction.componentDidMount', this.props.data, __filename);
        const wsObj = this.props.data.artifacts.reduce((obj: any, el: any) => {
        
            if (el.wizziSchema) {
                obj[el.wizziSchema] = true;
            }
            else if (el.mainIttf) {
                const parts = el.mainIttf.split('.');
                if (parts[parts.length-1] == 'ittf') {
                    obj[parts[parts.length-2]] = true;
                }
            }
            return obj;
        }
        , {});
        this.setState({
            l_artifacts: this.props.data.artifacts, 
            l_search: '', 
            l_wizziSchema: '*', 
            l_sort: 'none', 
            l_wizziSchemas: Object.keys(wsObj)
         })
    }
    filterItem(item) {
        if (this.state.l_wizziSchema !== '*') {
            if (this.state.l_wizziSchema !== item.wizziSchema) {
                return false;
            }
        }
        if (this.state.l_search.length > 0) {
            if ((item.name + ' ' + item.description).indexOf(this.state.l_search) < 0) {
                return false;
            }
        }
        return true;
    }
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value, __filename);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    render() {
        console.log('ListArtifactProduction.render', this.state, __filename);
        if (!this.state) {
            return  (
                <div
                >
                    Loading ...
                </div>
                )
            ;
        }
        return  (
            <div
             className="flex-column width-full">
                <div
                 className="flex-row align-items-start m-100">
                    <form 
                        className="width-full"
                        aria-label="Artifact productions"
                        role="search"
                        acceptCharset="UTF-8"
                        method="get"
                    >
                        <div
                         className="flex-row m-xxl">
                            <div
                             className="flex-column width-full">
                                <div
                                 className="m-s">
                                    <input 
                                        className="form-control width-full"
                                        autoComplete="off"
                                        type="search"
                                        placeholder="Find an artifact production…"
                                        aria-label="Find an artifact production…"
                                        value={this.state.l_search}
                                        onChange={this.handleInputChange}
                                        name='l_search'
                                     />
                                </div>
                            </div>
                            <div
                             className="flex-row">
                                <div
                                 className="flex-column">
                                    <div
                                     className="m-s">
                                        <select
                                         value={this.state.l_wizziSchema} onChange={this.handleInputChange} name='l_wizziSchema'>
                                            <option
                                             value="*">
                                            all
                                            </option>
                                            {
                                                this.state.l_wizziSchemas.map((ws: string, ndx: number) => 
                                                
                                                    (
                                                    <option
                                                     key={ndx} value={ws}>
                                                    {ws}
                                                    </option>
                                                    )
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div
                                 className="flex-column">
                                    <div
                                     className="m-s">
                                        <select
                                         onChange={this.handleInputChange} name='l_sort' value={this.state.l_sort}>
                                            <option
                                             value="none">
                                             
                                            </option>
                                            <option
                                             value="last-updated">
                                            Last updated
                                            </option>
                                            <option
                                             value="stars">
                                            Stars
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div
                     className="flex-row m-xxl">
                        <div
                         className="flex-column m-s">
                            <a
                             className="button p-s radius-m bg-success color-white border-s font-m font-w-xxl" href="/artifact/new">
                                <div
                                 className="flex-row">
                                    <AddDocumentIcon
                                     height="16" width="16" />
                                     New 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {
                    this.state.l_artifacts
                     && this.state.l_artifacts.map((item: any, ndx: number) => {
                    
                        if (this.filterItem(item)) {
                            return  (
                                <div
                                 className="flex-row align-items-start" key={ndx}>
                                    <div
                                     className="flex-row border-b-s width-full m-w-xxl">
                                        <div
                                         className="flex-column width-full">
                                            <div
                                             className="font-xl">
                                                <a
                                                 href={'/~~/a/stfnbssl/' + item.name} title={item.description}>
                                                {item.name}
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                         className="font-m p-m">
                                            <a
                                             href={'/~/stfnbssl/' + item.name} title='view generated in browser'>
                                            browse
                                            </a>
                                        </div>
                                        <div
                                         className="font-m p-m">
                                            <a
                                             href={'/~/stfnbssl/' + item.name + '?meta=raw'} title='view generated raw'>
                                            raw
                                            </a>
                                        </div>
                                        <div
                                         className="font-m p-m">
                                            <a
                                             href={'/~/stfnbssl/' + item.name + '?meta=mtree'} title='view builded mTree'>
                                            mtree
                                            </a>
                                        </div>
                                        <div
                                         className="font-m p-m">
                                            <a
                                             href={'/~/stfnbssl/' + item.name + '?meta=script'} title='view mTree buildup script'>
                                            script
                                            </a>
                                        </div>
                                        <div
                                         className="flex-row">
                                            <div
                                             className="flex-column m-s">
                                                <a
                                                 className="button p-s radius-m bg-warning color-white border-s font-m font-w-xxl" href={'/artifact/update/' + item.id}>
                                                    <div
                                                     className="flex-row">
                                                        <AddDocumentIcon
                                                         height="16" width="16" />
                                                         Update 
                                                    </div>
                                                </a>
                                            </div>
                                            <div
                                             className="flex-column m-s">
                                                <a
                                                 className="button p-s radius-m bg-error color-white border-s font-m font-w-xxl" href={'/artifact/delete/' + item.id}>
                                                    <div
                                                     className="flex-row">
                                                        <AddDocumentIcon
                                                         height="16" width="16" />
                                                         Delete 
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            ;
                        }
                    }
                    )
                }
            </div>
            )
        ;
    }
}
export default ListArtifactProduction;

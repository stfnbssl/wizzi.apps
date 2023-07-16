/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\ListMetaProduction.tsx.ittf
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

export interface ListMetaProductionProps {
    data: any;
}

type ListMetaProductionState = { 
    l_metas: any[];
    l_search: string;
    l_sort: string;
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class ListMetaProduction extends Component<ListMetaProductionProps, ListMetaProductionState> {
    constructor(props: ListMetaProductionProps) {
        super(props);
    }
    state: ListMetaProductionState = {
        l_metas: [
            
        ], 
        l_search: "", 
        l_sort: ""
    }
    ;
    componentDidMount() {
        console.log('ListMetaProduction.componentDidMount', this.props.data, __filename);
        this.setState({
            l_metas: this.props.data.metas, 
            l_search: '', 
            l_sort: 'none'
         })
    }
    filterItem(item) {
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
        console.log('ListMetaProduction.render', this.state, __filename);
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
                 className="flex-row align-items-start">
                    <form 
                        className="width-full"
                        aria-label="Meta productions"
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
                                        placeholder="Find a meta production…"
                                        aria-label="Find a meta production…"
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
                             className="button p-s radius-m bg-success color-white border-s font-m font-w-xxl" href="/meta/new">
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
                    this.state.l_metas
                     && this.state.l_metas.map((item: any, ndx: number) => {
                    
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
                                                 href={'/~~/m/stfnbssl/' + item.name} title={item.description}>
                                                {item.name}
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                         className="flex-row">
                                            <div
                                             className="flex-column m-s">
                                                <a
                                                 className="button p-s radius-m bg-warning color-white border-s font-m font-w-xxl" href={'/meta/update/' + item.id}>
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
                                                 className="button p-s radius-m bg-error color-white border-s font-m font-w-xxl" href={'/meta/delete/' + item.id}>
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
export default ListMetaProduction;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\ListJob.tsx.ittf
    utc time: Mon, 12 Feb 2024 08:27:22 GMT
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

export interface ListJobProps {
    data: any;
}

type ListJobState = { 
    l_jobs: any;
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

export class ListJob extends Component<ListJobProps, ListJobState> {
    constructor(props: ListJobProps) {
        super(props);
    }
    state: ListJobState = {
        l_jobs: null, 
        l_search: "", 
        l_sort: ""
    }
    ;
    componentDidMount() {
        console.log('ListJob.componentDidMount', this.props.data, __filename);
        this.setState({
            l_jobs: this.props.data.jobs, 
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
                        aria-label="Jobs"
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
                                        placeholder="Find a job…"
                                        aria-label="Find a job…"
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
                             className="button p-s radius-m bg-success color-white border-s font-m font-w-xxl" href="/job/new">
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
                    this.state.l_jobs
                     && this.state.l_jobs.map((item: any, ndx: number) => {
                    
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
                                                 href={'/~~/j/stfnbssl/' + item.name} title={item.description}>
                                                {item.name}
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                         className="flex-row">
                                            <div
                                             className="flex-column m-s">
                                                <a
                                                 className="button p-s radius-m bg-warning color-white border-s font-m font-w-xxl" href={'/job/update/' + item.id}>
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
                                                 className="button p-s radius-m bg-error color-white border-s font-m font-w-xxl" href={'/job/delete/' + item.id}>
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
export default ListJob;

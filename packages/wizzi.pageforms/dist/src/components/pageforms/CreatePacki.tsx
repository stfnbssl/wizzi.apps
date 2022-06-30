/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\pageforms\CreatePacki.tsx.ittf
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

export interface CreatePackiProps {
    data: any;
}

type CreatePackiState = { 
    packi_name: string;
    packi_description: string;
    packi_schema: string;
    packi_main_ittf: string;
    packi_type: string;
    packi_add_context: boolean;
    packi_contexts: any[];
    packi_add_tfolder: boolean;
    packi_dependencies: any[];
    packi_upload_files: any[];
};

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class CreatePacki extends Component<CreatePackiProps, CreatePackiState> {
    constructor(props: CreatePackiProps) {
        super(props);
        this.state = {
            packi_name: "", 
            packi_description: "", 
            packi_schema: "", 
            packi_main_ittf: "", 
            packi_type: "", 
            packi_add_context: false, 
            packi_contexts: [], 
            packi_add_tfolder: false, 
            packi_dependencies: [], 
            packi_upload_files: []
         };
    }
    
    componentDidMount() {
    }
    handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handleInputChange', ev.target.type, ev.target.checked, ev.target.value);
        this.setState({
            [ev.target.name]: (ev.target.type == 'checkbox' ? ev.target.checked : ev.target.value)
         })
    };
    handleContextAdd = context => 
        this.setState((state) => 
        
            ({
                packi_contexts: [context, ...state.packi_contexts]
             })
        );
    handleContextDelete = delcontext => 
        this.setState((state) => {
        
            const contexts = [];
            var i, i_items=this.state.packi_contexts, i_len=this.state.packi_contexts.length, context;
            for (i=0; i<i_len; i++) {
                context = this.state.packi_contexts[i];
                if (context.name !== delcontext.name) {
                    contexts.push(context)
                }
            }
            return {
                    packi_contexts: contexts
                 };
        }
        );
    handleTFolderAdd = tfolder => 
        this.setState((state) => 
        
            ({
                packi_dependencies: [tfolder, ...state.packi_dependencies]
             })
        );
    handleTFolderDelete = deltfolder => 
        this.setState((state) => {
        
            const tfolders = [];
            var i, i_items=this.state.packi_dependencies, i_len=this.state.packi_dependencies.length, tfolder;
            for (i=0; i<i_len; i++) {
                tfolder = this.state.packi_dependencies[i];
                if (tfolder.name !== deltfolder.name) {
                    tfolders.push(tfolder)
                }
            }
            return {
                    packi_dependencies: tfolders
                 };
        }
        );
    
    render() {
        console.log('CreatePacki.render', 'state', this.state);
        return  (
            <FormContainer
            >
                <FormTitle
                 title='Create a new packi' subtitle='A packi contains the ittf documents for a single software artifact or for an entire project.' />
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
                <FormRadioBox 
                    label='Single artifact'
                    name='packi_type'
                    id='packi_type_single_artifact'
                    checked={this.state.packi_type == 'single_artifact'}
                    value='single_artifact'
                    onChange={this.handleInputChange}
                 />
                <FormRadioBox 
                    label='Project artifacts'
                    name='packi_type'
                    id='packi_type_project_artifacts'
                    checked={this.state.packi_type == 'project_artifacts'}
                    value='project_artifacts'
                    onChange={this.handleInputChange}
                 />
                <HR
                 />
                {
                    this.state.packi_type == 'single_artifact'
                     &&  (
                        <React.Fragment
                        >
                            <FormGroup 
                                label='Wizzi schema'
                                name='packi_schema'
                                id='packi_schema'
                                required={true}
                                value={this.state.packi_schema}
                                onChange={this.handleInputChange}
                             />
                            <HR
                             />
                            <FormGroup 
                                label='Main ittf'
                                name='packi_main_ittf'
                                id='packi_main_ittf'
                                required={true}
                                value={this.state.packi_main_ittf}
                                onChange={this.handleInputChange}
                             />
                            <HR
                             />
                        </React.Fragment>
                        )
                    
                }
                <HR
                 />
                <FormCheckBox 
                    label='Add a context packi'
                    name='packi_add_context'
                    id='packi_add_context'
                    value={this.state.packi_add_context}
                    onChange={this.handleInputChange}
                 />
                {
                    this.state.packi_add_context
                     &&  (
                        <div
                        >
                            {
                                this.state.packi_contexts.map((context, ndx) => {
                                
                                    console.log('Createpacki.context', context);
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
                <FormCheckBox 
                    label='Add a tfolder dependency'
                    name='packi_add_tfolder'
                    id='packi_add_tfolder'
                    value={this.state.packi_add_tfolder}
                    onChange={this.handleInputChange}
                 />
                {
                    this.state.packi_add_tfolder
                     &&  (
                        <div
                        >
                            {
                                this.state.packi_dependencies.map((tfolder, ndx) => {
                                
                                    console.log('Createpacki.tfolder', tfolder);
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
                <FormButton
                 label='Create packi' id='btn_create_packi' />
            </FormContainer>
            )
        ;
    }
}
export default CreatePacki;

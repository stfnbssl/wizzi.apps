/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\App.tsx.ittf
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import {c, s} from './ThemeProvider';
import ListUser from './pageforms/ListUser';
import CreateUser from './pageforms/CreateUser';
import UpdateUser from './pageforms/UpdateUser';
import DeleteUser from './pageforms/DeleteUser';
import ListArtifactProduction from './pageforms/ListArtifactProduction';
import CreateArtifactProduction from './pageforms/CreateArtifactProduction';
import UpdateArtifactProduction from './pageforms/UpdateArtifactProduction';
import DeleteArtifactProduction from './pageforms/DeleteArtifactProduction';
import ListPackageProduction from './pageforms/ListPackageProduction';
import CreatePackageProduction from './pageforms/CreatePackageProduction';
import UpdatePackageProduction from './pageforms/UpdatePackageProduction';
import DeletePackageProduction from './pageforms/DeletePackageProduction';
import ListPluginProduction from './pageforms/ListPluginProduction';
import CreatePluginProduction from './pageforms/CreatePluginProduction';
import UpdatePluginProduction from './pageforms/UpdatePluginProduction';
import DeletePluginProduction from './pageforms/DeletePluginProduction';
import ListMetaProduction from './pageforms/ListMetaProduction';
import CreateMetaProduction from './pageforms/CreateMetaProduction';
import UpdateMetaProduction from './pageforms/UpdateMetaProduction';
import DeleteMetaProduction from './pageforms/DeleteMetaProduction';
import ListTFolder from './pageforms/ListTFolder';
import CreateTFolder from './pageforms/CreateTFolder';
import UpdateTFolder from './pageforms/UpdateTFolder';
import DeleteTFolder from './pageforms/DeleteTFolder';
import ThemeDemo from './pageforms/widgets/ThemeDemo';
import PropertyEditor from './pageforms/PropertyEditor';

export interface AppProps {
    formName: string;
    formData: any;
}

interface RootStyleProps {
}
const StyledRoot = styled.div<RootStyleProps>`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    
`

export class App extends Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }
    state: AppState = {};
    render() {
        console.log('App.render', 'props', this.props, 'state', this.state, __filename);
        let Comp;
        if (this.props.formName == '***') {
            throw new Error("Don't make me laugh!");
        }
        else if (this.props.formName == 'ListUser') {
            Comp = ListUser;
        }
        else if (this.props.formName == 'CreateUser') {
            Comp = CreateUser;
        }
        else if (this.props.formName == 'DeleteUser') {
            Comp = DeleteUser;
        }
        else if (this.props.formName == 'UpdateUser') {
            Comp = UpdateUser;
        }
        else if (this.props.formName == 'ListArtifactProduction') {
            Comp = ListArtifactProduction;
        }
        else if (this.props.formName == 'CreateArtifactProduction') {
            Comp = CreateArtifactProduction;
        }
        else if (this.props.formName == 'DeleteArtifactProduction') {
            Comp = DeleteArtifactProduction;
        }
        else if (this.props.formName == 'UpdateArtifactProduction') {
            Comp = UpdateArtifactProduction;
        }
        else if (this.props.formName == 'ListPackageProduction') {
            Comp = ListPackageProduction;
        }
        else if (this.props.formName == 'CreatePackageProduction') {
            Comp = CreatePackageProduction;
        }
        else if (this.props.formName == 'DeletePackageProduction') {
            Comp = DeletePackageProduction;
        }
        else if (this.props.formName == 'UpdatePackageProduction') {
            Comp = UpdatePackageProduction;
        }
        else if (this.props.formName == 'ListPluginProduction') {
            Comp = ListPluginProduction;
        }
        else if (this.props.formName == 'CreatePluginProduction') {
            Comp = CreatePluginProduction;
        }
        else if (this.props.formName == 'DeletePluginProduction') {
            Comp = DeletePluginProduction;
        }
        else if (this.props.formName == 'UpdatePluginProduction') {
            Comp = UpdatePluginProduction;
        }
        else if (this.props.formName == 'ListMetaProduction') {
            Comp = ListMetaProduction;
        }
        else if (this.props.formName == 'CreateMetaProduction') {
            Comp = CreateMetaProduction;
        }
        else if (this.props.formName == 'DeleteMetaProduction') {
            Comp = DeleteMetaProduction;
        }
        else if (this.props.formName == 'UpdateMetaProduction') {
            Comp = UpdateMetaProduction;
        }
        else if (this.props.formName == 'ListTFolder') {
            Comp = ListTFolder;
        }
        else if (this.props.formName == 'CreateTFolder') {
            Comp = CreateTFolder;
        }
        else if (this.props.formName == 'DeleteTFolder') {
            Comp = DeleteTFolder;
        }
        else if (this.props.formName == 'UpdateTFolder') {
            Comp = UpdateTFolder;
        }
        else if (this.props.formName == 'ThemeDemo') {
            Comp = () => {
            
                return  (
                    <ThemeDemo
                     />
                    )
                ;
            }
            ;
        }
        else if (this.props.formName == 'PropertyEditor') {
            Comp = PropertyEditor;
        }
        else {
            Comp = () => {
            
                return  (
                    <h1
                    >
                        Unknown page form: {this.props.formName}
                    </h1>
                    )
                ;
            }
            ;
        }
        return  (
            <StyledRoot
            >
                <Comp
                 data={this.props.formData} />
            </StyledRoot>
            )
        ;
    }
}
export default App;

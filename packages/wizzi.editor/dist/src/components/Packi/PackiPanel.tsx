/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\Packi\PackiPanel.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
*/
import * as React from 'react';
import {withStyles, createStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ModalGithubClone from './ModalGithubClone';
type Props = { 
    classes: any;
    onGithubClone: any;
};
type State = { 
    currentModal: string;
};
class PackiPanelComp extends React.Component<Props, State> {
    state: State = {
        currentModal: null
    }
    ;
    _handleDismissEditModal = () => 
        this.setState({
            currentModal: null
         });
    _handleOpenModalGithubClone = () => 
        this.setState({
            currentModal: 'github-clone'
         });
    render() {
        const {
            onGithubClone
         } = this.props;
        const {
            currentModal
         } = this.state;
        return  (
            <div
            >
                <Button
                 variant="contained" size="small" onClick={this._handleOpenModalGithubClone}>
                    Github clone
                </Button>
                <ModalGithubClone 
                    title="Clone github repository"
                    action="Clone"
                    visible={currentModal === 'github-clone'}
                    onDismiss={this._handleDismissEditModal}
                    onSubmit={(details) => {
                        
                            onGithubClone(details);
                            this._handleDismissEditModal();
                        }
                    }
                 />
            </div>
            )
        ;
    }
}
const muiStyles = (theme: Theme) => 

    createStyles({})
;
export const PackiPanel = withStyles(muiStyles)(PackiPanelComp)
;
export default PackiPanel;

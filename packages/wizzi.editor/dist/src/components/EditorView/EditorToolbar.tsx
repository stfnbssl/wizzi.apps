/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\EditorView\EditorToolbar.tsx.ittf
    utc time: Tue, 12 Jul 2022 15:10:51 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {SaveStatus, SaveHistory, PackiSaveOptions, PackiProduction} from '../../features/packi';
import {usePreferences} from '../../features/preferences';
import {WizziIcon} from '../../assets/WizziIcon';
import {EditIcon} from '../../assets/EditIcon';
import {BrowserIcon} from '../../assets/BrowserIcon';
import IconButton from '../widgets/IconButton';
import UserMenu from './UserMenu';
import {LoggedUser} from '../../features/app';
import {Packi} from '../../features/packi';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ModalProductionDetails from './ModalProductionDetails';
export type EditorToolbarProps = { 
    name: string;
    description: string;
    mainIttf: string;
    wizziSchema: string;
    packiProduction: PackiProduction;
    createdAt: string | undefined;
    saveStatus: SaveStatus;
    saveHistory: SaveHistory;
    isDownloading: boolean;
    isEditModalVisible: boolean;
    generatedPreviewURL: string;
    onSubmitMetadata: (details: { 
        name: string;
        description: string;
    }) => void;
    onShowEditModal: () => void;
    onDismissEditModal: () => void;
    onDownloadCode: () => Promise<void>;
    onPublishAsync: (options?: PackiSaveOptions) => Promise<void>;
    loggedUser: LoggedUser | undefined;
    splitViewKind: string;
    // isResolving: boolean;
    isAuthModalVisible: boolean;
    isWizziJobWaiting: boolean;
    onChangeSplitViewKind: (e: any) => void;
    onExecuteWizziJob: () => void;
    onShowPackiManager: () => void;
    creatorUsername?: string;
};
export function EditorToolbar(props: EditorToolbarProps) {

    const [preferences] = usePreferences();
    const {
        name, 
        description, 
        mainIttf, 
        wizziSchema, 
        packiProduction, 
        createdAt, 
        saveHistory, 
        saveStatus, 
        isDownloading, 
        isEditModalVisible, 
        onSubmitMetadata, 
        onShowEditModal, 
        onDismissEditModal, 
        onDownloadCode, 
        onPublishAsync, 
        splitViewKind, 
        onChangeSplitViewKind, 
        loggedUser, 
        isAuthModalVisible, 
        isWizziJobWaiting, 
        generatedPreviewURL, 
        onExecuteWizziJob, 
        onShowPackiManager
     } = props;
    const {
        theme
     } = preferences;
    const isPublishing = saveStatus === 'publishing';
    const isPublished = saveStatus === 'published';
    console.log('EditorToolbar.props', props, mainIttf, wizziSchema);
    return  (
        <div
         className={css(styles.ve_top_bar)}>
            <div
             className={css(styles.ve_top_bar_logo)}>
                <a
                 href="/">
                    <WizziIcon
                     theme={theme} width="150" height="50" />
                </a>
            </div>
            <div
             className={css(styles.ve_top_bar_control)}>
                <div
                 className={css(styles.ve_top_bar_label)}>
                    {packiProduction} Production
                </div>
                <div
                 className={css(styles.ve_top_bar_field)}>
                    <div
                     className={css(styles.ve_top_bar_field_editor)}>
                        {name}
                    </div>
                    <div
                     className={css(styles.ve_top_bar_field_button)}>
                        <IconButton
                         responsive title="Edit production metadata" onClick={onShowEditModal}>
                            <EditIcon
                             theme={theme} width="20" height="20" />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div
             className={css(styles.ve_top_bar_icons)}>
                {
                    packiProduction == 'artifact'
                     &&  (
                        <IconButton
                         responsive title="Browse generated" onClick={() => 
                            
                                window.open(generatedPreviewURL)
                        }>
                            <BrowserIcon
                             />
                        </IconButton>
                        )
                    
                }
                {
                    packiProduction == 'package'
                     &&  (
                        <IconButton
                         responsive title="Generate package" onClick={onExecuteWizziJob}>
                            <svg 
                                width="20px"
                                height="18px"
                                viewBox="0 0 20 18"
                                fill="none"
                            >
                                <path 
                                    d="M13.333 15l5-5-5-5M6.667 5l-5 5 5 5"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                            </svg>
                        </IconButton>
                        )
                    
                }
                <IconButton 
                    responsive
                    title="Download as zip"
                    onClick={onDownloadCode}
                    disabled={isDownloading || isPublishing}
                >
                    <svg
                     width="20" height="20">
                        <path
                         d="M14.167 10H5.833L10 16.667 14.167 10z" />
                        <path
                         d="M2.5 18.333h15M10 10V1.667" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </IconButton>
                <UserMenu
                 loggedUser={loggedUser} />
            </div>
            <ModalProductionDetails 
                title="Edit Production Details"
                action="Done"
                visible={isEditModalVisible}
                onDismiss={onDismissEditModal}
                onSubmit={(details) => {
                    
                        onSubmitMetadata(details);
                        onDismissEditModal();
                    }
                }
                description={description}
                name={name}
                mainIttf={mainIttf}
                wizziSchema={wizziSchema}
             />
        </div>
        )
    ;
}
export default EditorToolbar;
const styles = StyleSheet.create({
    ve_top_bar: {
        display: "grid", 
        gridTemplateColumns: "1fr 5fr 1fr", 
        marginBottom: "20px", 
        height: "50px"
     }, 
    ve_top_bar_logo: {
        paddingTop: "4px", 
        cursor: "pointer"
     }, 
    ve_top_bar_control: {
        display: "grid", 
        gridTemplateRows: "0.1fr 1fr", 
        borderBottom: "1px solid gray"
     }, 
    ve_top_bar_label: {
        paddingTop: "2px", 
        paddingLeft: "10px", 
        fontSize: "12px", 
        fontWeight: "900"
     }, 
    ve_top_bar_field: {
        display: "grid", 
        gridTemplateColumns: "5fr 1fr"
     }, 
    ve_top_bar_field_editor: {
        paddingLeft: "10px", 
        fontSize: "24px"
     }, 
    ve_top_bar_field_button: {
        
     }, 
    ve_top_bar_icons: {
        paddingTop: "4px", 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyItems: "center"
     }
 });

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\EditorView\EditorToolbar.tsx.ittf
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {SaveStatus, PackiSaveOptions, PackiProduction} from '../../features/packi';
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
    readOnly: string;
    createdAt: string | undefined;
    saveStatus: SaveStatus;
    isDownloading: boolean;
    isEditModalVisible: boolean;
    isLocalFolder: boolean;
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
    isWizziJobWaiting: boolean;
    onChangeSplitViewKind: (e: any) => void;
    onExecuteWizziJob: () => void;
    onExecuteWizziMetaFolder: () => void;
    onCloseLocalFolder: () => void;
};
export function EditorToolbar(props: EditorToolbarProps) {

    const [preferences] = usePreferences();
    const {
        name, 
        description, 
        mainIttf, 
        wizziSchema, 
        packiProduction, 
        readOnly, 
        createdAt, 
        saveStatus, 
        isDownloading, 
        isEditModalVisible, 
        isLocalFolder, 
        onSubmitMetadata, 
        onShowEditModal, 
        onDismissEditModal, 
        onDownloadCode, 
        onPublishAsync, 
        splitViewKind, 
        onChangeSplitViewKind, 
        loggedUser, 
        isWizziJobWaiting, 
        generatedPreviewURL, 
        onExecuteWizziJob, 
        onExecuteWizziMetaFolder, 
        onCloseLocalFolder
     } = props;
    const {
        theme
     } = preferences;
    const isPublishing = saveStatus === 'publishing';
    const isPublished = saveStatus === 'published';
    return  (
        <div
         className={css(styles.ve_top_bar)}>
            <div
             className={css(styles.ve_top_bar_logo)}>
                <a
                 href="/">
                    <WizziIcon
                     theme={theme} width="90" height="30" />
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
                        {name + (readOnly ? ' (generated, readonly)': '')}
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
                        <React.Fragment
                        >
                            <IconButton
                             responsive title="Generate .wizzi-meta folder" onClick={onExecuteWizziMetaFolder}>
                                <svg 
                                    width="20px"
                                    height="18px"
                                    viewBox="0 0 20 18"
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                     d="M18,8a3,3,0,1,1,3-3A3,3,0,0,1,18,8Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,18,4Z" />
                                    <path
                                     d="M5.5,14.5A3.5,3.5,0,1,1,9,11,3.5,3.5,0,0,1,5.5,14.5Zm0-5A1.5,1.5,0,1,0,7,11,1.5,1.5,0,0,0,5.5,9.5Z" />
                                    <path
                                     d="M18,22a4,4,0,1,1,4-4A4,4,0,0,1,18,22Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,16Z" />
                                    <path
                                     d="M7.73,10.64a1,1,0,0,1-.91-.57,1,1,0,0,1,.47-1.34L15.37,4.9a1,1,0,0,1,.86,1.8L8.15,10.54A.9.9,0,0,1,7.73,10.64Z" />
                                    <path
                                     d="M18.7,16.1a.92.92,0,0,1-.36-.07L8.14,12.1a1,1,0,0,1,.72-1.87l10.2,3.94a1,1,0,0,1-.36,1.93Z" />
                                    <path
                                     d="M12.21,18.5a1,1,0,0,1-.6-.2L6,14.1a1,1,0,1,1,1.19-1.6l5.62,4.2a1,1,0,0,1,.2,1.4A1,1,0,0,1,12.21,18.5Z" />
                                </svg>
                            </IconButton>
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
                        </React.Fragment>
                        )
                    
                }
                {
                    isLocalFolder
                     &&  (
                        <React.Fragment
                        >
                            <IconButton
                             responsive title="Download as zip" onClick={onCloseLocalFolder}>
                                <svg
                                 width="20" height="20">
                                    <path
                                     d="M14.167 10H5.833L10 16.667 14.167 10z" />
                                    <path
                                     d="M2.5 18.333h15M10 10V1.667" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </IconButton>
                        </React.Fragment>
                        )
                    
                }
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
                packiProduction={name}
                name={name}
                description={description}
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
        height: "50px", 
        zIndex: "100"
     }, 
    ve_top_bar_logo: {
        paddingTop: "10px", 
        paddingLeft: "15px", 
        cursor: "pointer"
     }, 
    ve_top_bar_control: {
        display: "grid", 
        gridTemplateRows: "0.1fr 1fr"
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

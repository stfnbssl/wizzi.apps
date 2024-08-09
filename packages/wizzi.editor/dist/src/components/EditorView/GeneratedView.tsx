/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\EditorView\GeneratedView.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import * as React from 'react';
import {withStyles, createStyles, Theme} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import {BrowserIcon} from '../../assets/BrowserIcon';
import {TreeIcon} from '../../assets/TreeIcon';
import {DebugIcon} from '../../assets/DebugIcon';
import {AstIcon} from '../../assets/AstIcon';
import {WizzifiedIcon} from '../../assets/WizzifiedIcon';
import SyntaxHighlighter from '../CodeView/SyntaxHighlighter';
import WebFrame from '../widgets/WebFrame';
import {PreviewKind} from '../types';
import LazyLoad from '../widgets/LazyLoad';
type Props = { 
    classes: any;
    selectedFile: string;
    previewKind: PreviewKind;
    generatedContent: string;
    generatedSourcePath?: string;
    mTreeBuildUpScript?: string;
    mTreeIttf?: string;
    wizzifiedIttfContent?: string;
    codeASTContent?: string;
    generatedPreviewURL?: string;
    splitViewKind: string;
    onGenerateArtifactPreview: () => void;
    onMTreePreview: () => void;
    onMTreeDebugInfoPreview: () => void;
    onMTreePreview: () => void;
    onBrowsePreview: () => void;
    onWizzifyPreview: () => void;
    onCodeASTPreview: () => void;
};
class GeneratedView extends React.Component<Props> {
    _handleGenerateArtifact = () => 
        this.props.onGenerateArtifactPreview()
    ;
    _handleMTree = () => 
        this.props.onMTreePreview()
    ;
    _handleMTreeDebugInfo = () => 
        this.props.onMTreeDebugInfoPreview()
    ;
    _handleBrowse = () => 
        this.props.onBrowsePreview()
    ;
    _handleWizzify = () => 
        this.props.onWizzifyPreview()
    ;
    _handleCodeAST = () => 
        this.props.onCodeASTPreview()
    ;
    render() {
        const {
            classes, 
            previewKind, 
            splitViewKind, 
            selectedFile
         } = this.props;
        const isIttf = selectedFile && selectedFile.endsWith('.ittf');
        return  (
            <div className={splitViewKind === 'right' ? classes.containerFull : classes.container}>
                {
                    previewKind === 'generated' && this.props.generatedContent &&  (
                        <div className={classes.editor}>
                            <SyntaxHighlighter className={classes.syntaxHigh}
                                code={this.props.generatedContent}
                                filePath={selectedFile.substr(0, selectedFile.length - 5)}
                                lineNumbers={true}
                             />
                        </div>
                        )
                    
                }
                {
                    previewKind === 'mTreeIttf' &&  (
                        <div className={classes.editor}>
                            <SyntaxHighlighter className={classes.syntaxHigh}
                                code={this.props.mTreeIttf || ''}
                                filePath={'mTree.ittf'}
                                lineNumbers={true}
                             />
                        </div>
                        )
                    
                }
                {
                    previewKind === 'mTreeBuildUpScript' &&  (
                        <div className={classes.editor}>
                            <SyntaxHighlighter className={classes.syntaxHigh}
                                code={this.props.mTreeBuildUpScript || ''}
                                filePath={'mTreeBuildUpScript.js'}
                                lineNumbers={true}
                             />
                        </div>
                        )
                    
                }
                {
                    previewKind === 'browser' &&  (
                        <div className={classes.browserOuter}>
                            {
                                ((this.props.generatedSourcePath.endsWith('.html.ittf') || this.props.generatedSourcePath.endsWith('.logbot.ittf') || this.props.generatedSourcePath.endsWith('.svg.ittf')) ?  (
                                    <WebFrame previewURL={this.props.generatedPreviewURL} />
                                    )
                                 : (this.props.generatedSourcePath.endsWith('.md.ittf') ?  (
                                        <React.Fragment>
                                            <LazyLoad load={() => 
                                                    import('../Markdown/MarkdownPreview')
                                            }>
                                                {
                                                    ({
                                                        loaded: mdLoaded, 
                                                        data: MarkdownPreview
                                                     }) => {
                                                        if (mdLoaded && MarkdownPreview) {
                                                            return  (
                                                                <MarkdownPreview source={this.props.generatedContent} />
                                                                )
                                                            ;
                                                        }
                                                        else {
                                                            return  (
                                                                <React.Fragment>
                                                                    <h1>
                                                                        Failed to load markdown preview for document</h1>
                                                                    <p>
                                                                    {this.props.generatedSourcePath}</p>
                                                                </React.Fragment>
                                                                )
                                                            ;
                                                        }
                                                    }
                                                    
                                                }
                                            </LazyLoad>
                                        </React.Fragment>
                                        )
                                     :  (
                                        <React.Fragment>
                                            <h1>
                                                No browser viewer for document</h1>
                                            <p>
                                            {this.props.generatedSourcePath}</p>
                                        </React.Fragment>
                                        )
                                    ))
                            }
                        </div>
                        )
                    
                }
                {
                    previewKind === 'wizzified' && this.props.wizzifiedIttfContent &&  (
                        <div className={classes.editor}>
                            <SyntaxHighlighter className={classes.syntaxHigh}
                                code={this.props.wizzifiedIttfContent}
                                filePath={selectedFile}
                                lineNumbers={true}
                             />
                        </div>
                        )
                    
                }
                {
                    previewKind === 'codeAST' && this.props.codeASTContent &&  (
                        <div className={classes.editor}>
                            <SyntaxHighlighter className={classes.syntaxHigh}
                                code={this.props.codeASTContent}
                                filePath={selectedFile}
                                lineNumbers={true}
                             />
                        </div>
                        )
                    
                }
                <div className={classes.sidebar}>
                    {
                        isIttf &&  (
                            <div className={classes.sbItem}>
                                <Tooltip title="View generated artifact content">
                                    <IconButton onClick={this._handleGenerateArtifact} classes={{
                                            root: classes.iconButton
                                         }}>
                                        <ViewListIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            )
                        
                    }
                    {
                        isIttf &&  (
                            <div className={classes.sbItem}>
                                <Tooltip title="View mTree">
                                    <IconButton onClick={this._handleMTree} classes={{
                                            root: classes.iconButton
                                         }}>
                                        <AccountTreeIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            )
                        
                    }
                    {
                        isIttf &&  (
                            <div className={classes.sbItem}>
                                <Tooltip title="View mTree build script">
                                    <IconButton onClick={this._handleMTreeDebugInfo} classes={{
                                            root: classes.iconButton
                                         }}>
                                        <DebugIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            )
                        
                    }
                    {
                        isIttf &&  (
                            <div className={classes.sbItem}>
                                <Tooltip title="Browse artifact">
                                    <IconButton onClick={this._handleBrowse} classes={{
                                            root: classes.iconButton
                                         }}>
                                        <BrowserIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            )
                        
                    }
                    {
                        isIttf == false &&  (
                            <div className={classes.sbItem}>
                                <Tooltip title="Wizzify source">
                                    <IconButton onClick={this._handleWizzify} classes={{
                                            root: classes.iconButton
                                         }}>
                                        <WizzifiedIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            )
                        
                    }
                    {
                        isIttf == false &&  (
                            <div className={classes.sbItem}>
                                <Tooltip title="Get code AST">
                                    <IconButton onClick={this._handleCodeAST} classes={{
                                            root: classes.iconButton
                                         }}>
                                        <AstIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            )
                        
                    }
                </div>
            </div>
            )
        ;
    }
}
const muiStyles = (theme: Theme) => 
    createStyles({
        container: {
            display: 'flex', 
            flexDirection: 'row', 
            borderLeft: '1px solid #cccccc', 
            width: '100%', 
            height: '100%'
         }, 
        containerFull: {
            display: 'flex', 
            flexDirection: 'row', 
            borderLeft: '1px solid #cccccc', 
            width: '100%', 
            height: '100%'
         }, 
        editor: {
            width: '92%'
         }, 
        browserOuter: {
            width: '92%'
         }, 
        syntaxHigh: {
            margin: 0, 
            padding: 0, 
            height: '100%'
         }, 
        sidebar: {
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'start', 
            width: '8%', 
            backgroundColor: '#666'
         }, 
        sbItem: {
            display: 'flex', 
            justifyContent: 'center'
         }, 
        iconButton: {
            padding: '10px'
         }
     })
;
export default withStyles(muiStyles)(GeneratedView);
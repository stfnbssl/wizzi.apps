/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\EditorView\GenerationErrors.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
import * as React from 'react';
import {withStyles, createStyles, Theme} from '@material-ui/core/styles';

export type GenerationErrorsProps = { 
    classes: any;
    error?: any;
};

export class GenerationErrors extends React.Component<GenerationErrorsProps> {
    render() {
        const {
            classes, 
            error
         } = this.props;
        var {
            name, 
            message, 
            data, 
            inner, 
            ittfDocumentUri, 
            method, 
            uri, 
            mixerUri, 
            stack, 
            errorLines, 
            parameter
         } = error;
        if (data) {
            if (data.errorName) {
                name = data.errorName;
            }
            if (data.method) {
                method = data.method;
            }
            if (data.uri) {
                ittfDocumentUri = data.uri;
            }
            if (data.mixerUri) {
                mixerUri = data.mixerUri;
            }
            if (data.errorLines) {
                errorLines = data.errorLines;
            }
        }
        if (inner) {
            if (inner.name) {
                name = inner.name;
            }
            if (inner.message) {
                message = inner.message;
            }
            if (inner.stack) {
                stack = inner.stack;
            }
            if (inner.errorLines) {
                errorLines = inner.errorLines;
            }
        }
        return  (
            <div
             className={classes.container}>
                <div
                 className={classes.errorName}>
                    {name}
                </div>
                {
                    method
                     &&  (
                        <div
                         className={classes.errorMethod}>
                            Method: {method}
                        </div>
                        )
                    
                }
                {
                    ittfDocumentUri
                     &&  (
                        <div
                         className={classes.errorUri}>
                            In ITTF Document: {ittfDocumentUri}
                        </div>
                        )
                    
                }
                {
                    mixerUri
                     &&  (
                        <div
                         className={classes.errorUri}>
                            Mixed by ITTF Document: {mixerUri}
                        </div>
                        )
                    
                }
                <div
                 className={classes.message}>
                    {
                        message
                         && message.split(',').map((line, i) => 
                        
                             (
                            <div
                             key={i}>
                                {line}
                            </div>
                            )
                        
                        )
                    }
                    {
                        parameter
                         && Object.keys(parameter).map((key) => {
                        
                            return  (
                                <div
                                >
                                    {key}: {parameter[key]}
                                </div>
                                )
                            ;
                        }
                        )
                    }
                </div>
                <pre
                 className={classes.lines}>
                    {errorLines && errorLines.join('\n')}
                    <ul
                     />
                    {
                        stack
                         && stack.split('\n').map((line, i) => 
                        
                             (
                            <li
                             key={i}>
                                {line}
                            </li>
                            )
                        
                        )
                    }
                </pre>
            </div>
            )
        ;
    }
}

const muiStyles = (theme: Theme) => 

    createStyles({
        container: {
            display: 'flex', 
            flexDirection: 'column', 
            borderLeft: '1px solid #cccccc', 
            width: '44vw', 
            height: '100%', 
            overflow: 'scroll'
         }, 
        errorName: {
            padding: '15px 30px', 
            fontSize: '28px'
         }, 
        errorMethod: {
            padding: '5px 10px', 
            fontSize: '20px'
         }, 
        errorUri: {
            padding: '5px 10px', 
            fontSize: '20px'
         }, 
        message: {
            padding: '15px 30px', 
            fontSize: '20px'
         }, 
        lines: {
            padding: '15px 30px', 
            fontSize: '18px', 
            fontFamily: 'Courier, mono'
         }
     })
;

export default withStyles(muiStyles)(GenerationErrors);

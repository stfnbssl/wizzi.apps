/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\widgets\LargeTextArea.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import Textarea from 'react-textarea-autosize';
import {c} from '../ThemeProvider';

export type LargeTextAreaProps = { 
    autoFocus?: boolean;
    value: string | undefined;
    name?: string;
    minRows?: number;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function LargeTextArea({
    ...rest
 }: LargeTextAreaProps) {

    return  (
        <Textarea
         className={css(styles.input)} {...rest} />
        )
    ;
}

export default LargeTextArea;

const styles = StyleSheet.create({
    input: {
        outline: 0, 
        fontSize: 16, 
        borderRadius: 3, 
        padding: '12px 14px 12px 14px', 
        lineHeight: '22px', 
        border: `1px solid ${c('border')}`, 
        backgroundColor: c('content'), 
        width: '100%', 
        ':focus': {
            borderColor: c('selected')
         }
     }
 });

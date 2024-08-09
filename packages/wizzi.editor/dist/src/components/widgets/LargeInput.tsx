/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\widgets\LargeInput.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import {StyleSheet, css} from 'aphrodite';
import * as React from 'react';
import {c} from '../ThemeProvider';

export type LargeInputProps = { 
    value: string | undefined;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    type?: string;
    autoFocus?: boolean;
    error?: Error | null;
};
;

type State = { 
    focused: boolean;
};

export class LargeInput extends React.Component<LargeInputProps, State> {
    state = {
        focused: true
    }
    ;
    focus() {
        this._input.current?.focus?.();
    }
    _handleFocus = () => 
        this.setState({
            focused: true
         });
    _handleBlur = () => 
        this.setState({
            focused: false
         });
    _input = React.createRef<HTMLInputElement>();
    render() {
        return  (
            <div className={css(styles.container)}>
                <input ref={this._input}
                    autoFocus={this.props.autoFocus}
                    className={css(styles.input, this.props.error ? styles.error : styles.normal)}
                    value={this.props.value}
                    name={this.props.name}
                    type={this.props.type}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder}
                    onFocus={this._handleFocus}
                    onBlur={this._handleBlur}
                 />{
                    this.state.focused && this.props.error ?  (
                        <div className={css(styles.validation)}>
                            {this.props.error.message}</div>
                        )
                     : null
                }
            </div>
            )
        ;
    }
}


export default LargeInput;

const styles = StyleSheet.create({
    container: {
        position: 'relative'
     }, 
    input: {
        outline: 0, 
        fontSize: 16, 
        borderRadius: 3, 
        padding: '12px 14px 12px 14px', 
        lineHeight: '22px', 
        width: '100%', 
        borderWidth: 1, 
        borderStyle: 'solid', 
        backgroundColor: c('content')
     }, 
    normal: {
        borderColor: c('border'), 
        ':focus': {
            borderColor: c('selected')
         }
     }, 
    error: {
        borderColor: c('error')
     }, 
    validation: {
        position: 'absolute', 
        backgroundColor: c('error'), 
        color: c('error-text'), 
        padding: '6px 12px', 
        borderRadius: 3, 
        marginTop: 8, 
        textAlign: 'left', 
        zIndex: 1, 
        ':before': {
            content: '""', 
            display: 'block', 
            position: 'absolute', 
            bottom: '100%', 
            width: 0, 
            height: 0, 
            borderLeft: '6px solid transparent', 
            borderRight: '6px solid transparent', 
            borderBottom: `6px solid ${c('error')}`
         }
     }
 });
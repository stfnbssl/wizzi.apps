/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\styles\Text.tsx.ittf
    utc time: Mon, 12 Feb 2024 08:27:22 GMT
*/
import styled, {keyframes, css} from 'styled-components';
import {c} from '../../ThemeProvider';
export const Text = styled.span((props: any) => {

    const ret = {
        marginLeft: '3px' || props.marginLeft
     };
    if (props.fontSize) {
        ret.fontSize = props.fontSize;
    }
    if (props.color) {
        ret.color = props.color;
    }
    if (props.padding) {
        ret.margin = props.padding;
    }
    return ret;
}
);
export default Text;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\styles\Para.tsx.ittf
    utc time: Tue, 12 Jul 2022 16:15:51 GMT
*/
import styled, {keyframes, css} from 'styled-components';
import {c} from '../../ThemeProvider';
export const Para = styled.p((props: any) => {

    const ret = {};
    if (props.fontSize) {
        ret.fontSize = props.fontSize;
    }
    if (props.color) {
        ret.color = props.color;
    }
    if (props.margin) {
        ret.margin = props.margin;
    }
    if (props.padding) {
        ret.padding = props.padding;
    }
    return ret;
}
);
export default Para;

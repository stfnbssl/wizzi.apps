/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\assets\AstIcon.tsx.ittf
*/
import * as React from "react";
export const AstIcon = ({
    height="24px", 
    width="24px", 
    theme="light", 
    ...props
 }: React.SVGProps<SVGSVGElement> & { 
    theme?: string;
}) => {

    const fill = theme == 'light' ? '#ffffff' : '#000000';
    const stroke = theme == 'light' ? '#000000' : '#ffffff';
    return  (
        <svg 
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 400 180"
            {...props}
        >
            <text 
                x="200"
                y="141"
                font-size="130"
                font-family="Helvetica,Arial,Sans"
                font-weight="bold"
                text-anchor="middle"
             />
            <path 
                fill="none"
                stroke={stroke}
                d="m199-90a180,180 0 1,0 2,0"
                stroke-width="40"
             />
            <path
             d="M88,15a135,135 0 0,0 0,150h32a114,114 0 0,1 0-150M280,15a114,114 0 0,1 0,150h32a135,135 0 0,0 0-150" />
        </svg>
        )
    ;
}
;

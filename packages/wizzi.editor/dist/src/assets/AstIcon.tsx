/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\assets\AstIcon.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
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
            <path 
                fill="none"
                stroke={stroke}
                d="m199-90a180,180 0 1,0 2,0"
                strokeWidth="40"
             />
            <path
             d="M88,15a135,135 0 0,0 0,150h32a114,114 0 0,1 0-150M280,15a114,114 0 0,1 0,150h32a135,135 0 0,0 0-150" />
        </svg>
        )
    ;
}
;

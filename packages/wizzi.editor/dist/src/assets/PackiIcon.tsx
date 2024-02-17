/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\assets\PackiIcon.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
import * as React from "react";
export const PackiIcon = ({
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
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            {...props}
        >
            <polyline 
                stroke={stroke}
                fill={fill}
                points="4 2 4 22 20 22 20 2 4 2"
                strokeWidth="2"
             />
        </svg>
        )
    ;
}
;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\assets\PopoverIcon.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import * as React from "react";
export const PopoverIcon = ({
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
        <svg xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            {...props}
        >
            <polyline stroke={stroke}
                fill={fill}
                points="10 2 10 18 14 18 14 2 10 2"
                strokeWidth="2"
             />
            <polyline stroke={stroke}
                fill={fill}
                points="10 20 10 22 14 22 14 20 10 20"
                strokeWidth="2"
             />
        </svg>
        )
    ;
}
;

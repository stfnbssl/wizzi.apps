/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\assets\WizziIcon.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
import * as React from "react";
export const WizziIcon = ({
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
            viewBox="0 0 660 280"
            {...props}
        >
            <polyline
             fill={stroke} stroke={stroke} points="10 250 45 10 60 10 75 130 120 210 120 130 175 210 175 110 230 210 230 250" />
            <polyline
             fill={stroke} stroke={stroke} points="250 250 260 90 290 90 300 250" />
            <polyline
             fill={stroke} stroke={stroke} points="320 250 320 230 420 130 400 110 400 90 450 90 420 230 440 230 440 250" />
            <polyline
             fill={stroke} stroke={stroke} points="450 250 450 230 550 130 530 110 530 90 580 90 550 230 570 230 570 250" />
            <polyline
             fill={stroke} stroke={stroke} points="590 250 600 90 630 90 640 250" />
            <path
             fill={stroke} stroke={stroke} d="M280, 30 C310,50 250,70 280, 84" />
            <path
             fill={stroke} stroke={stroke} d="M620, 30 C650,50 590,70 620, 84" />
        </svg>
        )
    ;
}
;

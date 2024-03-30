/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\assets\SaveIcon.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
import * as React from "react";
export const SaveIcon = ({
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
            viewBox="0 0 352.198 352.197"
            {...props}
        >
            <path
             d="M338.377,49.572c-13.464-14.688-30.6-25.092-45.899-37.944c1.224-3.06,0-6.732-3.672-7.344 c-29.376-6.12-56.916-3.672-86.292-1.836C166.406,4.896,129.687,0,92.966,0C50.738,0,12.183,6.732,8.51,55.692 c-5.508,63.648-7.344,128.521-6.12,192.167c0.612,41.617-4.896,83.844,42.84,95.473c29.376,7.344,66.708-0.611,96.696-1.836 c36.72-1.836,72.828,7.955,109.548,10.404c40.392,2.447,77.724-9.793,86.292-52.633c4.896-24.48,3.06-50.184,4.284-74.664 c2.447-39.168,7.344-77.724,7.956-116.892C350.006,88.74,352.454,64.872,338.377,49.572z M47.678,201.961 c0-5.51,0.612-10.404,0.612-15.912c0,5.508,0.612,11.627,0.612,17.135C48.902,202.572,48.291,202.572,47.678,201.961z M263.714,112.608c-0.612,23.868-7.956,22.644-29.988,22.644c-18.36-0.612-36.72-1.224-55.08,0.612 c-20.808,2.448-93.636,29.376-94.859-10.404c-1.224-31.824,3.06-61.812,1.224-93.636c19.584,0.612,38.556-0.612,41.616-0.612 c26.928-1.224,53.855,0.612,80.783,2.448c15.3,1.224,36.108,3.672,54.468,1.224C260.654,60.588,263.714,86.904,263.714,112.608z M280.238,273.564c-0.612,2.447-1.224,4.896-2.448,7.344c0.612-3.061,0.612-6.119,1.225-8.568c0.611-2.447,1.224-4.283,1.836-6.732 C280.85,268.057,280.238,270.504,280.238,273.564z" />
            <path
             d="M222.709,41.004c-9.18,0.612-17.748,0.612-26.928,1.836h-0.611l0,0h-0.612h-0.612c-2.448,0.612-3.672,2.448-3.672,4.284 c0,0.612-0.612,0.612-0.612,1.224c-6.12,22.032-4.283,45.288,0,67.32c0.612,3.06,3.061,4.896,5.509,5.508 c7.344,2.448,17.136,2.448,24.479,0c3.672-1.224,5.508-4.284,6.12-7.956c1.836-21.42,3.672-43.452,5.508-64.872 C230.666,44.676,226.382,41.004,222.709,41.004z" />
        </svg>
        )
    ;
}
;

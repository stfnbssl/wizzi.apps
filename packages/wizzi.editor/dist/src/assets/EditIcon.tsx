/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\assets\EditIcon.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
import * as React from "react";
export const EditIcon = ({
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
            viewBox="0 0 512 512"
            {...props}
        >
            <g
            >
                <path
                 fill={stroke} stroke={stroke} d="M486.805,34.87c-2.81-10.483-9.533-19.245-18.931-24.671l-8.206-4.738c-9.397-5.426-20.348-6.867-30.831-4.059c-10.484,2.81-19.246,9.533-24.672,18.932L174.185,418.667c-0.832,1.442-1.301,3.041-1.414,4.672c-0.003,0.035-0.016,0.062-0.018,0.098l-4.014,66.894H94.584c-5.983,0-10.835,4.852-10.835,10.835s4.852,10.835,10.835,10.835c0,0,85.393-0.032,85.656-0.093c1.639-0.198,3.243-0.755,4.673-1.7l64.441-42.548c0.035-0.023,0.053-0.056,0.086-0.08c1.322-0.892,2.478-2.071,3.328-3.544L482.746,65.702C488.172,56.303,489.614,45.354,486.805,34.87z M191.058,480.183l2.278-37.95l29.45,17.002L191.058,480.183z M239.418,443.817l-41.049-23.698l177.532-307.493l41.047,23.698L239.418,443.817zM427.784,117.558l-41.047-23.698l17.419-30.172l41.047,23.698L427.784,117.558z M463.978,54.867l-7.94,13.751L414.991,44.92l7.939-13.751c2.533-4.387,6.622-7.524,11.514-8.835c4.896-1.311,10.002-0.638,14.387,1.894l8.206,4.738c4.387,2.532,7.524,6.621,8.835,11.513C467.183,45.372,466.51,50.481,463.978,54.867z" />
                <path
                 fill={stroke} stroke={stroke} d="M41.853,490.331h-7.224c-5.983,0-10.835,4.852-10.835,10.835c0,5.983,4.852,10.835,10.835,10.835h7.224c5.983,0,10.835-4.852,10.835-10.835C52.688,495.183,47.836,490.331,41.853,490.331z" />
            </g>
        </svg>
        )
    ;
}
;

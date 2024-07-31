/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\shell\MainHeader.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import React from 'react';
interface Props {
    children?: React.ReactNode;
}

export const MainHeader: React.FC<Props> = ({
    children
 }) => {
    return  (
        <div className="w-full p-2 flex justify-between bg-gray-900 text-zinc-200">
            {
                children
            }
        </div>
        )
    ;
}
;
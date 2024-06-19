/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Pages\One.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React from 'react';
import {useParams} from 'react-router-dom';
interface Params {
    id: string;
}
const One: React.FC = () => {
    const {
        id
     } = useParams<Params>();
    return  (
        <div>
            <h1>
                Page One</h1>
            <p>
                ID: {id}</p>
        </div>
        )
    ;
}
;
export default One;
/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Pages\One.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import React from 'react';
import {useParams} from 'react-router-dom';
type Params = { 
    id: string;
};
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
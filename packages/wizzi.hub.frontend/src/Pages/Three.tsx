/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Pages\Three.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import React, {useState, useEffect} from 'react';
import {getMeta} from '@/Api/wizziHubApi';
const Three: React.FC = () => {
    const [metas, setMetas] = useState([]);
    useEffect(() => {
        async function fetchData() {
            getMeta('stfnbssl').then((response: any) => 
                setMetas(response.item)
            ).catch((err) => {
                console.log("[31m%s[0m", err.message);
                console.log("[31m%s[0m", err);
            }
            )
        }
        fetchData();
    }
    , [])
    return  (
        <div>
            <h1>
                Page Three</h1>
            <p>
                {JSON.stringify(metas[0], null, 4)}</p>
        </div>
        )
    ;
}
;
export default Three;
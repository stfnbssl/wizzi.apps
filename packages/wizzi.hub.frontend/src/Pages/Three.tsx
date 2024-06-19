/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Pages\Three.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getMeta, getPackage} from '@/Api/wizziHubApi';
import * as WizziMeta from '@/Api/wizziMetaApi';
const Three: React.FC = () => {
    const [metas, setMetas] = useState([]);
    const [provides, setProvides] = useState([]);
    useEffect(() => {
        async function fetchData() {
            getMeta('stfnbssl').then(response => 
                setMetas(response.item)
            ).catch((err) => {
                console.log("[31m%s[0m", err.message);
                console.log("[31m%s[0m", err);
            }
            )
            WizziMeta.getMetaProvides('stfnbssl').then((response) => {
                setProvides(response);
                console.log('getProvides', response);
            }
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
                {JSON.stringify(metas[0], 4, null)}</p>
        </div>
        )
    ;
}
;
export default Three;
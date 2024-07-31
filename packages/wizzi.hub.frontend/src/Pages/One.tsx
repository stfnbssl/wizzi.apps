/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Pages\One.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getArtifact} from '@/Api/wizziHubApi';
import {prettify, generate} from '@/Api/packiApi';
import HTMLPanel from '@/Components/ui/HTMLPanel';
import CodeDisplayPanel from '@/Components/ui/CodeDisplayPanel';
import "./wizzi-prettyprint.css";
type Params = { 
    id: string;
};
const One: React.FC = () => {
    const {
        id
     } = useParams<Params>();
    const [artifacts, setArtifacts] = useState([]);
    const [prettified, setPrettified] = useState<{[key: string]: any}>({});
    const [generated, setGenerated] = useState<{[key: string]: any}>({});
    useEffect(() => {
        async function fetchData() {
            getArtifact('stfnbssl').then((response: any) => {
                setArtifacts(response.item);
                console.log('getArtifact.response', response);
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
    const artifact: any = artifacts.find((item: any) => {
        return item.name == id;
    }
    );
    useEffect(() => {
        async function fetchData() {
            if (artifact) {
                prettify(JSON.parse(artifact.packiFiles)).then((response: any) => {
                    setPrettified(response);
                    console.log('prettify.response', response);
                }
                ).catch((err) => {
                    console.log("[31m%s[0m", err.message);
                    console.log("[31m%s[0m", err);
                }
                )
                generate(JSON.parse(artifact.packiFiles), {}).then((response: any) => {
                    setGenerated(response);
                    console.log('generate.response', response);
                }
                ).catch((err) => {
                    console.log("[31m%s[0m", err.message);
                    console.log("[31m%s[0m", err);
                }
                )
            }
        }
        fetchData();
    }
    , [
        artifact ? artifact.name : 'NONE'
    ])
    return  (
        <div>
            <h1>
                Page One</h1>
            <p>
                ID: {id}</p>
            <p>
            + Artifacts{ JSON.stringify( artifacts.map(({ name }) => name), null, 4) }</p>
            {
                Object.keys(prettified).map((item: any, ndx: number) => {
                    return  (
                        <HTMLPanel key={ndx} htmlContent={ prettified[item].contents } />
                        )
                    ;
                }
                )
            }
            {
                Object.keys(generated).map((filePath: any, ndx: number) => {
                    return  (
                        <CodeDisplayPanel key={ndx} code={ generated[filePath].contents } filePath={ filePath } />
                        )
                    ;
                }
                )
            }
        </div>
        )
    ;
}
;
export default One;
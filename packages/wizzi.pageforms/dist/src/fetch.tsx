/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.pageforms\.wizzi\src\fetch.tsx.ittf
    utc time: Mon, 12 Feb 2024 08:27:22 GMT
*/
import nullthrows from 'nullthrows';
export async function getData(path) {

    const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/${path}`;
    console.log('Fetch.getData.endpoint', endpoint, __filename);
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`fetch.getData error - ${response.status} - ${response.statusText}`);
    }
    const result = await response.json();
    return result;
}

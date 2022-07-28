/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\utils\api.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
*/
export async function callApi(method: string, url: string, path: string, data?: any) {

    console.log('callApi', method, url, path, data, __filename);
    console.log('url', `${url}/${path}`)
    const res = await fetch(`${url}/${path}`, {
            method, 
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json'
             }, 
            body: JSON.stringify(data)
         });
    return await res.json();
}

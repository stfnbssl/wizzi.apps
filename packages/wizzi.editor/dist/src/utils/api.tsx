/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\utils\api.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
export async function callApi(method: string, url: string, path: string, data?: any) {

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

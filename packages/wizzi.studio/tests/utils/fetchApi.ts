/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\Tests\utils\fetchApi.ts.ittf
    utc time: Mon, 24 Jul 2023 09:38:02 GMT
*/
export async function postRequest(url: string, data: object):  Promise<Response> {

    return putPostRequest(url, data, "POST");
}
export async function putRequest(url: string, data: object):  Promise<Response> {

    return putPostRequest(url, data, "PUT");
}
async function putPostRequest(url: string, data: object, method: string):  Promise<Response> {

    try {
        const response = await fetch(url, {
                method: method, 
                headers: {
                    'Content-Type': 'application/json'
                 }, 
                body: JSON.stringify(data)
             });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response;
    } 
    catch (error) {
        console.log("[31m%s[0m", 'There was a problem with the fetch operation:', error);
        throw error;
    } 
}
// Esempio di utilizzo:
function putRequest_example() {

    
    // Esempio di utilizzo:
    const url = 'https://api.example.com/resource';
    const data = {
        field1: 'value1', 
        field2: 'value2'
     };
    putRequest(url, data).then(response => 
    
        response.json()
    ).then((updatedData) => {
    
    }
    ).catch((error) => {
    
        console.log("[31m%s[0m", '');
        console.log("[31m%s[0m", 'Si è verificato un errore:', error);
    }
    )
}

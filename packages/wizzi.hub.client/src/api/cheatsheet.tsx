/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\api\cheatsheet.tsx.ittf
    utc time: Sat, 09 Mar 2024 13:13:32 GMT
*/
export function getCheats() {

    return new Promise((resolve, reject) => 
        
            resolve([
                'JSON', 
                'YAML'
            ])
        );
}
export function getCheatsheet(schemaName) {

    return new Promise((resolve, reject) => {
        
            if (schemaName == "JSON") {
                resolve({
                    name: 'JSON'
                 })
            }
            else {
                resolve({
                    name: 'YAML'
                 })
            }
        }
        );
}

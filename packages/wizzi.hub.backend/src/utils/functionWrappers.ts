/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.backend\.wizzi-override\src\utils\functionWrappers.ts.ittf
    utc time: Fri, 09 Aug 2024 16:10:15 GMT
*/
export const promisify = (f: Function, self?: Function) => {
    return function(...args: any[]) {
            // ritorna una funzione wrapper
            return new Promise((resolve, reject) => {
                    function callback(err: any, result: any) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(result);
                        }
                    }
                    // aggiunge la nostra callback custom alla fine degli argomenti
                    args.push(callback);
                    // chiama la funzione originale
                    f.call(self || this, ...args);
                }
                );
        };
}
;
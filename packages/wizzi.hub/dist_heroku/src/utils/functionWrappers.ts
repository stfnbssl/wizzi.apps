/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub\.wizzi-override\src\utils\functionWrappers.ts.ittf
    utc time: Sat, 06 Apr 2024 12:40:00 GMT
*/
export const promisify = (f, self) => {

    return function(...args) {
        
            
            // ritorna una funzione wrapper
            return new Promise((resolve, reject) => {
                
                    function callback(err, result) {
                    
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

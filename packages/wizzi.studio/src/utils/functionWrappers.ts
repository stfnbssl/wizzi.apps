/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\utils\functionWrappers.ts.ittf
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

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\utils\ErrorView.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
export function ErrorView(params) {
    const {
        error
     } = params;
    let errorObj = {};
    let lines = [];
    if (error) {
        errorObj.name = error.name;
        errorObj.message = error.message;
        errorObj.fileName = error.fileName;
        errorObj.lineNumber = error.lineNumber;
        errorObj.cause = error.cause;
        errorObj.stack = error.stack;
        errorObj.data = error.data;
        errorObj.info = error.info;
        lines = JSON.stringify(errorObj, null, 4).split('\n');
    }
    return  (
        <div className="error">
            <h1>
            Error</h1>
            <code>{
                    error && error.errorLines && error.errorLines.map((line, ndx) => {
                        return  (
                            <div key={ndx}>
                            . {line}</div>
                            )
                        ;
                    }
                    )
                }
                {
                    lines && lines.map((line, ndx) => {
                        return  (
                            <div key={ndx}>
                            . {line}</div>
                            )
                        ;
                    }
                    )
                }
            </code></div>
        )
    ;
}
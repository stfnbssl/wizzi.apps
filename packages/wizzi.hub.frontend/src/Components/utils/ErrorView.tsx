/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\utils\ErrorView.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
export function ErrorView(params: any) {
    const {
        error
     } = params;
    let errorObj: any = {};
    let lines: string[] = [];
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
                    error && error.errorLines && error.errorLines.map((line: any, ndx: any) => {
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
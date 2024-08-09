/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\ui\CodeDisplayPanel.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import React, {useEffect} from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';

type CodeDisplayPanelProps = { 
    code: string;
    filePath: string;
};

const CodeDisplayPanel: React.FC<CodeDisplayPanelProps> = ({
    code, 
    filePath
 }) => {
    useEffect(() => 
        Prism.highlightAll()
    , [
        code, 
        filePath
    ])
    let language = 'markup';
    if (filePath.endsWith('.js')) {
        language = 'javascript';
    }
    else if (filePath.endsWith('.ts')) {
        language = 'typescript';
    }
    else if (filePath.endsWith('.css')) {
        language = 'css';
    }
    else if (filePath.endsWith('.json')) {
        language = 'JSON';
    }
    else if (filePath.endsWith('.yaml')) {
        language = 'YAML';
    }
    return  (
        <div className="max-w-2xl mx-auto my-8">
            <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                    <pre className="rounded bg-gray-900 p-4 overflow-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-100">
                        <code className={`language-${language}`}>{code}</code></pre>
                </div>
            </div>
        </div>
        )
    ;
}
;
export default CodeDisplayPanel;
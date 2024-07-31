/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\ui\HTMLPanel.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import React from 'react';

type HTMLPanelProps = { 
    htmlContent: string;
    className?: string;
};

const HTMLPanel: React.FC<HTMLPanelProps> = ({
    htmlContent
 }) => {
    return  (
        <div className="max-w-2xl mx-auto my-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 border-b">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Contenuto HTML</h2>
                </div>
                <div className="p-4">
                    <div className="bg-gray-50 border border-gray-200 rounded p-4 overflow-auto max-h-96">
                        <pre className="code-prettyprint prettyprint source" dangerouslySetInnerHTML={{
                                __html: htmlContent
                             }} />
                    </div>
                </div>
            </div>
        </div>
        )
    ;
}
;
export default HTMLPanel;
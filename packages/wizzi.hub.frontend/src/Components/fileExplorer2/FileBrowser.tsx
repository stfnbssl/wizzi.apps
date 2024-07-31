/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\fileExplorer2\FileBrowser.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import {PackiEntry} from "@/Api/types";
import CodeDisplayPanel from '@/Components/ui/CodeDisplayPanel';
import "./wizzi-prettyprint.css";

interface FileBrowserProps {
    entry: PackiEntry;
}

const FileBrowser: React.FC<FileBrowserProps> = ({
    entry
 }) => {
    const {
        uri, 
        contents
     } = entry;
    if (contents && contents.length > 0) {
        if (uri.endsWith('.ittf')) {
            return  (
                <div className="flex-1 flex py-1 items-center justify-between">
                    <pre className="flex-1 code-prettyprint prettyprint source overflow-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-100" dangerouslySetInnerHTML={{
                            __html: contents
                         }} />
                </div>
                )
            ;
        }
        else {
            return  (
                <CodeDisplayPanel code={ contents } filePath={ uri } />
                )
            ;
        }
    }
    else {
        return  (
            <div className="flex-1 flex py-1 items-center justify-between" />
            )
        ;
    }
}
;

export default FileBrowser;
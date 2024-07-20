/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\MetaErrorView.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import {ErrorView} from "@/Components/utils/ErrorView";
import {MainContent, MainContentLeftBar, MainContentWorkArea, MainFooter, MainHeader} from "@/Components/shell/index";
type MetaErrorViewProps = { 
    error: any;
};
export function MetaErrorView(params: MetaErrorViewProps) {
    return  (
        <>
            <MainHeader />
            <MainContent>
                <MainContentLeftBar />
                <MainContentWorkArea>
                    <ErrorView error={params.error} />
                </MainContentWorkArea>
            </MainContent>
            <MainFooter />
        </>
        )
    ;
}

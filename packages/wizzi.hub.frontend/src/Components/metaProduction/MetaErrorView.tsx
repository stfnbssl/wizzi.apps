/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\MetaErrorView.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
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

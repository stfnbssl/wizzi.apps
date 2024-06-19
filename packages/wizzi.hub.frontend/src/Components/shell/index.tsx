/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\shell\index.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {UserNavBar} from '@/Components/nav/UserNavBar';
import {FullPage} from './FullPage';
import {MainContent} from './MainContent';
import {MainContentLeftBar} from './MainContentLeftBar';
import {MainContentWorkArea} from './MainContentWorkArea';
import {MainFooter} from './MainFooter';
import {MainHeader} from './MainHeader';
/**
    // Shell is an example
    // It goes inside the App component
*/
function Shell(params) {
    return  (
        <FullPage>
            <MainHeader>
                <UserNavBar loggedUserId={undefined} />
            </MainHeader>
            <MainContent>
                <MainContentLeftBar />
                <MainContentWorkarea />
            </MainContent>
            <MainFooter />
        </FullPage>
        )
    ;
}
export {FullPage, MainContent, MainContentLeftBar, MainContentWorkArea, MainFooter, MainHeader};
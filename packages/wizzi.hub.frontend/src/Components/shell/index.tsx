/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\shell\index.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import {UserNavBar} from '@/Components/nav/UserNavBar';
import {FullPage} from './FullPage';
import {MainContent} from './MainContent';
import {MainContentLeftBar} from './MainContentLeftBar';
import {MainContentWorkArea} from './MainContentWorkArea';
import {MainFooter} from './MainFooter';
import {MainHeader} from './MainHeader';
export /**
    // Shell is an example
    // It goes inside the App component
*/
function Shell() {
    return  (
        <FullPage>
            <MainHeader>
                <UserNavBar loggedUserId={undefined} />
            </MainHeader>
            <MainContent>
                <MainContentLeftBar />
                <MainContentWorkArea />
            </MainContent>
            <MainFooter />
        </FullPage>
        )
    ;
}
export {FullPage, MainContent, MainContentLeftBar, MainContentWorkArea, MainFooter, MainHeader};
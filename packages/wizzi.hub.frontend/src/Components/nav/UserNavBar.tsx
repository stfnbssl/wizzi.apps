/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\nav\UserNavBar.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import {MenuItem} from "./MenuItem";
type UserNavBarProps = { 
    loggedUserId?: string;
};
export function UserNavBar(params: UserNavBarProps) {
    return  (
        <>
            <div className="flex items-center justify-between">
                <MenuItem label="Docs" href="/ittf/site/docs/concepts/overview.html.ittf" />
                <MenuItem label="Github" href="https://github.com/stfnbssl/wizzi" />
            </div>
            {
                params.loggedUserId ?  (
                    <div className="flex">
                        <MenuItem label="Profile" href="/account/profile" />
                        <MenuItem label="Log out" href="/auth/logout" />
                    </div>
                    )
                 :  (
                    <div className="flex">
                        <MenuItem label="Log in" href="/auth/login" />
                    </div>
                    )
                
            }
        </>
        )
    ;
}

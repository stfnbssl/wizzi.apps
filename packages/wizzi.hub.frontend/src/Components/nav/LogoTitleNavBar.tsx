/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\nav\LogoTitleNavBar.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import wizziLogo from '@/Assets/wizzi.svg';
type LogoTitleNavBarProps = { 
    title: string;
};
export function LogoTitleNavBar(params: LogoTitleNavBarProps) {
    return  (
        <div className="flex items-center">
            <img src={wizziLogo} className="w-36 h-9" alt="The Wizzi Factory" />
            <span className="mx-2 text-2xl font-semibold text-white">{params.title}</span></div>
        )
    ;
}

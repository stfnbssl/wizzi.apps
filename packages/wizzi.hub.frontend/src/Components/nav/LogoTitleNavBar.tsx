/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\nav\LogoTitleNavBar.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
type LogoTitleNavBarProps = { 
    title: string;
};
export function LogoTitleNavBar(params: LogoTitleNavBarProps) {
    return  (
        <div className="menu-header">
            <a href='/'>
                <div className="logo-box" />
            </a>
            <div className="flex-row">
                <div className="menu-header-title-slash">
                     / </div>
                <div className="menu-header-title">
                    {params.title}</div>
            </div>
        </div>
        )
    ;
}

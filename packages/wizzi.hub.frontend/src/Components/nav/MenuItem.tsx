/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\nav\MenuItem.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
type MenuItemProps = { 
    label: string;
    href: string;
    isSelected?: boolean;
    className?: string;
    classInverseName?: string;
};
export function MenuItem(params: MenuItemProps) {
    if (params.isSelected) {
        return  (
            <div className="menu-item">
                <div className={params.classInverseName}>
                    {params.label}</div>
            </div>
            )
        ;
    }
    else {
        return  (
            <div className="menu-item">
                <a className={params.className} href={params.href}>{params.label}</a></div>
            )
        ;
    }
}

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\nav\MenuItem.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
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

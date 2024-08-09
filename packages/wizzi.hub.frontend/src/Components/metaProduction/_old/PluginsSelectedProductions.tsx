/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\_old\PluginsSelectedProductions.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import React from "react";
import {MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
type PluginsSelectedProductionsProps = { 
    metaSelectionState: MetaSelectionState;
    onUnselect: (production: string) => void;
    listClass?: string;
};
export function PluginsSelectedProductions(params: PluginsSelectedProductionsProps) {
    const {
        metaSelectionState, 
        onUnselect
     } = params;
    const {
        productionsSelected
     } = metaSelectionState;
    return  (
        <div className={'w-area-list w-area-list-cats-prods ' + params.listClass ? params.listClass : ''}>
            <div className="w-area-list-caption">
                Selected productions</div>
            <div className="w-area-list-inner">
                <ul>
                    {
                        productionsSelected && productionsSelected.map((item, ndx) => 
                             (
                            <React.Fragment key={ndx}>
                                <li>
                                    <div onClick={() => 
                                            onUnselect(item.name)
                                    }>
                                        {item.name}</div>
                                </li>
                            </React.Fragment>
                            )
                        
                        )
                    }
                </ul>
            </div>
        </div>
        )
    ;
}

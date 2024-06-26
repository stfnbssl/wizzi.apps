/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\PluginsSelectedCategories.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React from "react";
import {MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
type PluginsSelectedCategoriesProps = { 
    metaSelectionState: MetaSelectionState;
    onUnselect: (production: string) => void;
};

export function PluginsSelectedCategories(params: PluginsSelectedCategoriesProps) {
    const {
        metaSelectionState
     } = params;
    const {
        categoriesSelected
     } = metaSelectionState;
    return  (
        <div className="w-area-list w-area-list-cats-prods">
            <div className="w-area-list-caption">
                Selected categories</div>
            <div className="w-area-list-inner">
                <ul>
                    {
                        categoriesSelected && categoriesSelected.map((item, ndx) => 
                             (
                            <React.Fragment key={ndx}>
                                <li>
                                    <div onClick={() => {
                                            params.onUnselect(item.name)
                                            return ;
                                        }
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

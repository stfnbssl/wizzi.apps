/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\_old\PluginsAvailableCategories.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import React, {useState} from "react";
import {SearchView} from "@/Components/utils/SearchView";
import * as _ from "@/Utils/underscore2";
import {MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
type PluginsAvailableCategoriesProps = { 
    metaSelectionState: MetaSelectionState;
    onSelect: (category: string) => void;
};
export function PluginsAvailableCategories(params: PluginsAvailableCategoriesProps) {
    const {
        metaSelectionState, 
        onSelect
     } = params;
    const {
        categoriesUnselected
     } = metaSelectionState;
    if (!categoriesUnselected) {
        return  (
            <div className="w-area-list w-area-list-cats-prods" />
            )
        ;
    }
    const [searchText, setSearchText] = useState('');
    const catsFiltered = _.sortFilter(categoriesUnselected, {
        sort: {
            ascending: true, 
            keyName: 'name'
         }, 
        filter: {
            searchText: searchText, 
            keyName: 'name'
         }
     });
    return  (
        <div className="w-area-list w-area-list-cats-prods">
            <div className="w-area-list-caption">
                Available categories</div>
            <SearchView className="w-area-list-search"
                placeholder="search category..."
                value={searchText}
                onChange={value => 
                        setSearchText(value)
                }
             />
            <div className="w-area-list-inner">
                <ul>
                    {
                        catsFiltered && catsFiltered.map((item, ndx) => 
                             (
                            <React.Fragment key={ndx}>
                                <li>
                                    <div onClick={() => {
                                            onSelect(item.name)
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

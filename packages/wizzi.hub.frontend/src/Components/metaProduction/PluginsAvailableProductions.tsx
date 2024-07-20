/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\PluginsAvailableProductions.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import React, {useState} from "react";
import {SearchView} from "@/Components/utils/SearchView";
import {MetaProductionExt} from "@/Api/types";
import * as _ from "@/Utils/underscore2";
import {MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
type PluginsAvailableProductionsProps = { 
    metaSelectionState: MetaSelectionState;
    onSelect: (production: string) => void;
};
export function PluginsAvailableProductions(params: PluginsAvailableProductionsProps) {
    const {
        metaSelectionState, 
        onSelect
     } = params;
    const {
        productionsUnselected, 
        categoriesSelected
     } = metaSelectionState;
    if (!(productionsUnselected && categoriesSelected)) {
        return  (
            <div className="w-area-list w-area-list-cats-prods" />
            )
        ;
    }
    const [searchText, setSearchText] = useState('');
    var availables = productionsUnselected.filter(p => 
        (p as MetaProductionExt).categories.forEach((c) => {
            var matches = categoriesSelected.filter((csel) => {
                return csel.name == c.name;
            }
            );
            if (matches.length > 0) {
                return true;
            }
            return false;
        }
        )
    );
    const availablesFiltered = _.sortFilter(availables, {
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
                Available productions</div>
            <SearchView className="w-area-list-search"
                placeholder="search production..."
                value={searchText}
                onChange={value => 
                        setSearchText(value)
                }
             />
            <div className="w-area-list-inner">
                <ul>
                    {
                        availablesFiltered && availablesFiltered.map((item, ndx) => 
                             (
                            <React.Fragment key={ndx}>
                                <li>
                                    <div onClick={() => 
                                            onSelect(item.name)
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

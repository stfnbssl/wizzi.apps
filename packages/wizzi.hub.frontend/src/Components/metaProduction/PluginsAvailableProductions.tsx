/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\PluginsAvailableProductions.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React from "react";
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
    const [searchText, setSearchText] = useState('');
    var availables = productionsUnselected.filter(function(p) {
        var i, i_items=p.categories, i_len=p.categories.length, c;
        for (i=0; i<i_len; i++) {
            c = p.categories[i];
            var matches = categoriesSelected.filter(function(csel) {
                return csel.name == c.name;
            });
            if (matches.length > 0) {
                return true;
            }
        }
        return false;
    });
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

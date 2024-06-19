/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\GenericSelectionList.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React from "react";
import {StringKeyedObject} from "@/Data/types";
import {SearchView} from "@/Components/utils/SearchView";
type GenericSelectionListProps = { 
    title: string;
    listClass?: string;
    selectedableItems: StringKeyedObject[];
    searchViewPlaceholder?: string;
    searchText?: string;
    onSelect?: (name: string) => void;
    onUnselect?: (name: string) => void;
    onSearchTextChanged?: (text: string) => void;
};
// see api.mvc.SelectableCollection
export function GenericSelectionList(params: GenericSelectionListProps) {
    const {
        title, 
        selectedableItems, 
        searchViewPlaceholder, 
        searchText, 
        onSelect, 
        onUnselect, 
        onSearchTextChanged
     } = params;
    return  (
        <div className={'w-area-list w-area-list-cats-prods ' + (params.listClass ? params.listClass : '')}>
            <div className="w-area-list-caption">
                {title}</div>
            {
                searchViewPlaceholder && searchViewPlaceholder.length > 0 &&  (
                    <SearchView className="w-area-list-search"
                        placeholder={searchViewPlaceholder}
                        value={searchText}
                        onChange={(value: string) => {
                                if (onSearchTextChanged) {
                                    onSearchTextChanged(value);
                                }
                            }
                        }
                     />
                    )
                
            }
            <div className="w-area-list-inner">
                <ul>
                    {
                    selectedableItems.map((item, ndx) => 
                         (
                        <React.Fragment key={ndx}>
                            <li>
                                <div onClick={() => {
                                        if (onUnselect) {
                                            onUnselect(item.name)
                                        }
                                        if (onSelect) {
                                            onSelect(item.name)
                                        }
                                    }
                                }>
                                    {item.name}</div>
                            </li>
                        </React.Fragment>
                        )
                    
                    )}</ul>
            </div>
        </div>
        )
    ;
}
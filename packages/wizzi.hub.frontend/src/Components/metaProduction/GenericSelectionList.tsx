/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\GenericSelectionList.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import React from "react";
import {StringKeyedObject} from "@/Data/types";
import {SearchView} from "@/Components/utils/SearchView";
type GenericSelectionListProps = { 
    title: string;
    listClass?: string;
    selectableItems: StringKeyedObject[];
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
        selectableItems, 
        searchViewPlaceholder, 
        searchText, 
        onSelect, 
        onUnselect, 
        onSearchTextChanged
     } = params;
    return  (
        <div className={'h-full flex-1 flex flex-col bg-gray-700 text-zinc-200 rounded-lg shadow-md border-r border-gray-100 ' + (params.listClass ? params.listClass : '')}>
            <div className="p-1 bg-gray-800 text-xs text-center">
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
            <div className="m-1 p-2 flex-grow overflow-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-100">
                <ul>
                    {
                    selectableItems.map((item, ndx) => 
                         (
                        <React.Fragment key={ndx}>
                            <li>
                                <div className="cursor-pointer" onClick={() => {
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
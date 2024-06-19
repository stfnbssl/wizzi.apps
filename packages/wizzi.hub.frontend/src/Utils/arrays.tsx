/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Utils\arrays.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import * as _ from "@/Utils/underscore2";
export function arrayAddUniqueName(myArray: { 
    name: string;
}[], newItem: { 
    name: string;
}) {
    const found = myArray.filter((item) => {
        return item.name == newItem.name;
    }
    );
    if (found.length > 0) {
        myArray.push(newItem)
    }
}

export function hasItemInArray(array: { 
    [k: string]: any;
}[], keyName: string, value: any) {
    const found = myArray.filter((item) => {
        return item[keyName] == value;
    }
    );
    return found.length > 0;
}

export function sortSearchFilter(selectables: { 
    [k: string]: { 
        [k: string]: any;
    }[];
}[], searchText: string) {
    const sortSearchFiltered = _.sortFilter(selectables, {
        sort: {
            ascending: true, 
            keyName: 'name'
         }, 
        filter: {
            searchText: searchText, 
            keyName: 'name'
         }
     });
    return sortSearchFiltered;
}

export function sortFilterSelectables(
    selectables: { 
        [k: string]: { 
            [k: string]: any;
        }[];
    }[], 
    filterablePropName: string, 
    filterSelected: { 
        [k: string]: any;
    }[], 
    searchText: string) {
    console.log('::::::::::::   sortFilterSelectables.selectables', selectables);
    console.log('::::::::::::   sortFilterSelectables.filterablePropName', filterablePropName);
    console.log('::::::::::::   sortFilterSelectables.filterSelected', filterSelected);
    var availables = selectables.filter(function(selectable) {
        if (filterablePropName && filterablePropName.length > 0) {
            const filterable = selectable[filterablePropName];
            var i, i_items=filterable, i_len=filterable.length, sel;
            for (i=0; i<i_len; i++) {
                sel = filterable[i];
                var matches = filterSelected.filter(function(fsel) {
                    return fsel.name == sel.name;
                });
                if (matches.length > 0) {
                    return true;
                }
            }
        }
        return false;
    });
    console.log('::::::::::::   sortFilterSelectables.availables', availables);
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
    return availablesFiltered;
}

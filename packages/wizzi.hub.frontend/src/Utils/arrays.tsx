/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Utils\arrays.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
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
    if (found.length == 0) {
        myArray.push(newItem)
    }
}

export function hasItemInArray(myArray: { 
    [k: string]: any;
}[], keyName: string, value: any):  boolean {
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
    console.log('Utils.arrays.sortFilterSelectables.selectables', selectables);
    console.log('Utils.arrays.sortFilterSelectables.filterablePropName', filterablePropName);
    console.log('Utils.arrays.sortFilterSelectables.filterSelected', filterSelected);
    var availables = selectables.filter(function(selectable) {
        let found = false;
        if (filterablePropName && filterablePropName.length > 0) {
            const filterable = selectable[filterablePropName];
            if (filterable) {
                filterable.forEach((sel) => {
                    var matches = filterSelected.filter(function(fsel) {
                        return fsel.name == sel.name;
                    });
                    if (matches.length > 0) {
                        found = true;
                    }
                }
                )
            }
        }
        return found;
    });
    console.log('Utils.arrays.sortFilterSelectables.availables', availables);
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

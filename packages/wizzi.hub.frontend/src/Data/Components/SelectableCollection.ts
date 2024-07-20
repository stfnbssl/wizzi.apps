/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Data\Components\SelectableCollection.ts.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import * as _ from "@/Utils/underscore2";
import {StringKeyedObject, SelectableItem} from "../types";
//
// filtering works filtering out, but you can force filtering in
// sort is applyed by default, but you can force stopSort/startSort
export class SelectableCollection {
    constructor(items: StringKeyedObject[], selectedItems: StringKeyedObject[], keyName: string) {
        if (!items || !_.isArray(items)) {
            throw new Error('The "items" parameter is required and must be an array. selectable items collections.');
        }
        if (!selectedItems || !_.isArray(selectedItems)) {
            throw new Error('The "selectedItems" parameter is required and must be an array. selected items collections.');
        }
        this.items = [];
        this.keyName = keyName;
        this.filterExcludeArray = [];
        this.filterIncludeArray = [];
        this.isSortActive = true;
        this.searchText = '';
        items.forEach((item) => {
            const testSelected = selectedItems.filter((selItem) => {
                if (keyName) {
                    return item[keyName] == selItem[keyName];
                }
                else {
                    return item == selItem;
                }
            }
            );
            this.items.push({
                itemValue: item, 
                selected: testSelected.length > 0, 
                keyValue: !keyName ? item : item[keyName]
             })
        }
        )
    }
    isSortActive: boolean;
    keyName: string;
    items: SelectableItem[];
    searchText: string;
    filterExcludeArray: { 
        [key: string]: any;
    }[];
    filterIncludeArray: { 
        [key: string]: any;
    }[];
    select(keyValue: string):  void {
        this.items.forEach((item) => {
            if (item.keyValue == keyValue) {
                item.selected = true;
            }
        }
        )
    }
    unSelect(keyValue: string):  void {
        this.items.forEach((item) => {
            if (item.keyValue == keyValue) {
                item.selected = false;
            }
        }
        )
    }
    getItems():  StringKeyedObject[] {
        const retval: StringKeyedObject[] = [];
        this.items.forEach(item => 
            retval.push(item.itemValue)
        )
        return retval;
    }
    getSelected():  StringKeyedObject[] {
        let retval: StringKeyedObject[] = [];
        this.getFiltered().forEach((item) => {
            if (item.selected) {
                retval.push(item.itemValue)
            }
        }
        )
        retval = _.sortFilter(retval, {
            sort: {
                ascending: true, 
                keyName: (this.isSortActive ? this.keyName : undefined)
             }, 
            filter: {
                searchText: '', 
                keyName: this.keyName
             }
         })
        ;
        return retval;
    }
    getUnselected():  StringKeyedObject[] {
        let retval: StringKeyedObject[] = [];
        this.getFiltered().forEach((item) => {
            if (!item.selected) {
                retval.push(item.itemValue)
            }
        }
        )
        retval = _.sortFilter(retval, {
            sort: {
                ascending: true, 
                keyName: (this.isSortActive ? this.keyName : undefined)
             }, 
            filter: {
                searchText: this.searchText || '', 
                keyName: this.keyName
             }
         })
        ;
        return retval;
    }
    // defaults to filter out
    setFilter(filterArray: StringKeyedObject[]):  void {
        this.setFilterExclude(filterArray)
    }
    setFilterExclude(filterArray: StringKeyedObject[]):  void {
        this.filterExcludeArray = filterArray;
    }
    setFilterInclude(filterArray: StringKeyedObject[]):  void {
        this.filterIncludeArray = filterArray;
    }
    // defaults to filter out
    addFilter(filterArray: StringKeyedObject[]):  void {
        this.addFilterExclude(filterArray)
    }
    addFilterExclude(filterArray: StringKeyedObject[] | StringKeyedObject):  void {
        if (_.isArray(filterArray)) {
            this.filterExcludeArray = this.filterExcludeArray.concat(filterArray);
        }
        else {
            this.filterExcludeArray.push(filterArray)
        }
    }
    addFilterInclude(filterArray: StringKeyedObject[] | StringKeyedObject):  void {
        if (_.isArray(filterArray)) {
            this.filterIncludeArray = this.filterIncludeArray.concat(filterArray);
        }
        else {
            this.filterIncludeArray.push(filterArray)
        }
    }
    // defaults to filter out
    resetFilter():  void {
        this.resetFilterExclude();
    }
    resetFilterExclude():  void {
        this.filterExcludeArray = [];
    }
    resetFilterInclude():  void {
        this.filterIncludeArray = [];
    }
    isFiltered(item: SelectableItem):  boolean {
        let retval = false;
        this.filterExcludeArray.forEach((f) => {
            if (item.keyValue == f[this.keyName]) {
                retval = true;
            }
        }
        )
        this.filterIncludeArray.forEach((f) => {
            if (item.keyValue == f[this.keyName]) {
                retval = false;
            }
        }
        )
        return retval;
    }
    getFiltered():  SelectableItem[] {
        const filtered: SelectableItem[] = this.items.filter((item) => {
            return this.isFiltered(item) == false;
        }
        );
        return filtered;
    }
    stopSort():  void {
        this.isSortActive = false;
    }
    startSort():  void {
        this.isSortActive = true;
    }
    setSearchText(searchText: string):  void {
        this.searchText = searchText;
    }
    setItems(items: StringKeyedObject[]):  void {
        const selectedItems: StringKeyedObject[] = this.getSelected();
        const keyName = this.keyName;
        const newItems: SelectableItem[] = [];
        items.forEach((item) => {
            const testSelected = selectedItems.filter((selItem) => {
                if (keyName) {
                    return item[keyName] == selItem[keyName];
                }
                else {
                    return item == selItem;
                }
            }
            );
            newItems.push({
                itemValue: item, 
                selected: testSelected.length > 0, 
                keyValue: !keyName ? item : item[keyName]
             })
        }
        )
        this.items = newItems;
    }
    static __counter: number = 0;
    static __db: { 
        [key: string]: InstanceType<typeof SelectableCollection>;
    } = {};
    static create(items: StringKeyedObject[], selectedItems: StringKeyedObject[], keyName: string):  string {
        if (!items || !_.isArray(items)) {
            throw new Error('The "items" parameter is required and must be an array. selectable items collections.');
        }
        if (!selectedItems || !_.isArray(selectedItems)) {
            throw new Error('The "selectedItems" parameter is required and must be an array. selected items collections.');
        }
        const selId = 'SelId' + ++SelectableCollection.__counter;
        SelectableCollection.__db[selId] = new SelectableCollection(items, selectedItems, keyName);
        return selId;
    }
    static get(selId: string):  InstanceType<typeof SelectableCollection> {
        return SelectableCollection.__db[selId];
    }
    static getEmpty():  InstanceType<typeof SelectableCollection> {
        let retval: InstanceType<typeof SelectableCollection> = SelectableCollection.__db['__empty__'];
        if (!retval) {
            retval = SelectableCollection.__db['__empty__'] = new SelectableCollection([], [], 'dummy');
        }
        return retval;
    }
    static drop(selId: string):  void {
        delete SelectableCollection.__db[selId]
    }
}

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Data\Components\LocalObjectStore.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {LocalStorageItem} from "../types";
import {LocalCollectionStore} from "./LocalCollectionStore";
/**
    * 
    * Creates a new client side local storage object plus collection
    * and will create an empty object and collection if no one already exist.
    * 
    * @param {string} name The name of our DB we want to use
    * @param {function} callback Our local storage DB uses callbacks
    * 
*/
export class LocalObjectStore {
    constructor(name: string) {
        this.dbName = name;
        this.itemColl = new LocalCollectionStore(name + '_objColl');
        if (!localStorage.getItem(name)) {
            var itemObj = {};
            localStorage.setItem(name, JSON.stringify(itemObj));
        }
    }
    dbName: string;
    itemColl: InstanceType<typeof LocalCollectionStore>;
    /**
        * 
        * Set an object property value
        * 
        * @param {string} name The property name
        * @param {string} value The property value
        * @return {object} Returns the entire saved object
        * 
    */
    setValue(name: string, value: any):  LocalStorageItem {
        var itemObj: LocalStorageItem = JSON.parse(localStorage.getItem(this.dbName) || '{}');
        itemObj[name] = value;
        localStorage.setItem(this.dbName, JSON.stringify(itemObj));
        return itemObj;
    }
    // log 'api.LocalObjectStore.getValue', name, defaultValue, name in itemObj, itemObj
    /**
        * 
        * Get an object property value
        * 
        * @param {string} [name] The property name
        * @param {string} [defaultValue] Optional.
        * -               The value to set if the value of name is missing
        * @return {any} The property value or defaultValue or null
        * 
    */
    getValue(name: string, defaultValue?: any):  any {
        var itemObj: LocalStorageItem = JSON.parse(localStorage.getItem(this.dbName) || '{}');
        // log 'api.LocalObjectStore.getValue.return', itemObj[name]
        if (name in itemObj) {
            return itemObj[name];
        }
        // log 'api.LocalObjectStore.getValue.return', defaultValue
        else if (typeof(defaultValue) != 'undefined') {
            return defaultValue;
        }
        // log 'api.LocalObjectStore.getValue.return', null
        else {
            return null;
        }
    }
    /**
        * 
        * Finds object items based on a query given as a JS object
        * 
        * @param {object} query The query to match against (i.e. {foo: 'bar'})
        * @param {function} callback	 The callback to fire when the query has
        * completed running
        * 
        * @example
        * db.find({foo: 'bar', hello: 'world'}, function (data) {
        * // data will return any items that have foo: bar and
        * // hello: world in their properties
        * });
        * 
    */
    find(query: { 
        [key: string]: any;
    }, callback: (items: LocalStorageItem[]) => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: LocalObjectStore.find.');
        }
        this.itemColl.find(query, callback)
    }
    /**
        * 
        * Will retrieve all data from the object items collection
        * 
        * @param {function} callback The callback to fire upon retrieving data
        * 
    */
    findAll(callback: (items: LocalStorageItem[]) => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: LocalObjectStore.findAll.');
        }
        this.itemColl.findAll(callback)
    }
    // log 'api.LocalObjectStore.prototype.save', id, updateData
    /**
        * 
        * Will save the given data to the object items. If no item exists it will create a new
        * item, otherwise it'll simply update an existing item's properties
        * 
        * @param {object} updateData The data to save back into the DB
        * @param {function} callback The callback to fire after saving
        * @param {number} id An optional param to enter an ID of an item to update
        * 
    */
    save(updateData: LocalStorageItem, id: string, callback: (items: LocalStorageItem[]) => void) {
        callback = callback || function() {
        };
        this.itemColl.save(updateData, id, callback)
    }
    /**
        * 
        * Will remove an item from the object items
        * 
        * @param {number} id The ID of the item you want to remove
        * @param {function} callback The callback to fire after saving
        * 
    */
    remove(id: string, callback: (items: LocalStorageItem[]) => void) {
        callback = callback || function() {
        };
        this.itemColl.remove(id, callback)
    }
    /**
        * 
        * Will drop all object items
        * 
        * @param {function} callback The callback to fire after dropping the data
        * 
    */
    drop(callback: (items: LocalStorageItem[]) => void) {
        callback = callback || function() {
        };
        this.itemColl.drop(callback)
    }
    /**
        * 
        * Will replace the entire items collection
        * 
        * @param {array} [items] new items collection
        * @param {function} callback The callback to fire after replacing the data
        * 
    */
    replace(items: LocalStorageItem[], callback: (items: LocalStorageItem[]) => void) {
        callback = callback || function() {
        };
        this.itemColl.replace(items, items => 
            callback(items)
        )
    }
}

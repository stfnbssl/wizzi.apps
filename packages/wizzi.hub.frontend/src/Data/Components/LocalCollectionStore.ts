/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Data\Components\LocalCollectionStore.ts.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import {LocalStorageItem} from "../types";
/**
    * 
    * Creates a new client side local storage object and will create an empty
    * collection if no collection already exists.
    * 
    * @param {string} name The name of our DB we want to use
    * @param {function} callback Our local storage DB uses callbacks
    * 
*/
export class LocalCollectionStore {
    constructor(name: string) {
        this.dbName = name;
        let items: LocalStorageItem[] = [];
        let itemsString = localStorage.getItem(name);
        if (!itemsString) {
            localStorage.setItem(name, JSON.stringify(items));
        }
        else {
            try {
                items = JSON.parse(itemsString);
            } 
            catch (ex) {
                items = [];
                localStorage.setItem(name, JSON.stringify(items));
            } 
        }
    }
    dbName: string;
    /**
        * 
        * Finds items based on a query given as a JS object
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
            throw new Error('The callback parameter is required. Method: LocalCollectionStore.find.');
        }
        var items: LocalStorageItem[] = JSON.parse(localStorage.getItem(this.dbName) || '[]');
        callback.call(this, items.filter(function(item) {
            for (var q in query) {
                if (query[q] !== item[q]) {
                    return false;
                }
            }
            return true;
        }))
    }
    /**
        * 
        * Will retrieve all data from the collection
        * 
        * @param {function} callback The callback to fire upon retrieving data
        * 
    */
    findAll(callback: (items: LocalStorageItem[]) => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: LocalCollectionStore.findAll.');
        }
        var items: LocalStorageItem[] = JSON.parse(localStorage.getItem(this.dbName) || '[]');
        callback.call(this, items);
    }
    /**
        * 
        * Will save the given data to the DB. If no item exists it will create a new
        * item, otherwise it'll simply update an existing item's properties
        * 
        * @param {object} updateData The data to save back into the DB
        * @param {function} callback The callback to fire after saving
        * @param {number} id An optional param to enter an ID of an item to update
        * 
    */
    save(updateData: LocalStorageItem, id: string | null, callback: (items: LocalStorageItem[]) => void) {
        callback = callback || function() {
        };
        var items: LocalStorageItem[] = JSON.parse(localStorage.getItem(this.dbName) || '[]');
        // If an ID was actually given, find the item and update each property
        if (id) {
            var matched = false;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    matched = true;
                    for (var key in updateData) {
                        items[i][key] = updateData[key];
                    }
                    break;
                }
            }
            if (!matched) {
                // Generate an ID
                updateData.id = id;
                items.push(updateData);
            }
            localStorage.setItem(this.dbName, JSON.stringify(items));
            callback.call(this, items);
        }
        else {
            // Generate an ID
            updateData.id = new Date().getTime();
            items.push(updateData);
            localStorage.setItem(this.dbName, JSON.stringify(items));
            callback.call(this, items)
        }
    }
    /**
        * 
        * Will remove an item from the LocalCollectionStore based on its ID
        * 
        * @param {number} id The ID of the item you want to remove
        * @param {function} callback The callback to fire after saving
        * 
    */
    remove(id: string, callback: (items: LocalStorageItem[]) => void) {
        callback = callback || function() {
        };
        var items: LocalStorageItem[] = JSON.parse(localStorage.getItem(this.dbName) || '[]');
        for (var i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items.splice(i, 1);
                break;
            }
        }
        localStorage.setItem(this.dbName, JSON.stringify(items));
        callback.call(this, items);
    }
    /**
        * 
        * Will drop all storage and start fresh
        * 
        * @param {function} callback The callback to fire after dropping the data
        * 
    */
    drop(callback: (items: LocalStorageItem[]) => void) {
        callback = callback || function() {
        };
        var items: LocalStorageItem[] = [];
        localStorage.setItem(this.dbName, JSON.stringify(items));
        callback.call(this, items);
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
        localStorage.setItem(this.dbName, JSON.stringify(items));
        callback.call(this, items);
    }
}

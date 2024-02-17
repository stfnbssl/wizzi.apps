/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\storage\backends.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
import cookies from 'js-cookie';
import {IStorageBackend} from './types';
export default class StorageHandler implements IStorageBackend {
        constructor(namespace?: string, storageBackend?: string) {
            this._namespace = namespace ?? '';
            switch (storageBackend) {
                case 'localstorage': {
                    try {
                        this._storageBackend = window.localStorage;
                    } 
                    catch (e) {
                        this._storageBackend = new CookieStorage();
                    } 
                    break;
                }
                case 'cookie': {
                    this._storageBackend = new CookieStorage();
                    break;
                }
                case 'dummy': {
                    this._storageBackend = new DummyStorage();
                    break;
                }
            }
        }
        _storageBackend: IStorageBackend | null = null;
        _namespace: string;
        getItem(key: string) {
            try {
                return this.storageBackend.getItem(this._getKey(key));
            } 
            catch (e) {
                this._failover();
                return this.storageBackend.getItem(this._getKey(key));
            } 
        }
        removeItem(key: string) {
            try {
                this.storageBackend.removeItem(this._getKey(key));
            } 
            catch (e) {
                this._failover();
                this.storageBackend.removeItem(this._getKey(key));
            } 
        }
        setItem(key: string, value: string, options?: object) {
            try {
                this.storageBackend.setItem(this._getKey(key), value, options);
            } 
            catch (e) {
                this._failover();
                this.storageBackend.setItem(this._getKey(key), value, options);
            } 
        }
        _getKey(key: string):  string {
            return `${this._namespace}.${key}`;
        }
        _failover() {
            if (this.storageBackend instanceof DummyStorage) {
                console.warn('DummyStorage: ignore failover');
            }
            else {
                if (this.storageBackend instanceof CookieStorage) {
                    console.warn('CookieStorage: failing over DummyStorage');
                    this.storageBackend = new DummyStorage();
                }
                else {
                    console.warn('LocalStorage: failing over CookieStorage');
                    this.storageBackend = new CookieStorage();
                }
            }
        }
        get storageBackend():  IStorageBackend {
            if (this._storageBackend) {
                return this._storageBackend;
            }
            this._storageBackend = window.localStorage || new CookieStorage();
            return this._storageBackend;
        }
        set storageBackend(storageBackend: IStorageBackend) {
            this._storageBackend = storageBackend;
        }
    }

class CookieStorage implements IStorageBackend {
    getItem(key: string):  string | undefined {
        return cookies.get(key);
    }
    removeItem(key: string):  void {
        cookies.remove(key);
    }
    setItem(key: string, value: string, options?: object) {
        cookies.set(key, value, options ?? {})
    }
}

class DummyStorage implements IStorageBackend {
    _storage: { 
        [key: string]: string;
    } = {};
    getItem(key: string):  string | null {
        return this._storage[key];
    }
    removeItem(key: string):  void {
        delete this._storage[key]
    }
    setItem(key: string, value: string) {
        this._storage[key] = value;
    }
}

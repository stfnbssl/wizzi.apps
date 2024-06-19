import { useEffect, useState } from "react";
import "../../tailwind.output.css";
import localData from "./data.json";
import { ParameterItem } from "./types";
import { ContextParameter } from "./ContextParameter";

const ParamsBuilderApp = () => {
    const [dataDefs, setDataDefs] = useState<ParameterItem[]>([]);
    const [values, setValues] = useState<string>("{}");
    useEffect(() => {
        setDataDefs(localData.definitions);
        const localStorageValues = localStorage.getItem("values");
        if (typeof(localStorageValues) == "string") {
            console.log('localStorageValues', localStorageValues);
            setValues(JSON.stringify(toObject(localData.definitions, JSON.parse(localStorageValues))));
        } else {
            setValues(JSON.stringify(toObject(localData.definitions, localData.values || {})));
        }
    }, [dataDefs]);
    useEffect(() => {
      if (values.length > 2) {
        localStorage.setItem("values", values);
        console.log('localStorageValues.setItem', values);
      }
    }, [values]);
    const valuesObject = JSON.parse(values);
    console.log('ParamsBuilderApp.render.values', valuesObject);
    return (
            <div className="w-area-list w-area-list-exec-params w-area-list-25">
                <div className="w-area-list-inner">
                {
                    dataDefs && dataDefs.length > 0 &&
                    (
                        <div>
                            <h2 className="text-xl font-semibold pb-4">Parameters</h2>
                            <div>
                                {
                                dataDefs.map((itemDef, ndx) =>  (
                                    <ContextParameter key={ndx} itemDef={itemDef} itemParent={valuesObject} onChange={()=>{
                                        // console.log("ParamsBuilderApp.onChange", valuesObject);
                                        setValues(JSON.stringify(valuesObject));
                                    }}></ContextParameter>
                                )
                                )}
                            </div>
                        </div>
                    )
                }
                    <div style={{
                        marginTop: '200px'
                     }}>
                        <code>
                            {values}
                        </code>
                    </div>
                </div>
            </div>
        )
    ;
}

export default ParamsBuilderApp;

export function toObject(parameters: ParameterItem[], parentValue: any): {[key: string]: any} {
    var retval: {[key: string]: any} = {};
    if (parameters) {
        parameters.map((p) => {
            // console.log("toObject", p.type, p.name, parentValue)
            if (p.type == 'use') {
                const useName = "use" + p.name[0].toUpperCase() + p.name.substring(1);
                let useOk = parentValue[useName];
                if (isBoolean(useOk) == false) {
                    if (isBoolean(p.defaultValue)) {
                        useOk = p.defaultValue;
                    } else {
                        useOk = false;
                    }
                }
                if (useOk) {
                    retval[useName] = true;
                    retval[p.name] = toObject(p.parameters || [], parentValue[p.name]);
                } else {
                    retval[useName] = false;
                    retval[p.name] = {}
                }
            } else if (p.type == 'object') {
                console.log("toObject", p.type, p.name, parentValue)
                retval[p.name] = toObject(p.parameters || [], parentValue[p.name]);
            } else if (p.type == 'array') {
                retval[p.name] = toArray(p, parentValue);
            } else if (p.type == 'string') {
                retval[p.name] = toString(p, parentValue);
            } else if (p.type == 'number') {
                retval[p.name] = toNumber(p, parentValue);
            } else if (p.type == 'boolean') {
                retval[p.name] = toBoolean(p, parentValue);
            } else {
                retval[p.name] = parentValue[p.name];
            }
        })
    }
    return retval;
}

export function toArray(definition: ParameterItem, parentValue: any): any[] {
    const retval: any[] = [];
    const items = parentValue ? parentValue[definition.name] : null;    
    if (Array.isArray(items) == false) { return retval }
    items.map((item) => {
        if (definition.parameters) {
            retval.push(toObject(definition.parameters, item));
        } else {
            retval.push(item);
        }
    });
    return retval;
}

export function toString(definition: ParameterItem, parentValue: any): string {
    let retval = parentValue ? parentValue[definition.name] : null;
    if (retval && typeof retval === 'string' && retval.length > 0) {
        return retval;
    }
    if (definition.defaultValue && typeof definition.defaultValue === 'string' && definition.defaultValue.length > 0) {
        return definition.defaultValue;
    }
    return "";
}

export function toBoolean(definition: ParameterItem, parentValue: any): boolean {
    let retval = parentValue ? parentValue[definition.name] : null;
    if (isBoolean(retval)) {
        return retval;
    }
    if (isBoolean(definition.defaultValue)) {
        return definition.defaultValue as boolean;
    }
    return false;
}

export function toNumber(definition: ParameterItem, parentValue: any): number {
    let retval = parentValue ? parentValue[definition.name] : null;
    if (isNumber(retval)) {
        return retval;
    }
    if (isNumber(definition.defaultValue)) {
        return definition.defaultValue as number;
    }
    return 0;
}

function isNumber(n: any) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
function isBoolean(b: any) { return typeof b === "boolean" || b === "true" || b === "false" }
import { useState } from 'react';
import { ParameterItem } from "./types";
import {ContextParameter} from "./ContextParameter";

interface UseParameterProps {
  itemDef: ParameterItem;
  itemParent: {[key: string]: any};
  onChange: () => void;
}

export default function UseParameter(props: UseParameterProps) {
  const { itemDef, itemParent, onChange } = props;
  const { name, label } = itemDef;
  const useName = "use" + name[0].toUpperCase() + name.substring(1);
  let useOk = itemParent[useName];
  const [editValue, setEditValue] = useState<boolean>(useOk);  
  console.log("UseParameter", name, itemParent[name])
  return (
    <div className="w-full py-2 border-b-2 border-gray-200">
      <div className="flex w-full max-w-xs">
        <div className="pl-4">use {label || name}</div>
        <div className="pl-4">
          <input type="checkbox" checked={editValue} onChange={event => {
                itemParent[useName] = event.target.checked;
                setEditValue(event.target.checked);
                onChange();
              }} className="shadow ml-5 py-2 focus:outline-none focus:shadow-outline">
          </input>
        </div>
      </div>
      <div className="pl-6">
        {   useOk &&
            itemDef.parameters ? itemDef.parameters.map((propDef, ndx) =>  (
              <ContextParameter key={ndx} itemDef={propDef} itemParent={itemParent[name]} onChange={onChange}></ContextParameter>
            )) : null
        }
      </div>
    </div>
  );
}
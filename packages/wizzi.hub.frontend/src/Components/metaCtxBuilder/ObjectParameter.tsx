// import { useState } from 'react';
import { ParameterItem } from "./types";
import { ContextParameter } from "./ContextParameter";

interface ObjectParameterProps {
  itemDef: ParameterItem;
  itemParent: {[key: string]: any};
  onChange: () => void;
}

export default function ObjectParameter(props: ObjectParameterProps) {
  const { itemDef, itemParent, onChange } = props;
  const { name, label, parameters: properties} = itemDef;
  // const [editValue, setEditValue] = useState<{[key: string]: any}>(itemParent[itemDef.name]);  
  console.log("ObjectParameter", props.itemDef, itemParent[itemDef.name]);
  return (
    <div className="flex w-full  py-2 border-b-2 border-gray-200">
        <div className="pl-4">{label || name}</div>
        <div className="pl-4">
        {
            properties ? properties.map((propDef, ndx) =>  (
              <ContextParameter key={ndx} itemDef={propDef} itemParent={itemParent[itemDef.name]} onChange={onChange}></ContextParameter>
            )) : null
        }
        </div>
    </div>
  );
}
import { useState } from 'react';
import { ParameterItem } from "./types";

interface EnumParameterProps {
  itemDef: ParameterItem;
  itemParent: {[key: string]: any};
  onChange: () => void;
}

export default function EnumParameter(props: EnumParameterProps) {
  const { itemDef, itemParent, onChange } = props;
  const { name, label, parameters: options } = itemDef;
  const [editValue, setEditValue] = useState<string>(itemParent[itemDef.name]);  
  return (
    <div className="flex w-full py-2 border-b-2 border-gray-200">
        <div className="pl-4">{label || name}</div>
        <div className="pl-4">
          <select onChange={event => {
              itemParent[itemDef.name] = event.target.value;
              setEditValue(event.target.value);
              onChange();
            }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="">"[none]"</option>
              { options && options.map(o => {
                return (<option value={o.name as string} selected={editValue == o.name}>{o.name}</option>)
              })
              }
          </select>
        </div>
    </div>
  );
}
import { useState } from 'react';
import { ParameterItem } from "./types";

interface BooleanParameterProps {
  itemDef: ParameterItem;
  itemParent: {[key: string]: any};
  onChange: () => void;
}

export default function BooleanParameter(props: BooleanParameterProps) {
  const { itemDef, itemParent, onChange } = props;
  const { name, label} = itemDef;
  const [editValue, setEditValue] = useState<boolean>(itemParent[itemDef.name]);  
  return (
    <div className="flex w-full py-2 border-b-2 border-gray-200">
        <div className="pl-4">{label || name}</div>
        <div className="pl-4">
            <input type="checkbox" checked={editValue} onChange={event => {
                itemParent[itemDef.name] = event.target.checked;
                setEditValue(event.target.checked);
                onChange();
              }} className="shadow ml-5 py-2 focus:outline-none focus:shadow-outline">
            </input>
        </div>
    </div>
  );
}
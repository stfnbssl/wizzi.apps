import { ParameterItem } from "./types";
import BooleanParameter from "./BooleanParameter"
import TextParameter from "./TextParameter"
import NumberParameter from "./NumberParameter"
import EnumParameter from "./EnumParameter"
import ObjectParameter from "./ObjectParameter"
import ArrayParameter from "./ArrayParameter"
import UseParameter from "./UseParameter"
import { JSXElementConstructor } from "react"

function DummyContextParameter(props: {itemDef: ParameterItem, itemParent: {[key: string]: any}}) {
    const { itemDef, itemParent } = props;
    const { name, label } = itemDef;
    return (
        <div>
            <div>{label || name}</div>
            <div>{itemParent[itemDef.name]}</div>
        </div>
    );
}

interface ContextParameterProps {
    itemDef: ParameterItem;
    itemParent: {[key: string]: any};
    onChange: () => void;
}

const parameterMap: {[key: string]: JSXElementConstructor<{itemDef: ParameterItem, itemParent: {[key: string]: any}, onChange: () => void}>} = {
    use: UseParameter, 
    object: ObjectParameter, 
    array: ArrayParameter, 
    string: TextParameter, 
    boolean: BooleanParameter, 
    number: NumberParameter, 
    enum: EnumParameter
};

export function ContextParameter(props: ContextParameterProps) {
    const { itemDef, itemParent } = props;
    const Comp = parameterMap[itemDef.type] || DummyContextParameter;
    return  (
        <Comp itemDef={itemDef} itemParent={itemParent}  onChange={props.onChange}></Comp>
    );
}
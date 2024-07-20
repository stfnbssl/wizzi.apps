import { FormEvent, useState } from 'react';
import { ParameterItem } from "./types";
import { ContextParameter } from "./ContextParameter";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon, Pencil1Icon, PlusIcon } from "@radix-ui/react-icons";
import { Spinner } from "@/Components/ui/Spinner";

interface ArrayParameterProps {
  itemDef: ParameterItem;
  itemParent: {[key: string]: any};
  onChange: () => void;
}

interface ItemValueCardProps {
  itemDefParameters: ParameterItem[];
  itemValue: {[key: string]: any};
  onUpdate: () => void;
}

interface ItemValueAddProps {
  itemDefParameters: ParameterItem[];
  itemValue: {[key: string]: any};
  onAdd: (item: any) => void;
}

interface ItemValueFormProps {
  itemDefParameters: ParameterItem[];
  itemValue: {[key: string]: any};
  afterSave: () => void;
}

export default function ArrayParameter(props: ArrayParameterProps) {
  const { itemDef, itemParent, onChange } = props;
  const { name, label, parameters } = itemDef;
  const [editItems, setEditItems] = useState<string>(JSON.stringify(itemParent[itemDef.name]));
  const editItemsArray = JSON.parse(editItems);
  // console.log("ArrayParameter", "editItems", editItemsArray);
  return (
    <div className="flex w-full py-2 border-b-2 border-gray-200">
        <div className="pl-4">{label || name}</div>
        <div className="pl-4">
          {editItemsArray.map((itemValue: any, ndx: number) => (
            parameters && <ItemValueCard key={ndx} itemDefParameters={parameters} itemValue={itemValue} onUpdate={() => {
              setEditItems(JSON.stringify(editItemsArray));
              itemParent[itemDef.name] = editItemsArray;
              onChange();
            }} />
          ))}        
          <div className="mt-2 space-x-6 text-right">
            {
              parameters && <ItemValueAdd itemDefParameters={parameters} itemValue={getNewItemValue(parameters)} onAdd={(item: any) => {
                // console.log("ArrayParameter.onAdd", item);
                editItemsArray.push(item);
                setEditItems(JSON.stringify(editItemsArray));
                itemParent[itemDef.name] = editItemsArray;
                onChange();
              }} />
            }
          </div>
        </div>
    </div>
  );
}

function ItemValueCard( props: ItemValueCardProps ) {
  let [open, setOpen] = useState(false);
  // console.log("ItemValueCard", "itemValue", props.itemValue);
  return (
    <div className="flex justify-between bg-white px-4 text-gray-900 shadow">
      <div>
      {
        props.itemDefParameters ? props.itemDefParameters.map((itemDef, ndx) =>  (
          <span key={ndx} className="pl-2 text-s text-gray-500">{formatListValue(itemDef, props.itemValue)}</span>
        )) : null
      }
      </div>
      <div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="rounded p-2 hover:bg-gray-200">
            <Pencil1Icon />
          </Dialog.Trigger>    
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />                          
            <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-xl">
                  Edit item
                </Dialog.Title>
                <Dialog.Close className="text-gray-400 hover:text-gray-500">
                  <Cross1Icon />
                </Dialog.Close>
              </div>
              <div className="mt-8">
                { props.itemDefParameters && <ItemValueForm itemDefParameters={props.itemDefParameters} itemValue={props.itemValue} afterSave={
                  () => {
                    setOpen(false);
                    props.onUpdate();
                }} />}
              </div>                    
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  )
}

function ItemValueAdd( props: ItemValueAddProps ) {
  let [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between bg-white px-4 text-gray-900 shadow">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="rounded p-2 hover:bg-gray-200">
            <PlusIcon />
          </Dialog.Trigger>    
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />                          
            <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-xl">
                  Add new item
                </Dialog.Title>
                <Dialog.Close className="text-gray-400 hover:text-gray-500">
                  <Cross1Icon />
                </Dialog.Close>
              </div>
              <div className="mt-8">
                { props.itemDefParameters && <ItemValueForm itemDefParameters={props.itemDefParameters} itemValue={props.itemValue} afterSave={
                  () => {
                    props.onAdd(props.itemValue);
                    setOpen(false)
                  }
                } />}
              </div>                    
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
    </div>
  );
}

function ItemValueForm(props: ItemValueFormProps) {
  let [saving, setSaving] = useState(false);
  let sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  // let { updateContact } = useContacts();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // console.log("ItemValueForm.handleSubmit", event.target);
    event.preventDefault();
    setSaving(true);
    // let data = Object.fromEntries(new FormData(event.currentTarget));
    // await updateContact(contact.id, data);
    await sleep(1000);
    props.afterSave();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={saving} className="group">
        <div className="mt-8 group-disabled:opacity-50">
        <div className="pl-4">
        {
            props.itemDefParameters ? props.itemDefParameters.map((propDef, ndx) =>  (
              <ContextParameter key={ndx} itemDef={propDef} itemParent={props.itemValue} onChange={() => {
                // console.log('ItemValueForm.itemValues', props.itemValue);
              }}></ContextParameter>
            )) : null
        }
        </div>
        <div className="mt-8 space-x-6 text-right">
          <Dialog.Close className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
            Cancel
          </Dialog.Close>
          <button className="inline-flex items-center justify-center rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 group-disabled:pointer-events-none">
            <Spinner className="absolute h-4 group-enabled:opacity-0" />
            <span className="group-disabled:opacity-0">Save</span>
          </button>
        </div>        
        </div>
      </fieldset>
    </form>
  )
}

function getNewItemValue(props: ParameterItem[]) {
  const retval :{[key: string]: any} = {}
  props.map(p => {
    if (p.type == "object") {
      retval[p.name] = getNewItemValue(p.parameters || []);
    } else if (p.type == "array") {
      retval[p.name] = [];
    } else {
      retval[p.name] = p.defaultValue;
    }
  })
  return retval;
}

function formatListValue(item: ParameterItem, values: {[key: string]: any}) {
  if (item.type=="object" || item.type=="array") {
    // console.log("formatListValue");
  } else {
    // console.log("formatListValue", values[item.name]);
    return values[item.name];
  }
}
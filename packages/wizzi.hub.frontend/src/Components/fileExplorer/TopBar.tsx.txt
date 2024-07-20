import {AddFileOrFolder} from "./types";


interface TopBarProps {
  setAddNew: React.Dispatch<React.SetStateAction<AddFileOrFolder>>;
  root: boolean;
  id?: string;
}

export default function TopBar(props: TopBarProps) {
  const id = props.id;
  return (
    <div id={id} className="flex items-center justify-between border-b pb-2">
      <p className="font-bold uppercase text-gray-400 text-xs tracking-wide">
        file explorer
      </p>
    </div>
  );
}


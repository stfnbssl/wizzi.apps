import { FcFile } from "react-icons/fc";
import { PackiEntry } from "@/Api/types"; 

interface FileProps {
  entry: PackiEntry;
  onSelect: (entry: PackiEntry) => void;
}

export default function File(props: FileProps) {
  const { entry, onSelect } = props;
  const { name } = entry;
  return (
    <div className="flex py-1 items-center justify-between">
      <div className="flex flex-1 items-center space-x-2 cursor-pointer" onClick={()=>{onSelect(entry)}}>
        <FcFile fontSize={22} />
        <p className="text-gray-400 hover:text-gray-200 flex-1">{name}</p>
      </div>
    </div>
  );
}

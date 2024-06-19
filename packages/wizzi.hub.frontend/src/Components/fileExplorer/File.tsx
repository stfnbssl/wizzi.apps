import { FcFile } from "react-icons/fc";
import {FileOrFolder} from "./types"

interface FileProps {
  data: FileOrFolder;
}

export default function File(props: FileProps) {
  const { data } = props;
  const { name } = data;
  return (
    <div className="flex py-1 items-center justify-between">
      <div className="flex flex-1 items-center space-x-2 cursor-pointer">
        <FcFile fontSize={22} />
        <p className="text-gray-400 hover:text-gray-200 flex-1">{name}</p>
      </div>
    </div>
  );
}

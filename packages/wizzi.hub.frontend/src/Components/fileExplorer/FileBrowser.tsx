import { FcFile } from "react-icons/fc";
import {PackiEntry} from "@/Api/types";

interface FileBrowserProps {
  entry: PackiEntry;
}

export default function FileBrowser(props: FileBrowserProps) {
  const { entry } = props;
  const { contents } = entry;
  return (
    <div className="flex py-1 items-center justify-between">
      <div className="flex flex-1 items-center space-x-2 cursor-pointer">
        <FcFile fontSize={22} />
        <p className="text-gray-400 hover:text-gray-200 flex-1">{contents}</p>
      </div>
    </div>
  );
}

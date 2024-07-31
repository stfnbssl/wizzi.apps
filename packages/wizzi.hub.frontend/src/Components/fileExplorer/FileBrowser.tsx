// import { FcFile } from "react-icons/fc";
import {PackiEntry} from "@/Api/types";
import HTMLPanel from "@/Components/ui/HTMLPanel";

interface FileBrowserProps {
  entry: PackiEntry;
}

export default function FileBrowser(props: FileBrowserProps) {
  const { entry } = props;
  const { contents } = entry;
  return (
    <div className="flex py-1 items-center justify-between">
      <div className="flex flex-1 items-center space-x-2 cursor-pointer">
        { /* <FcFile fontSize={22} /> */}
        { contents && <HTMLPanel htmlContent={ contents } className="flex-1" />}
      </div>
    </div>
  );
}

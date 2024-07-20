import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import File from "./File";
import {PackiEntry} from "@/Api/types";

interface FolderProps {
  entry: PackiEntry;
  getChild: (cd: string) => PackiEntry | undefined;
  open: string[];
  toggleFolderState: (uri: string) => void;
  onFileSelect: (entry: PackiEntry) => void;
}

export default function Folder(props: FolderProps) {
  const {
    entry,
    getChild,
    open,
    toggleFolderState,
    onFileSelect,
  } = props;
  const { uri, name } = entry;
  const children = entry.children || [];

  const renderChildren = () => {
    return (
      <div className="ml-4">
        {children.map((cd) => {
          const d = getChild(cd);
          if (d?.type === "folder")
            return (
              <Folder
                key={d.uri}
                {...{
                  entry: d,
                  getChild,
                  open,
                  toggleFolderState,
                  onFileSelect,
                  uri: d.uri
                }}
              />
            );
          if (d?.type === "file") return <File key={d.uri} onSelect={onFileSelect} {...{ entry: d }} />;
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="py-1">
      {/* folder info */}
      <div className="flex items-center justify-between">
        <div
          onClick={() => toggleFolderState(uri)}
          className="flex flex-1 items-center space-x-2 cursor-pointer"
        >
          {open?.includes(uri) ? (
            <FcOpenedFolder fontSize={22} />
          ) : (
            <FcFolder fontSize={22} />
          )}
          <p className="text-gray-400 hover:text-gray-200 flex-1">{name}</p>
        </div>
      </div>
      {/* folder contents */}
      {children.length > 0 &&
        (open?.includes(uri)) &&
        renderChildren()}
    </div>
  );
}

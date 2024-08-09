import { useState } from "react";
import File from "./File";
import Folder from "./Folder";
import { PackiEntry } from "@/Api/types"; 

interface FileExplorerProps {
  entries: PackiEntry[];
  onFileSelect: (entry: PackiEntry)=> void;
}

export default function FileExplorer(props: FileExplorerProps) {
  const { entries, onFileSelect } = props;
  const [open, setOpen] = useState<string[]>([]);
  // console.log("FileExplorer.entries", entries)

  const toggleFolderState = (uri: string) => {
    if (open.length === 0) {
      setOpen([uri]);
    } else {
      if (open.includes(uri)) setOpen((prev) => prev.filter((p) => p !== uri));
      else setOpen((prev) => [...prev, uri]);
    }
  };

  const getChild = (cd: string): PackiEntry | undefined => {
    let val: PackiEntry | undefined;
    entries.forEach((d) => {
      if (d.uri === cd) {
        val = d;
      }
    });
    return val;
  };

  const getChildrens = (): string[] => {
    let childrens: string[] = [];
    if (entries) {
      const folders = entries.filter((d) => d.children && d.children.length > 0);
      folders.forEach((fd) => {
        if (fd.children) {
          fd.children.forEach((cd) => {
            childrens.push(cd);
          });
        }
      });
    }
    return childrens;
  };

  const getRootEntries = (): PackiEntry[] => {
    let rootFolders: PackiEntry[] = [];
    if (entries) {
      entries.forEach((d) => {
        if (!getChildrens().includes(d.uri)) {
          rootFolders.push(d);
        }
      });
    }
    // console.log("FileExplorer.getRootEntries.rootFolders", rootFolders)
    return rootFolders;
  };

  const render = () => {
    return getRootEntries().map((d) => {
      if (d.type === "folder")
        return (
          <Folder
            key={d.uri}
            {...{
              entry: d,
              getChild,
              open,
              toggleFolderState,
              onFileSelect,
            }}
          />
        );
      if (d.type === "file") return <File onSelect={onFileSelect} key={d.uri} {...{ entry: d }} />;
      return null;
    });
  };

  return <div>{entries && render()}</div>;
}

import { useEffect, useState } from "react";
import File from "./File";
import Folder from "./Folder";
import {FileOrFolder, ExplorerData, AddFileOrFolder} from "./types";

interface DisplayProps {
  data: ExplorerData;
  setData: React.Dispatch<React.SetStateAction<ExplorerData>>;
  addNew: AddFileOrFolder;
  setAddNew: React.Dispatch<React.SetStateAction<AddFileOrFolder>>;
}

export default function Display(props: DisplayProps) {
  const { data, setData, addNew, setAddNew } = props;
  const [open, setOpen] = useState<string[]>([]);

  useEffect(() => {
    if (addNew.id) {
      if (open) {
        // typescript does not catch that `id` is a string and is not undefined?
        if (!open.includes(addNew.id)) setOpen((prev) => [...prev, addNew.id as string]);
      } else {
        setOpen([addNew.id]);
      }
    }
  }, [addNew, open]);

  const toggleFolderState = (id: string) => {
    if (open.length === 0) {
      setOpen([id]);
    } else {
      if (open.includes(id)) setOpen((prev) => prev.filter((p) => p !== id));
      else setOpen((prev) => [...prev, id]);
    }
  };

  const getChild = (cd: string): FileOrFolder | undefined => {
    let val: FileOrFolder | undefined;
    data.forEach((d) => {
      if (d.id === cd) {
        val = d;
      }
    });
    return val;
  };

  const getChildrens = (): string[] => {
    let childrens: string[] = [];
    if (data) {
      const folders = data.filter((d) => d.children && d.children.length > 1);
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

  const getRootFolders = (): FileOrFolder[] => {
    let rootFolders: FileOrFolder[] = [];
    if (data) {
      data.forEach((d) => {
        if (!getChildrens().includes(d.id)) {
          rootFolders.push(d);
        }
      });
    }
    return rootFolders;
  };

  const render = () => {
    return getRootFolders().map((d) => {
      if (d.type === "folder")
        return (
          <Folder
            key={d.id}
            {...{
              data: d,
              getChild,
              open,
              toggleFolderState,
              addNew,
              setAddNew,
              setData
            }}
          />
        );
      if (d.type === "file") return <File key={d.id} {...{ data: d }} />;
      return null;
    });
  };

  return <div>{data && render()}</div>;
}

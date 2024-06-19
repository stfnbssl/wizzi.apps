import { useEffect, useState } from "react";
import "../../tailwind.output.css";
import localData from "./data.json";
import TopBar from "./TopBar";
import Display from "./Display";
import Input from "./Input";
import {ExplorerData, AddFileOrFolder} from "./types";
import ParamsBuilder from '../params-builder/ParamsBuilder'

const App = () => {
  const [data, setData] = useState<ExplorerData>([]);
  const [addNew, setAddNew] = useState<AddFileOrFolder>({});

  useEffect(() => {
    const localStorageData = localStorage.getItem("data");
    if (typeof(localStorageData) == "string") {
      // console.log('localStorageData', localStorageData);
      setData(JSON.parse(localStorageData));
    } else {
      setData(localData);
    }
  }, []);

  useEffect(() => {
    // if (data) localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const props = {
    data,
    setData,
    addNew,
    setAddNew
  };

  // console.log('data', data);
  // w-full sm:max-w-xs min-h-screen
  return (
    <div className="bg-gray-800">
      <div className="p-2 px-4 bg-gray-900 flex">
        <div>
          <TopBar {...{ addNew, setAddNew, root: true }} />
          {addNew && addNew.root && <Input {...{ addNew, setAddNew, setData }} />}
          <Display {...props} />
        </div>
        <div className="p-2 px-4 bg-white">
          <ParamsBuilder />
        </div>
      </div>
    </div>
  );
};

export default App;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\App.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {useState} from "react";
import "./App.css";
import Header from "@/Components/Header";
import ReadTheDocs from "@/Components/ReadTheDocs";
const App: React.FC = () => {
    const [count, setCount] = useState(0);
    return  (
        <div className="App">
            <Header />
            <div className="card">
                <button type="button" onClick={() => 
                        setCount(count + 1)
                }>count is {count}</button></div>
            <ReadTheDocs />
        </div>
        )
    ;
}
;
export default App;
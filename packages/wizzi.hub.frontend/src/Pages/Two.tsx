/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Pages\Two.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
type Params = { 
    id: string;
};
const Two: React.FC = () => {
    const {
        id
     } = useParams<Params>();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        var url = "http://localhost:3003/api/v1/production/artifact/stfnbssl";
        fetch(url).then(response => 
            response.json()
        ).then((data) => {
            console.log("[32m%s[0m", data.item[0]);
            setPosts(data.item);
        }
        ).catch((err) => {
            console.log("[31m%s[0m", err.message);
            console.log("[31m%s[0m", err);
        }
        )
    }
    , [])
    return  (
        <div>
            <h1>
                Page Two</h1>
            <p>
                ID: {id}</p>
            <p>
                {JSON.stringify(posts[0], null, 4)}</p>
        </div>
        )
    ;
}
;
export default Two;
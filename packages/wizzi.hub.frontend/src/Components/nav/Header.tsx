/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\nav\Header.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import React from 'react';
import {useState} from 'react';
import {Outlet, Link} from 'react-router-dom';
const Header: React.FC = () => {
    const [current, setCurrent] = useState('h');
    const onClick = (e) => {
        console.log('click', e);
        setCurrent(e.key);
    }
    ;
    return  (
        <>
            <div>
                <div id="h" onClick={onClick}>
                    <Link to="/">
                        Home</Link>
                </div>
                <div id="o" onClick={onClick}>
                    <Link to="one/42">
                        One</Link>
                </div>
                <div id="t" onClick={onClick}>
                    <Link to="two/24">
                        Two</Link>
                </div>
                <div id="th" onClick={onClick}>
                    <Link to="three">
                        Three</Link>
                </div>
            </div>
            <Outlet />
        </>
        )
    ;
}
;
export default Header;
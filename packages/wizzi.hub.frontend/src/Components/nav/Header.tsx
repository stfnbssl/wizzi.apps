/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\nav\Header.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
import React from 'react';
import {useState} from 'react';
import {Outlet, Link} from 'react-router-dom';
const Header: React.FC = () => {
    const [current, setCurrent] = useState('h');
    const onClick = (e: any) => {
        console.log('click', e);
        setCurrent(e.key);
    }
    ;
    return  (
        <>
            <div>
                <div id="h" onClick={onClick}>
                    <Link className={ current == 'h' ? 'todo' : 'todo'} to="/">
                        Home</Link>
                </div>
                <div id="o" onClick={onClick}>
                    <Link className={ current == 'o' ? 'todo' : 'todo'} to="one/42">
                        One</Link>
                </div>
                <div id="t" onClick={onClick}>
                    <Link className={ current == 't' ? 'todo' : 'todo'} to="two/24">
                        Two</Link>
                </div>
                <div id="th" onClick={onClick}>
                    <Link className={ current == 'th' ? 'todo' : 'todo'} to="three">
                        Three</Link>
                </div>
                <div id="f" onClick={onClick}>
                    <Link className={ current == 'f' ? 'todo' : 'todo'} to="four">
                        Four</Link>
                </div>
            </div>
            <Outlet />
        </>
        )
    ;
}
;
export default Header;
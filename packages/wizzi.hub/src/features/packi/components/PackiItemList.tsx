/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub\.wizzi-override\src\features\packi\components\PackiItemList.tsx.ittf
    utc time: Fri, 12 Apr 2024 14:33:32 GMT
*/
import React from 'react';
type PackiItemListProps = { 
    items: any[];
};
export default function PackiItemList(props: PackiItemListProps) {
    
        return  (
            <div
            >
                <ul
                >
                    {
                        props.items.map((item: any, ndx: number) => {
                        
                            return  (
                                <li
                                 key={ndx}>
                                    <div
                                     style={{
                                            padding: '30px', 
                                            borderBottom: '1px solid #cecece'
                                         }}>
                                        <div
                                         style={{
                                                padding: '5px'
                                             }}>
                                            <a
                                             href={'/~~/stfnbssl/' + item.name}>
                                            {item.name}
                                            </a>
                                        </div>
                                        <div
                                         style={{
                                                padding: '5px', 
                                                fontSize: '0.8em'
                                             }}>
                                            <a
                                             href={'/~~/' + item._id.toString()}>
                                            {item._id.toString()}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                )
                            ;
                        }
                        )
                    }
                </ul>
            </div>
            )
        ;
    }

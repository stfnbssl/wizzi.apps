/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010.client\.wizzi\src\pages\about.tsx.ittf
    utc time: Sat, 09 Mar 2024 07:50:51 GMT
*/
import React, {useEffect, useState} from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import {Link, RouteComponentProps} from 'react-router-dom';
const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = (props) => {

    const [message, setMessage] = useState<string>('');
    useEffect(() => {
    
        logging.info(`Loading ${props.name}`)
        let number = props.match.params.number;
        if (number) {
            setMessage(`The Number is ${number}`)
        }
        else {
            setMessage(`No number provided!`)
        }
    }
    , [
        props
    ])
    return  (
        <div
        >
            <p
            >
                {message}
            </p>
            <Link
             to="/">
                Go to the home page!
            </Link>
        </div>
        )
    ;
}
;
export default AboutPage;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\services\mongodb.ts.ittf
    utc time: Thu, 11 Apr 2024 13:29:18 GMT
*/
import {ModelBuilderType} from '../features/app';
import {ConfigType} from '../features/config';
import mongoose from 'mongoose';

export function mongodbStart(config: ConfigType, modelBuilders: ModelBuilderType[]) {

    
    let connectUrl: string;
    const { mongoHost, mongoUser, mongoPassword, mongoPath } = config;
    if (mongoUser && mongoUser.length > 0 && mongoPassword && mongoPassword.length > 0 && mongoHost && mongoHost.length > 0) {
        connectUrl = `${mongoHost}://${mongoUser}:${mongoPassword}${mongoPath}`;
    }
    // example 'mongodb://localhost/test'
    else {
        connectUrl = `${mongoPath}`;
    }
    
        // TODO (VIA) set mongoose.Promise = global.Promise
    return mongoose.connect(connectUrl).then(() => {
        
            console.log("[32m%s[0m", 'Mongodb. Connected to', mongoPath);
            modelBuilders.forEach(builder => 
            
                builder.buildModel()
            )
            return 'Connected';
        }
        , (err) => {
        
            throw new Error('\n\nMongodb. \nCannot connect to \n"' + connectUrl + '". \n\n' + err.message + '\n\n');
        }
        )
    ;
}

export const close = () => 

    mongoose.connection.close()
;

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\widgets\LazyLoad.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
*/
import * as React from 'react';

type Props<T> = { 
    load: () => Promise<{ 
        default: T;
    }>;
    children: (props: { 
        loaded: false;
        data: null;
    } | { 
        loaded: true;
        data: T;
    }) => any;
};

type State<T> = { 
    data: T | null;
};

export default class LazyLoad<T> extends React.Component<Props<T>, State<T>> {
        state: State<T> = {
            data: null
        }
        ;
        componentDidMount() {
            this._load();
        }
        _load = async () => {
        
            let data: any = await this.props.load();
            if (data.__esModule) {
                data = data.default;
            }
            this.setState({
                data
             })
        }
        ;
        render() {
            return this.props.children(this.state.data ? {
                        loaded: true, 
                        data: this.state.data
                     } : {
                        loaded: false, 
                        data: null
                     });
        }
    }

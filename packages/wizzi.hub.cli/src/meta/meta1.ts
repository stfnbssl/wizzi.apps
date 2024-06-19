import fetch from "node-fetch";

// const baseApiUrl:string = 'https://www.wizzihub.com/api/v1';
const baseApiUrl:string = 'http://localhost:5100/api/v1';

interface Options {
    method: string,
    headers?: {}
}

interface Options {
    method: string,
    headers?: {}
}

export function metaProvides() {
    const url:string = baseApiUrl + '/meta/provides';

    const options: Options = {
        method: 'GET',
        headers: {}
      };
    
    fetch(url, options)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err: any) => console.error('error:' + err));
}

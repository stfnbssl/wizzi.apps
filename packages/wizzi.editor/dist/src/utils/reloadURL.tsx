/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\utils\reloadURL.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import querystring from 'query-string';
import type {RouterData, QueryParams, QueryStateParams} from '../features/packi/index';
export type ReloadURLOptions = { 
    noEmbedded?: boolean;
    useAllQueryParamsWhenPossible?: boolean;
};
;
declare const __INITIAL_DATA__: { 
    data: RouterData;
    queryParams: QueryParams;
};
type QueryStateParamKeys =  keyof QueryStateParams;
function pickQueryStateParams(queryParams: QueryParams) {
    const res: QueryStateParams = {};
    for (const key in queryParams) {
        /**
            * eslint @typescript-eslint/switch-exhaustiveness-check: 1
        */
        const name = key as QueryStateParamKeys;
        /**
            * eslint @typescript-eslint/switch-exhaustiveness-check: 1
        */
        switch (name) {
            case 'preview':
            case 'theme':
            case 'verbose':
            case 'hideQueryParams': {
                res[name] = queryParams[name] as any;
                break;
            }
        }
    }
    return res;
}
export function getReloadURL(queryParams?: QueryParams, options?: ReloadURLOptions) {
    const {
        origin
     } = window.location;
    let {
        pathname
     } = window.location;
    const allQueryParams: any = options?.useAllQueryParamsWhenPossible && (!pathname || pathname === '/' || pathname === '/embedded' || pathname === '/embedded/') ? {
            ...__INITIAL_DATA__.queryParams
         } : pickQueryStateParams(__INITIAL_DATA__.queryParams);
    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value === undefined) {
                delete allQueryParams[key]
            }
            else {
                allQueryParams[key] = value;
            }
        }
    }
    if (options?.noEmbedded) {
        pathname = pathname.replace('/embedded', '');
    }
    return `${origin}${pathname}?${querystring.stringify(allQueryParams)}`;
}

export function reload() {
    const url = getReloadURL(undefined, {
        useAllQueryParamsWhenPossible: true
     });
    window.location.replace(url);
}
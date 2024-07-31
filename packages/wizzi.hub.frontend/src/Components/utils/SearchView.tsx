/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\utils\SearchView.tsx.ittf
    utc time: Wed, 31 Jul 2024 14:56:16 GMT
*/
type SearchViewProps = { 
    className: string;
    placeholder: string;
    value?: string;
    onChange: (name: string) => void;
};
export function SearchView(params: SearchViewProps) {
    return  (
        <input type="search"
            placeholder={params.placeholder}
            className={params.className + " w-full p-2 mb-2 bg-transparent border-b border-gray-200 focus:outline-none focus:border-blue-500"}
            autoComplete="off"
            aria-label={params.placeholder}
            value={params.value || ''}
            onChange={ev => 
                    params.onChange(ev.target.value)
            }
         />)
    ;
}

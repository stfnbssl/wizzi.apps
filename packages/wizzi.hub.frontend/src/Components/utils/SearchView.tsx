/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\utils\SearchView.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
type SearchViewProps = { 
    className: string;
    placeholder: string;
    value?: string;
    onChange: (name: string) => void;
};
export function SearchView(params: SearchViewProps) {
    return  (
        <div className={params.className}>
            <input type="search"
                placeholder={params.placeholder}
                autoComplete="off"
                aria-label={params.placeholder}
                value={params.value || ''}
                onChange={ev => 
                        params.onChange(ev.target.value)
                }
             /></div>
        )
    ;
}

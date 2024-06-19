/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\utils\SearchView.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
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

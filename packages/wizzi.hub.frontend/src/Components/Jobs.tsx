/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\Jobs.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import React, {useState} from "react";
import * as _ from "@/Utils/underscore2";
import {SearchView} from "@/Components/utils/SearchView";
import {SpinnerView} from "@/Components/utils/SpinnerView";
import {JobItem} from "@/Data/types";
type JobsProps = { 
    reload: boolean;
    jobs: JobItem[];
    onSelect: (job: JobItem) => void;
};
export function Jobs(params: JobsProps) {
    const {
        jobs
     } = params;
    const [searchText, setSearchText] = useState<string>('');
    if (!jobs) {
        return  (
            <SpinnerView />
            )
        ;
    }
    const jobsFiltered = _.sortFilter(jobs, {
        sort: {
            ascending: true, 
            keyName: 'name'
         }, 
        filter: {
            searchText: searchText, 
            keyName: 'name'
         }
     });
    return  (
        <div className="h-full bg-gray-800 text-zinc-200 border-r border-gray-100">
            <div className="w-area-list-caption">
                Jobs</div>
            <SearchView className="w-area-list-search"
                placeholder="search job..."
                value={searchText}
                onChange={value => 
                        setSearchText(value)
                }
             />
            <div className="m-1 p-2 overflow-auto">
                <ul>
                    {
                    jobsFiltered.map((item, ndx) => 
                         (
                        <React.Fragment key={ndx}>
                            <li>
                                <div onClick={() => 
                                        params.onSelect(item as JobItem)
                                }>
                                    {item.name}</div>
                            </li>
                        </React.Fragment>
                        )
                    
                    )}</ul>
            </div>
        </div>
        )
    ;
}

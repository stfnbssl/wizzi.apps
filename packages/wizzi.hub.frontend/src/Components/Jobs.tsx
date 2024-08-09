/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\Jobs.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import React, {useState} from "react";
import * as _ from "@/Utils/underscore2";
import {SearchView} from "@/Components/utils/SearchView";
import {SpinnerView} from "@/Components/utils/SpinnerView";
import {JobItem} from "@/Data/types";
type JobsProps = { 
    reload: boolean;
    jobs: JobItem[];
    currentJob?: JobItem;
    onSelect: (job: JobItem) => void;
};
export function Jobs(params: JobsProps) {
    const {
        jobs, 
        currentJob
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
        <div className="h-full flex-1 flex flex-col bg-gray-700 text-zinc-200 rounded-lg shadow-md border-r border-gray-100">
            <div className="p-1 bg-gray-800 text-xs text-center">
                Jobs</div>
            <SearchView className="w-area-list-search"
                placeholder="search job..."
                value={searchText}
                onChange={value => 
                        setSearchText(value)
                }
             />
            <div className="m-1 p-2 flex-grow overflow-auto scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-100">
                <ul>
                    {
                    jobsFiltered.map((item, ndx) => 
                         (
                        <React.Fragment key={ndx}>
                            <li>
                                {
                                    currentJob && currentJob.name == item.name &&  (
                                    <div className="text-gray-700 bg-zinc-200">
                                        {item.name}</div>
                                    )
                                
                            }
                            {
                                !currentJob || currentJob.name != item.name &&  (
                                <div className="cursor-pointer" onClick={() => 
                                        params.onSelect(item as JobItem)
                                }>
                                    {item.name}</div>
                                )
                            
                        }
                    </li>
                </React.Fragment>
                )
            
            )}</ul>
    </div>
</div>
)
;
}

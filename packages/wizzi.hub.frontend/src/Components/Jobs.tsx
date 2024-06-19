/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\Jobs.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import * as _ from "@/Utils/underscore2";
import {SpinnerView, SearchView} from "@/Components/utils/SpinnerView";
import {JobItem} from "@/Data/types";
type JobsProps = { 
    reload: boolean;
    jobs: JobItem[];
    onSelect: (job: JobItem) => void;
};
export function Jobs(params: JobsProps) {
    const {
        reload, 
        jobs
     } = params;
    const [searchText, setSearchText] = useState('');
    if (!jobs) {
        return  (
            <SpinnerView />
            )
        ;
    }
    console.log("Jobs.jobs", jobs);
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
        <div className="w-area-list w-area-list-jobs">
            <div className="w-area-list-caption">
                Jobs</div>
            <SearchView className="w-area-list-search"
                placeholder="search job..."
                value={searchText}
                onChange={value => 
                        setSearchText(value)
                }
             />
            <div className="w-area-list-inner">
                <ul>
                    {
                    jobsFiltered.map((item, ndx) => 
                         (
                        < key={ndx}>
                            <li>
                                <div onClick={() => 
                                        params.onSelect(item)
                                }>
                                    {item.name}</div>
                            </li>
                        </>
                        )
                    
                    )}</ul>
            </div>
        </div>
        )
    ;
}

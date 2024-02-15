/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\services\TimedService.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
*/

export class TimedService {
    constructor(payload: any, frequence: number, action: (payload: any) => void) {
        this.payload = payload;
        this.frequence = frequence;
        this.action = action;
        this.timer = setTimeout(() => 
        
            this.action(this.payload)
        , this.frequence)
        ;
    }
    timer: NodeJS.Timeout;
    frequence: number;
    payload: any;
    action: (payload: any) => void;
    setPayload(payload: any, reset: boolean = true) {
        this.payload = payload;
        if (reset) {
            clearInterval(this.timer);
            this.timer = setTimeout(() => 
            
                this.action(this.payload)
            , this.frequence)
            ;
        }
    }
    setFrequence(frequence: number, reset: boolean = true) {
        this.frequence = frequence;
        if (reset || frequence == 0) {
            clearInterval(this.timer);
            if (frequence > 0) {
                this.timer = setTimeout(() => 
                
                    this.action(this.payload)
                , this.frequence)
                ;
            }
        }
    }
}

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\form\types.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
export type FormField = { 
    label: string;
    helperText?: string;
    type: string;
    default?: any;
    defaultOption?: { 
        label: string;
        value: string;
    };
    options?: { 
        label: string;
        value: string;
    }[];
    onValidate?: (value: string) => Error | null;
};
export type Register = (options: { 
    validate: () => Error | null;
    focus: () => void;
}) => number;
export type Unregister = (key: number) => void;
export type Update = () => void;
export type FormValidation = { 
    register: Register;
    unregister: Unregister;
    update: Update;
    valid: boolean;
};

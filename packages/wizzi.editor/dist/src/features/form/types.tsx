/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\form\types.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
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

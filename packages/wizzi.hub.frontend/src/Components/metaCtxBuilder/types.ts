export interface ParameterItem {
    type: string;
    name: string;
    label?: string;
    defaultValue: any;
    parameters?: ParameterItem[];
    help?: string;
}
export type ParamsBuilderData = {
    definitions: ParameterItem[];
    values: {[key: string]: any};
    old: any;
}
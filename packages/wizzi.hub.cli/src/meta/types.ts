export type MetaCategory = {
    name: string;
    productions: string[];
}
export type MetaProduction = {
    name: string;
    title: string;
    plugin: string;
    categories: string[];
}
export type MetaPluginModule = {
    name: string;
    version: string;
    categories: string[];
}
/** /api/v1/meta/provides */
export type MetaProvides = {
    nodeModulePlugins: MetaPluginModule[];
    metaCategories: MetaCategory[];
    metaProductions: MetaProduction[];
    metaProductionSelectors: string[];
}

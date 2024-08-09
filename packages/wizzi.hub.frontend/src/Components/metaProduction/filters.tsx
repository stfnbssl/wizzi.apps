/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\metaProduction\filters.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import {MetaProductionExt, MetaProductionCategoryExt, MetaPluginExt} from "@/Api/types";
import {MetaSelectionState} from "@/Data/mvc/MetaProduction/types";
import {SelectableCollection} from "@/Data/Components/SelectableCollection";
import {hasItemInArray} from "@/Utils/arrays";
export function executeMetaJobFilters(metaSelectionState: MetaSelectionState):  void {
    const {
        pluginCatSelId, 
        pluginSelId, 
        catSelId, 
        prodSelId
     } = metaSelectionState;
    if (!(pluginCatSelId && pluginSelId && catSelId && prodSelId)) {
        return ;
    }
    console.log('Components.metaproduction.executeMetaJobFilters.start');
    // pluginCatSel is indipendent from other selections
    const pluginCatSel = SelectableCollection.get(pluginCatSelId);
    // pluginSel depend on pluginCatSel
    const pluginSel = SelectableCollection.get(pluginSelId);
    // meta production categories prodCatSel depend on pluginSel + pluginCatSel
    const prodCatSel = SelectableCollection.get(catSelId);
    // meta productions prodSel depend on prodCatSel + pluginSel + pluginCatSel
    const prodSel = SelectableCollection.get(prodSelId);
    
    pluginSel.resetFilter();
    prodCatSel.resetFilter();
    prodSel.resetFilter();
    
    const metaProductionCategoriesOfSelectedPluginsObj: { 
        [name: string]: MetaProductionCategoryExt;
    } = {};
    pluginSel.getSelected().map((item) => {
        const itemExt: MetaPluginExt = item as MetaPluginExt;
        let hasPluginCatInPluginCatSel: boolean = false;
        itemExt.pluginCategories.forEach((c) => {
            const isInCatSel = hasItemInArray(pluginCatSel.getSelected(), 'name', c.name);
            if (isInCatSel) {
                hasPluginCatInPluginCatSel = true;
            }
        }
        )
        if (hasPluginCatInPluginCatSel) {
            itemExt.metaProductions.forEach(mp => 
                mp.categories.forEach(c => 
                    metaProductionCategoriesOfSelectedPluginsObj[c.name] = c
                )
            )
        }
        else {
            pluginSel.addFilter([item]);
        }
    }
    )
    
    pluginSel.getUnselected().map((item) => {
        const itemExt: MetaPluginExt = item as MetaPluginExt;
        let hasSelectedCategory: boolean = false;
        itemExt.pluginCategories.forEach(c => 
            hasSelectedCategory = hasItemInArray(pluginCatSel.getSelected(), 'name', c.name)
        
        )
        if (!hasSelectedCategory) {
            pluginSel.addFilter([item]);
        }
    }
    )
    
    prodCatSel.getItems().map((item) => {
        let hasProdCatInProdCatsOfSelectedPlugins: boolean = false;
        Object.values(metaProductionCategoriesOfSelectedPluginsObj).forEach((c) => {
            if (c.name == item.name) {
                hasProdCatInProdCatsOfSelectedPlugins = true;
            }
        }
        )
        if (!hasProdCatInProdCatsOfSelectedPlugins) {
            prodCatSel.addFilter([item]);
        }
    }
    )
    
    prodSel.getItems().map((item) => {
        const itemExt: MetaProductionExt = item as MetaProductionExt;
        let prodHasCatInSelectedProdCats: boolean = false;
        let prodHasPluginInSelectedPlugins: boolean = false;
        itemExt.categories.forEach(c => 
            prodCatSel.getSelected().forEach((csel) => {
                if (c.name == csel.name) {
                    prodHasCatInSelectedProdCats = true;
                }
            }
            )
        )
        pluginSel.getSelected().forEach((pl) => {
            if (pl.name == itemExt.plugin) {
                prodHasPluginInSelectedPlugins = true;
            }
        }
        )
        if (!(prodHasCatInSelectedProdCats && prodHasPluginInSelectedPlugins)) {
            prodSel.addFilter([item]);
        }
    }
    )
}

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\metaProduction\filters.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {SelectableCollection} from "@/Data/Components/SelectableCollection";
import {arrayAddUniqueName, hasItemInArray, sortSearchFilter, sortFilterSelectables} from "@/Utils/arrays";
export // pluginCatSel is indipendent from other selections
// pluginSel depend on pluginCatSel
// meta production categories catSel depend on pluginSel + pluginCatSel
// meta productions prodSel depend on catSel + pluginSel + pluginCatSel
function executeMetaJobFilters(metaSelectionState) {
    const {
        pluginCatSelId, 
        pluginSelId, 
        catSelId, 
        prodSelId
     } = metaSelectionState;
    const pluginCatSel = SelectableCollection.get(pluginCatSelId);
    const pluginSel = SelectableCollection.get(pluginSelId);
    const catSel = SelectableCollection.get(catSelId);
    const prodSel = SelectableCollection.get(prodSelId);
    
    pluginSel.resetFilter();
    catSel.resetFilter();
    prodSel.resetFilter();
    
    const metaProductionCategoriesOfSelectedPluginsObj = {};
    pluginSel.getSelected().map(// error 'pluginSel.selected.addFilter', item
    (item) => {
        var i, i_items=item.pluginCategories, i_len=item.pluginCategories.length, c;
        for (i=0; i<i_len; i++) {
            c = item.pluginCategories[i];
            const ok = hasItemInArray(pluginCatSel.getSelected(), 'name', c.name);
            if (ok) {
                var j, j_items=item.metaProductions, j_len=item.metaProductions.length, mp;
                for (j=0; j<j_len; j++) {
                    mp = item.metaProductions[j];
                    var k, k_items=mp.categories, k_len=mp.categories.length, c;
                    for (k=0; k<k_len; k++) {
                        c = mp.categories[k];
                        metaProductionCategoriesOfSelectedPluginsObj[c.name] = c;
                    }
                }
                return true;
            }
        }
        pluginSel.addFilter([item]);
    }
    )
    console.log("[31m%s[0m", 'metaProductionCategoriesOfSelectedPlugins', JSON.stringify(Object.values(metaProductionCategoriesOfSelectedPluginsObj, null, 4)));
    
    pluginSel.getUnselected().map(// error 'pluginSel.unselected.addFilter', item
    (item) => {
        var i, i_items=item.pluginCategories, i_len=item.pluginCategories.length, c;
        for (i=0; i<i_len; i++) {
            c = item.pluginCategories[i];
            const ok = hasItemInArray(pluginCatSel.getSelected(), 'name', c.name);
            if (ok) {
                return true;
            }
        }
        pluginSel.addFilter([item]);
    }
    )
    
    catSel.getItems().map(// error 'catSel.addFilter', item
    (item) => {
        var i, i_items=Object.values(metaProductionCategoriesOfSelectedPluginsObj), i_len=Object.values(metaProductionCategoriesOfSelectedPluginsObj).length, c;
        for (i=0; i<i_len; i++) {
            c = Object.values(metaProductionCategoriesOfSelectedPluginsObj)[i];
            if (c.name == item.name) {
                console.log("[31m%s[0m", 'executeMetaJobFilters', 'category', item.name, 'is in metaProductionCategoriesOfSelectedPluginsObj');
                return true;
            }
        }
        catSel.addFilter(item);
    }
    )
    
    prodSel.getItems().map(// error 'prodSel.addFilter', item
    (item) => {
        var i, i_items=item.categories, i_len=item.categories.length, c;
        for (i=0; i<i_len; i++) {
            c = item.categories[i];
            var j, j_items=catSel.getSelected(), j_len=catSel.getSelected().length, csel;
            for (j=0; j<j_len; j++) {
                csel = catSel.getSelected()[j];
                if (c.name == csel.name) {
                    console.log("[31m%s[0m", 'executeMetaJobFilters', 'category', c.name, 'in production', item.name, 'is in catSel.getSelected()');
                    return true;
                }
            }
        }
        prodSel.addFilter(item);
    }
    )
}
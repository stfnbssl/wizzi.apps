/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\docs\api\cheatsheet.ts.ittf
    utc time: Thu, 15 Feb 2024 20:31:55 GMT
*/
import path from 'path';
import {pretty, verify} from 'wizzi-utils';
import {wizziMaps, wizziProds} from '../../wizzi';

async function getCheatsheet(name: string) {

    return new Promise((resolve, reject) => {
        
            var csPath = path.join(__dirname, '..', '..', '..', '..', 'ittf', 'models', 'cheatsheets', name, 'index.ittf.ittf');
            wizziProds.mTreeFs(csPath, {}).then(
            // items are ittf fragments that will be ittf/prettified and generated
            
            // the resulting cheatsheet context object that will be returned when built
            (result: any) => {
            
                const mTree = result.mTree;
                var _all_items = [];
                var result: any = {
                    name: name, 
                    elements: [
                        
                    ]
                 };
                var i, i_items=mTree.nodes[0].children, i_len=mTree.nodes[0].children.length, itemTop;
                for (i=0; i<i_len; i++) {
                    itemTop = mTree.nodes[0].children[i];
                    
                    // set properties of result
                    if (itemTop.n !== 'element') {
                        result[itemTop.n] = itemTop.v;
                    }
                }
                var i, i_items=mTree.nodes[0].children, i_len=mTree.nodes[0].children.length, itemTop;
                for (i=0; i<i_len; i++) {
                    itemTop = mTree.nodes[0].children[i];
                    if (itemTop.n === 'element') {
                        var elementResult: any = {
                            name: itemTop.v, 
                            items: [
                                
                            ]
                         };
                        var j, j_items=itemTop.children, j_len=itemTop.children.length, itemEl;
                        for (j=0; j<j_len; j++) {
                            itemEl = itemTop.children[j];
                            
                            // ittf fragment
                            if (itemEl.n === 'item') {
                                var itemResult: any = {
                                    schema: result.schema, 
                                    render: 'artifact'
                                 };
                                var k, k_items=itemEl.children, k_len=itemEl.children.length, item;
                                for (k=0; k<k_len; k++) {
                                    item = itemEl.children[k];
                                    if (item.n === 'ittf') {
                                        if (item.children.length == 1) {
                                            
                                            // is already ok, has the correct root
                                            if ((result.schema === 'json' && (item.children[0].n === '{' || item.children[0].n === '[')) || item.children[0].n === wizziMaps.ittfRootFromSchema(result.schema) || wizziMaps.ittfRootFromSchema(result.schema) === 'any') {
                                                itemResult[item.n] = mTree.toIttf(item.children[0]);
                                                itemResult[item.n + 'Wrapped'] = itemResult[item.n];
                                            }
                                            // wrap it
                                            else {
                                                var ittfNode = wrapperForSchema(result.schema);
                                                var l, l_items=item.children, l_len=item.children.length, node;
                                                for (l=0; l<l_len; l++) {
                                                    node = item.children[l];
                                                    ittfNode.children.push(node)
                                                }
                                                itemResult[item.n] = mTree.toIttf(item.children[0]);
                                                itemResult[item.n + 'Wrapped'] = mTree.toIttf(ittfNode);
                                            }
                                        }
                                        // wrap them
                                        else {
                                            var ittfNode = wrapperForSchema(result.schema);
                                            var l, l_items=item.children, l_len=item.children.length, node;
                                            for (l=0; l<l_len; l++) {
                                                node = item.children[l];
                                                ittfNode.children.push(node)
                                            }
                                            itemResult[item.n] = mTree.toIttf(item.children[0]);
                                            itemResult[item.n + 'Wrapped'] = mTree.toIttf(ittfNode);
                                        }
                                    }
                                    else if (item.n === 'expected') {
                                        itemResult[item.n] = buildExpected(item).trim()
                                        ;
                                    }
                                    else {
                                        itemResult[item.n] = item.v;
                                    }
                                }
                                elementResult.items.push(itemResult)
                                _all_items.push(itemResult)
                            }
                            else {
                                elementResult[itemEl.n] = itemEl.v;
                            }
                        }
                        result.elements.push(elementResult)
                    }
                }
                var item_count = 0;
                (function next() {
                
                    var item = _all_items[item_count++];
                    if (!item) {
                        return resolve(result);
                    }
                    pretty.prettifyIttfHtmlFromString(item.ittf, (err: any, pretty: any) => {
                    
                        if (err) {
                            item.ittfPretty = JSON.stringify(err, null, 4);
                        }
                        else {
                            item.ittfPretty = pretty;
                        }
                        if (item.render === 'script') {
                            wizziProds.mTreeBuildupScript('index.ittf.ittf', {
                                ['index.ittf.ittf']: {
                                    type: 'CODE', 
                                    contents: item.ittfWrapped
                                 }
                             }, {}).then((mTreeBuildupScript: any) => {
                            
                                if (mTreeBuildupScript.__is_error) {
                                    item.generated = verify.htmlEscape(JSON.stringify(mTreeBuildupScript, null, 2));
                                }
                                else {
                                    item.generated = verify.htmlEscape(mTreeBuildupScript);
                                }
                                item.generated = item.generated ? item.generated.trim() : 'No result. Something went wrong!';
                                next();
                            }
                            )
                        }
                        else {
                            const mainIttf = 'index.' + item.schema + '.ittf';
                            wizziProds.generateArtifact(mainIttf, {
                                [mainIttf]: {
                                    type: 'CODE', 
                                    contents: item.ittfWrapped
                                 }
                             }, {
                                artifactContext: {
                                    noUseStrict: true, 
                                    noGeneratorComments: true
                                 }
                             }).then((result) => {
                            
                                const artifactText = verify.htmlEscape(result.artifactContent);
                                item.generated = artifactText ? artifactText.trim() : 'No result. Something went wrong!';
                                next();
                            }
                            ).catch((err: any) => {
                            
                                if (typeof err === 'object' && err !== null) {
                                }
                                console.log("[31m%s[0m", 'getCheatsheet.generateArtifact.error', err);
                                return reject(err);
                            }
                            )
                        }
                    }
                    )
                })();
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'cheatsheetApi.getCheatsheet.error', err);
                return reject(err);
            }
            )
        }
        );
}
function wrapperForSchema(schema: string) {

    if (schema === 'js' || schema === 'jsx') {
        return {
                n: 'module', 
                children: [
                    {
                        n: 'kind', 
                        v: 'react', 
                        children: [
                            
                        ]
                     }
                ]
             };
    }
    else if (schema === 'ts') {
        return {
                n: 'module', 
                children: [
                    
                ]
             };
    }
    else {
        return {
                n: schema, 
                children: [
                    
                ]
             };
    }
}
function buildExpected(ittf: any, sb?: any, indent?: number) {

    if (typeof sb === 'undefined') {
        sb = [];
        var i, i_items=ittf.children, i_len=ittf.children.length, item;
        for (i=0; i<i_len; i++) {
            item = ittf.children[i];
            buildExpected(item, sb, 0)
        }
        return verify.htmlEscape(sb.join(''));
    }
    // to avoid ts error
    else {
        sb.push(new Array(indent).join(' '))
        sb.push(ittf.v + '\n')
        var i, i_items=ittf.children, i_len=ittf.children.length, item;
        for (i=0; i<i_len; i++) {
            item = ittf.children[i];
            buildExpected(item, sb, (indent || 0) + 4)
        }
        return '';
    }
}
export {getCheatsheet};

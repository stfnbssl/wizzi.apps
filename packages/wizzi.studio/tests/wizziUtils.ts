import path from "path"
import {config} from "../src/features/config"
import {packiTypes} from "../src/features/packi"
import { fSystem } from "wizzi-utils";
const fsfile = fSystem.vfile()

const tnum: number = process.argv[2] ? parseInt(process.argv[2]) : 3;

const hash = '';

if (tnum == 1) {
    const folderPath = path.join(config.ittfPath, 'demo', 'ttech', 'html');
    fsfile.getFiles(folderPath,
        {
            deep: true,
            documentContent: true
        },
        (err : any, result : fSystem.FileDef[]) => {
            if (err) {
                console.log("err", err);    
            }
            const packiFiles: packiTypes.PackiFiles = {};
            result.map((fsitem) => {
                packiFiles[fsitem.relPath] = {
                    type: "CODE", 
                    contents: fsitem.content || ""
                };
            })
            console.log("packiFiles", Object.keys(packiFiles));    
        }
    )
}


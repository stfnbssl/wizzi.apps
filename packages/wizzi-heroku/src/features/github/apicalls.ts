/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\github\apicalls.ts.ittf
*/
import fetch from 'node-fetch';
import path from 'path';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import {createFsFromVolume, Volume} from 'memfs';
import {fSystem} from 'wizzi-utils';
import {PackiFiles} from '../packi/types';
import {GithubRepoOptions, CreateGithubRepoOptions, CreateGithubBranchOptions, ClonedGitRepository, GithubApiRepository, FileDiff, FileDiffItem} from './types';

const volume = new Volume();

const fs = createFsFromVolume(volume);

(fs as any).kind = 'filesystem';
const wizzifs = fSystem.vfile(fs as fSystem.FsImpl);

// const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'test-'));
type cb<T> = (err: any, result: T) => void;

export async function getRepositories(accessToken: string):  Promise<GithubApiRepository[]> {

    return fetch(`https://api.github.com/user/repos`, getOptions(accessToken)).then(response => 
        
            response.json()
        ).then((responseData: any) => {
        
            return responseData;
        }
        )
    ;
}
    // const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'test-'));
    

export async function getRepository(owner: string, repo: string, accessToken: string):  Promise<any> {

    return fetch(`https://api.github.com/repos/${owner}/${repo}`, getOptions(accessToken)).then(response => 
        
            response.json()
        ).then(async (responseData: any) => {
        
            responseData._revisions = await getRevisions(owner, repo, accessToken);
            ;
            responseData._commits = await getCommits(owner, repo, accessToken);
            ;
            responseData._contents = await getContents(owner, repo, accessToken);
            ;
            return responseData;
        }
        )
    ;
}

export async function getPackiTemplateRepositories():  Promise<any> {

    return fetch(`https://api.github.com/users/stfnbssl/repos`, getOptions()).then(response => 
        
            response.json()
        ).then((responseData: GithubApiRepository[]) => {
        
            return responseData.filter(value => 
                
                    value.name.startsWith('packi-template-')
                );
        }
        )
    ;
}

export async function createRepository(accessToken: string, options: CreateGithubRepoOptions):  Promise<any> {

    return fetch(`https://api.github.com/user/repos`, postOptions(accessToken, options)).then(response => 
        
            response.json()
        ).then((responseData: any) => {
        
            return responseData;
        }
        )
    ;
}

export async function getRevisions(owner: string, repo: string, accessToken: string):  Promise<any> {

    return fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads`, getOptions(accessToken)).then(response => 
        
            response.json()
        ).then((responseData: any) => {
        
            return responseData;
        }
        )
    ;
}

export async function getBranches(owner: string, repo: string, accessToken: string):  Promise<any> {

    return fetch(`https://api.github.com/repos/${owner}/${repo}/branches`, getOptions(accessToken)).then(response => 
        
            response.json()
        ).then((responseData: any) => {
        
            return responseData;
        }
        )
    ;
}

export async function createBranch(accessToken: string, owner: string, repo: string, options: CreateGithubBranchOptions):  Promise<any> {

    return fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs`, postOptions(accessToken, {
            ref: `refs/heads/${options.name}>`, 
            sha: options.revisionFromHash
         })).then(response => 
        
            response.json()
        ).then((responseData: any) => {
        
            return responseData;
        }
        )
    ;
}

export async function cloneBranch(repo: GithubRepoOptions, branch: string = 'master', kind: string = 'all'):  Promise<ClonedGitRepository> {

    volume.reset();
    const dir = '/' + repo.name;
    return new Promise((resolve, reject) => 
        
            fs.mkdir(dir, async (err) => {
            
                if (err) {
                    return reject(err);
                }
                await git.clone({
                        fs, 
                        http, 
                        dir, 
                        url: `https://github.com/${repo.owner}/${repo.name}`, 
                        ref: `${branch}`, 
                        singleBranch: true, 
                        depth: 10, 
                        onAuth: (url: string) => {
                        
                            return 
                                // oauth2format 'github'
                                {
                                    password: repo.token
                                 };
                        }
                        
                     });
                let files = wizzifs.getFiles(dir, {
                    deep: true, 
                    documentContent: true
                 });
                const packies: PackiFiles = {};
                files.forEach((file) => {
                
                    if (file.relPath.startsWith('.git/') == false) {
                        if (kind === 'all' || kind === 'ittf' && file.relPath.endsWith('.ittf') == true) {
                            packies[file.relPath] = {
                                type: "CODE", 
                                contents: file.content as string
                             };
                        }
                    }
                }
                )
                const log = await git.log({
                        fs, 
                        dir
                     });
                resolve({
                    owner: repo.owner as string, 
                    name: repo.name, 
                    description: '', 
                    branch, 
                    files: packies, 
                    commitHistory: log
                 })
            }
            )
        );
}

export async function updateBranch(packiFiles: PackiFiles, repo: GithubRepoOptions, branch: string = 'master') {

    volume.reset();
    const dir = '/' + repo.name;
    fs.mkdir(dir, async (err) => {
    
        await git.clone({
                fs, 
                http, 
                dir, 
                url: `https://github.com/${repo.owner}/${repo.name}`, 
                ref: `${branch}`, 
                singleBranch: true, 
                depth: 10
             });
        
        /**
            * 
            * Object.keys(packiFiles).forEach(filePath=> {
            * if (packiFiles[filePath].type === "CODE") {
            * fs.writeFileSync(path.join(dir, filePath), packiFiles[filePath].contents);
            * }
            * })
            * 
        */
        
        // let msg = await git.log({fs, dir});
        
        // console.log(msg);
        let files = fs.readdirSync(dir);
        /**
            // 
            // Object.keys(packiFiles).forEach(filePath=> {
            // if (packiFiles[filePath].type === "CODE") {
            // fs.writeFileSync(path.join(dir, filePath), packiFiles[filePath].contents);
            // }
            // })
            // 
        */
        // let msg = await git.log({fs, dir});
        // console.log(msg);
        filesDiff(dir, packiFiles, async (err, result) => {
        
            try {
                Object.keys(result).forEach((entryName) => {
                
                    if (result[entryName].kind === '+' || result[entryName].kind === '<>') {
                        // fs.writeFileSync(path.join(dir, entryName), (result[entryName].b as FileDiffItem).content);
                        wizzifs.write(path.join(dir, entryName), (result[entryName].b as FileDiffItem).content)
                    }
                    else {
                        if (([
                            '.gitignore', 
                            'LICENSE', 
                            'README.md'
                        ].indexOf(entryName)) < 0) {
                            fs.unlinkSync(path.join(dir, entryName));
                        }
                    }
                }
                )
                await printStatus(dir);
                Object.keys(result).forEach(async (entryName) => {
                
                    if (result[entryName].kind === '+' || result[entryName].kind === '<>') {
                        await git.add({
                                fs, 
                                dir, 
                                filepath: entryName
                             });
                    }
                    else {
                        if (([
                            '.gitignore', 
                            'LICENSE', 
                            'README.md'
                        ].indexOf(entryName)) < 0) {
                            await git.remove({
                                    fs, 
                                    dir, 
                                    filepath: entryName
                                 });
                        }
                    }
                }
                )
                await printStatus(dir);
                let msg = await git.commit({
                        fs, 
                        dir, 
                        message: 'Packi git export ' + new Date().toDateString(), 
                        author: {
                            name: 'packi', 
                            email: 'packi@gmail.com'
                         }
                     });
                
                // let msg = await git.listFiles({fs, dir});
                
                // let msg = await git.listFiles({fs, dir});
                await printStatus(dir);
                let pushResponse = await git.push({
                        fs, 
                        http, 
                        dir, 
                        remote: 'origin', 
                        ref: `${branch}`, 
                        onAuth: (url: string) => {
                        
                            return 
                                // oauth2format 'github'
                                
                                // username: repo.owner,
                                
                                // password: repo.password,
                                
                                // username: 'stfnbssl',
                                
                                // password: 'gi++++01',
                                {
                                    password: repo.token
                                 };
                        }
                        
                     });
            } 
            catch (ex) {
                console.log("[31m%s[0m", 'updateBranch.push. err', ex);
            } 
        }
        )
    }
    )
}

export async function getCommits(owner: string, repo: string, accessToken: string):  Promise<any> {

    return fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, getOptions(accessToken)).then(response => 
        
            response.json()
        ).then((responseData: any) => {
        
            return responseData;
        }
        )
    ;
}

export async function getContents(owner: string, repo: string, accessToken: string):  Promise<any> {

    return fetch(`https://api.github.com/repos/${owner}/${repo}/contents`, getOptions(accessToken)).then(response => 
        
            response.json()
        ).then((responseData: any) => {
        
            return responseData;
        }
        )
    ;
}

function filesDiff(dir: string, packiFiles: PackiFiles, callback: cb<{ 
    [k: string]: FileDiff;
}>):  void {

    wizzifs.getFiles(dir, {
        deep: true, 
        documentContent: true
     }, (err, result) => {
    
        const diff: { 
            [k: string]: FileDiff;
        } = {};
        result.forEach((entry) => {
        
            if (entry.relPath.startsWith('.git/') == false) {
                diff[entry.relPath] = {
                    kind: '-', 
                    a: {
                        path: entry.relPath, 
                        content: entry.content as string
                     }
                 };
            }
        }
        )
        Object.keys(packiFiles).forEach((entryName) => {
        
            if (diff[entryName]) {
                if (diff[entryName].a && ((diff[entryName].a as FileDiffItem).content) === packiFiles[entryName].contents) {
                    delete diff[entryName]
                }
                else {
                    diff[entryName].kind = '<>';
                    diff[entryName].b = {
                        path: entryName, 
                        content: packiFiles[entryName].contents as string
                     };
                }
            }
            else {
                diff[entryName] = {
                    kind: '+', 
                    b: {
                        path: entryName, 
                        content: packiFiles[entryName].contents as string
                     }
                 };
            }
        }
        )
        callback(null, diff);
    }
    )
}

async function printStatus(dir: string):  Promise<void> {

    return new Promise((resolve, reject) => 
        
            wizzifs.getFiles(dir, {
                deep: true, 
                documentContent: false
             }, async (err, files) => {
            
                if (err) {
                    return reject(err);
                }
                for (let file of files) {
                    if (file.relPath.startsWith('.git/') == false) {
                        let msg = await git.status({
                                fs, 
                                dir, 
                                filepath: file.relPath
                             });
                    }
                }
                resolve();
            }
            )
        );
}

function getOptions(accessToken?: string) {

    return {
            method: 'GET', 
            headers: headers(accessToken)
         };
}

function postOptions(accessToken: string, body: any) {

    return {
            method: 'POST', 
            headers: headers(accessToken), 
            body: JSON.stringify(body)
         };
}

function headers(accessToken?: string):  { 
    [k: string]: string;
} {

    const ret: { 
        [k: string]: string;
    } = {
        'Accept': 'application/vnd.github.v3+json', 
        'Content-Type': 'application/json'
     };
    if (accessToken) {
        ret['Authorization'] = 'token ' + (accessToken as string);
    }
    return ret;
}

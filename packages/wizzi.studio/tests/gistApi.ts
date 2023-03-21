import {wizziGistApi} from "../src/features/wizziGist"

const tnum: number = process.argv[2] ? parseInt(process.argv[2]) : 3;

const hash = '6a5851040069ccb00b95ed0794266167:3649083d1a520e46ff9432584125e8ff96a245cbec5128c387fc20d95b005f3c7e88814ab6beb7b3171d88f9eb9e0a6b7ec559a4fbdd8b25a3a46a3448027c1a889948bbd5726d1e40a30d9e8dd8bed9fdfe5bdb55f9ca66c32547904d4b39ed';

if (tnum == 1) {
    wizziGistApi.createGist("gist", "hello", "js")
        .then( result => {
            console.log("createGist.result", result);
        }).catch(err => {
            console.log("createGist.err", err);
        });
}

if (tnum == 2) {
    wizziGistApi.updateGist(hash, "hello\tbye")
        .then( result => {
            console.log("updateGist.result", result);
        }).catch(err => {
            console.log("updateGist.err", err);
        });
}

if (tnum == 3) {
    wizziGistApi.deleteGist(hash)
        .then( result => {
            console.log("deleteGist.result", result);
        }).catch(err => {
            console.log("deleteGist.err", err);
        });
}

if (tnum == 4) {
    wizziGistApi.getGist(hash)
        .then( result => {
            console.log("getGist.result", result);
        }).catch(err => {
            console.log("getGist.err", err);
        });
}

if (tnum == 5) {
    wizziGistApi.getGistList('gist')
        .then( result => {
            console.log("getGistList.result", result);
        }).catch(err => {
            console.log("getGistList.err", err);
        });
}

if (tnum == 6) {
    wizziGistApi.executeGist(hash)
        .then( result => {
            console.log("executeGist.result", result);
        }).catch(err => {
            console.log("executeGist.err", err);
        });
}
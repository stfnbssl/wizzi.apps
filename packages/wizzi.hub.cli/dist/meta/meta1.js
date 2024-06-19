"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaProvides = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
// const baseApiUrl:string = 'https://www.wizzihub.com/api/v1';
const baseApiUrl = 'http://localhost:5100/api/v1';
function metaProvides() {
    const url = baseApiUrl + '/meta/provides';
    const options = {
        method: 'GET',
        headers: {}
    };
    (0, node_fetch_1.default)(url, options)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.error('error:' + err));
}
exports.metaProvides = metaProvides;
//# sourceMappingURL=meta1.js.map
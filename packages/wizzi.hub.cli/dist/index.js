"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Command } = require("commander"); // add this line
const figlet = require("figlet");
const meta1_1 = require("./meta/meta1");
//add the following line
const program = new Command();
console.log(figlet.textSync("@wizzi/factory examples"));
program
    .description("Lab wizzihub.com CLI")
    .option("--mp1", "Execute a meta provides get")
    .option("--mp2", "Execute a meta provides get")
    .parse(process.argv);
const options = program.opts();
console.log('choice', options);
if (options.mp1) {
    (0, meta1_1.metaProvides)();
}
else if (options.mp2) {
    ;
}
else {
    program.help();
}
//# sourceMappingURL=index.js.map
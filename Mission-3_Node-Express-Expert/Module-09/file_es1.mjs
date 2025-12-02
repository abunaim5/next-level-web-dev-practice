// common js to esm
import { a } from "./file_es2.mjs";
import { a as x } from "./file_es3.mjs";
import {} from "./utils_esm/index.mjs"

console.log(a, x);


// const { a } = require("./file2");
// const { a: x } = require("./file3");
// const { add } = require("./utils/add");
// const { subs } = require("./utils/subs");
// const { add, subs } = require("./utils");

// console.log(a, x);

// console.log(add(9, 13));
// console.log(subs(x, a));
// Simple Node.js server

// console.log('Node.js backend is running!');

//console.log(process.argv);

// let args = process.argv;

// for (let i =2; i< args.length; i++){
//     console.log("hello to", args[i]);
// }

// .... use of (module.export) is it send the data of that file to 
// other file , then by (require) we can use that file that in current file
// but if we require it without export . it will return {} (empty object)braket bydefault

// ...... to require file.....
// const math = require("./math");

// console.log(math.sum(2,3));
// console.log(math.sub(2,3));
// console.log(math.PI);
 

// ...... to require derictory........

// const info = require("./fruits");
// console.log(info[1].name);


// ... access the data of other file we can use "import" alsso in place of 
// "require" just to acesses the data indivually becoz require work as object

import {sum,PI} from "./math.js";
console.log(sum(1,2));

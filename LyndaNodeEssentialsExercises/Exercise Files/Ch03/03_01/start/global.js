var path=require('path');

var hello = "Hello World!";
var justHello = hello.slice(5);

//console.log(justHello);
//console.log(__dirname);
//console.log(__filename);

console.log(path.basename(__filename));
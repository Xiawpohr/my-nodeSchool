var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var str = file.toString();
var line = str.split('\n').length - 1;
console.log(line);

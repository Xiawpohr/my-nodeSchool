var concat = require('concat-stream');
var input = process.stdin;
var output = process.stdout;
var conc = concat(function(data){
	 var result = data.toString().split('').reverse().join('');
	 output.write(result);
});
input.pipe(conc);

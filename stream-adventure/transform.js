var through = require('through2');
var input =  process.stdin;
var output = process.stdout;
var stream = through(
		function(chuck,enc,next){
			var result = chuck.toString().toUpperCase();
			this.push(result);
			next();
		},
		function(done){
			done();
		});
input.pipe(stream).pipe(output);

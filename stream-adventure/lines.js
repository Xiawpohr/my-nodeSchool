var through = require('through2'),
    split = require('split2');
var input = process.stdin;
var output = process.stdout;
var tag = true;
var trans = through(
		function(buf,enc,next){
			var result;
			if (tag){
				result = buf.toString().toLowerCase();
				tag = false;
			} else {
				result = buf.toString().toUpperCase();
				tag = true;
			}
			this.push(result + '\n');
			next();
		},
		function(done){
			done();
		})
input.pipe(split()).pipe(trans).pipe(output);


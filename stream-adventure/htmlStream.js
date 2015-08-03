var trumpet = require('trumpet'),
    through = require('through2');
var tr = trumpet();
var input = process.stdin,
    output = process.stdout;
var loud = tr.selectAll('.loud').createStream();
loud.pipe(through(function(buf,enc,next){
	var result = buf.toString().toUpperCase();
	this.push(result);
	next();
})).pipe(loud);
input.pipe(tr).pipe(output);

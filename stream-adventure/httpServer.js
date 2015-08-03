var http = require('http'),
    through = require('through2');
var port = process.argv[2];
var trans = through(function(buf,enc,next){
	var result = buf.toString().toUpperCase();
	this.push(result);
	next();
});
var server = http.createServer(function(req,res){
	req.pipe(trans).pipe(res);
});
server.listen(port);

var http = require('http'),
    fs = require('fs');
var port = process.argv[2];
var fileName = process.argv[3];
var server = http.createServer(function(req,res){
	var src = fs.createReadStream(fileName);
	src.pipe(res);
});
server.listen(port);

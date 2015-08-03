var http = require('http');
var port = process.argv[2];
var server = http.createServer(function(req,res){
	if (req.method !== 'POST'){ return res.write('Sent me a POST.\n');}
	req.on('data',function(chuck){
		 var data = chuck.toString().toUpperCase();
		 return res.write(data);
	});
	req.on('end',function(){
		res.end();
	});
});
server.listen(port);

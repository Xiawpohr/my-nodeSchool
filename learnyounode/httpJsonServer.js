var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);
var server = http.createServer(function(req,res){
	if (req.method !== 'GET'){return res.write('sent me a GET.\n');}
	res.writeHead(200,{'content-type':'application/json'});
	var urlObject = url.parse(req.url,true);
	var pathName = urlObject.pathname.split('/')[2];
	var time = new Date(urlObject.query.iso);
	switch (pathName){
		case 'parsetime':
			var output = {
				'hour':time.getHours(),
				'minute':time.getMinutes(),
    				'second':time.getSeconds()
			};
			break;
		case 'unixtime':
			var output = {'unixtime':time.getTime()};
			break;
	}
	res.write(JSON.stringify(output));
	res.end();
});
server.listen(port);

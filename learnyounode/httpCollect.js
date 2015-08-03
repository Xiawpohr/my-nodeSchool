http = require('http');
var url = process.argv[2];
http.get(url,function(res){
	var pipe = [];
	res.setEncoding('utf8');
	res.on('data',function(data){
		pipe.push(data);
	});
	res.on('error',console.error);
	res.on('end',function(){
		console.log(pipe.join('').length);
		console.log(pipe.join(''));
	});
});

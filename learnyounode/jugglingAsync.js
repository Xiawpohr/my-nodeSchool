var http = require('http');
var url = process.argv.slice(2,process.argv.length);
url.forEach(function(item){
	http.get(item,function(res){
		var pipe = [];
		res.setEncoding('utf8');
		res.on('error',console.error);
		res.on('data',function(data){
			pipe.push(data);
		});
		res.on('end',function(){
			console.log(pipe.join(''));
		});
	});
});

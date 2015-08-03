var filterExtname = require('./filterExtname.js');
filterExtname(process.argv[2],process.argv[3],function(err,files){
	if (err) { return console.log(err);}
	files.forEach(function(item){
		console.log(item);
	});
});

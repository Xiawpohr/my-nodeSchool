var fs = require('fs');
module.exports = function(path,extname,callback){
	fs.readdir(path,function(err,files){
		if (err) { return callback(err);}
		var filtered = [];
		files.forEach(function(item){
			if (item.split('.')[1] === extname){
				filtered.push(item);
			}
		});
		return callback(null,filtered);
	});
}

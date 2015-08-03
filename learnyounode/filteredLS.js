var fs = require('fs');
fs.readdir(process.argv[2],function(err,list){
	if(!err){
		list.forEach(function(item,index,array){
			if(item.split('.')[1] === process.argv[3]){
				console.log(item);
			};
		});
	}
});

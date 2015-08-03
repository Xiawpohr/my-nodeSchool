var net = require('net');
var port = Number(process.argv[2]);

function zeroFill(i){ return ( i<10 ? '0':'') + i}
function now(){
	var date = new Date();
	var time = '' + zeroFill(date.getFullYear()) + 
		   '-' + zeroFill(date.getMonth()+1) + 
		   '-' + zeroFill(date.getDate()) + 
		   ' ' + zeroFill(date.getHours()) + 
		   ':' + zeroFill(date.getMinutes());
	return time;
}

var server = net.createServer(function(socket){
	socket.write(now());
	socket.end('\n');
});
server.listen(port);

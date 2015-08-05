function getShortMessages(messages){
	return messages.map(function(obj){
		return obj.message;
	}).filter(function(mes){
		return mes.length < 50;
	});
}
module.exports = getShortMessages;

function countDuck(){
	var count = 0;
	for (var i=0;i < arguments.length;i++){
		if (({}).hasOwnProperty.call(arguments[i],'quack')){
			count++;
		}
	}
	return count;
}
module.exports = countDuck;

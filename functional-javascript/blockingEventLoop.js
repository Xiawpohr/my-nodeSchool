function repeat(operation,num){
	if (num <= 0) return;
        operation();
	if (num % 10 === 0){
		console.log('Async');
		setTimeout(function(){
			return repeat(operation,--num);
		},10);
	} else{
		console.log('sssync');
   	     return repeat(operation,--num);
	}
}
module.exports = repeat;

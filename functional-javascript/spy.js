function Spy(target,method){
	var originalFunc = target[method];
	var result = {
		count:0
	};
	target[method] = function(){
		result.count++;
		return originalFunc.apply(this,arguments);
	}
	return result;
}
module.exports = Spy;

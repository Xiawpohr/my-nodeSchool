function countWords(input){
	return input.reduce(function(prev,curr){
		prev[curr] = (prev[curr] || 0) + 1;
		return prev;
	},{});
}
module.exports = countWords;

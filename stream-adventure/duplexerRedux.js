var duplexer = require('duplexer2'),
    through = require('through2').obj;
module.exports = function(counter){
	var counts = {};
	var input = through(write, end);
	return duplexer(input, counter);

	function write(buf,enc,next){
		counts[buf.country] = (counts[buf.country] || 0) + 1;
		next();
	}
	function end(done) {
		counter.setCounts(counts);
		done();
	}
};

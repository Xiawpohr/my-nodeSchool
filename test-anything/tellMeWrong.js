var assert = require('assert');
var isCoolNumber = require(process.argv[2]);
assert(isCoolNumber(42), 'result should be 42.');

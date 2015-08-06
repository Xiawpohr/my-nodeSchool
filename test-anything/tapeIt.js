var test = require('tape');
var fancify = require(process.argv[2]);
test('Is fancify fancy?',function(t){
	var ref = ['hello',true,'!'];
	t.plan(4);
	t.ok(fancify(ref[0]) == ('~*~' + ref[0] + '~*~'),'first param is ok.');
	t.ok(fancify(ref[0],ref[1]) == ('~*~' + ref[0].toUpperCase() + '~*~'),'second param is ok.');
	t.equal(fancify(ref[0],false,ref[2]),'~!~hello~!~','third param is ok.');
	t.pass('code is perfect.');
	t.end();
})
test.createStream().pipe(process.stdout);

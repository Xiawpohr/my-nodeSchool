var test = require('tape');
var repeatCallback = require(process.argv[2]);
test('call me maybe',function(t){
	var n = 5;
	t.plan(n);
	repeatCallback(n,function(){
		t.pass('callback works.');
	})
	t.end();
});
test.createStream().pipe(process.stdout);

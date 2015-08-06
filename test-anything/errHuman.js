var test = require('tape');
var feedCat = require(process.argv[2]);
test('feedCat',function(t){
	t.plan(2);
	t.ok(feedCat('food') === 'yum','yum');
	t.throws(feedCat.bind(null,'chocolate'),'cat cannot eat chocolate.');
	t.end();
})
test.createStream().pipe(process.stdout);

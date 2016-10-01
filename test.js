var _ = require('lodash');
var del = require('del');
var globby = require('globby');
var self = require('./');

var test = require('ava');

test('should output 3 files', async t => {
	var resp = await self('./test/*.png','./test/output',3).then(function(){
		var output = globby.sync('./test/output/*.png');
		t.is(output.length,3);
		t.pass();
		del.sync('./test/output/*');
	})
});

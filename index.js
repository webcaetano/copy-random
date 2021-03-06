var globby = require('globby');
var path = require('path');
var meow = require('meow');
var fs = require('fs');
var cpy = require('cpy');
var _ = require('lodash');

// insert defaults here
var defaults = {
}

var self = function(src,dest,size,options){
	if(size===undefined) size = 2;
	options = _.extend({},defaults,options);


	return cpy(_.sampleSize(globby.sync(src),size), dest, options).catch(function(err){
		if (err.name === 'CpyError') {
			console.error(err.message);
			process.exit(1);
		} else {
			throw err;
		}
	});
}


module.exports = self;






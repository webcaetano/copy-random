#!/usr/bin/env node
'use strict';
var meow = require('meow');
var _ = require('lodash');
var self = require('./');

var cli = meow(`
	Usage
	  $ cpyr <source>... <destination> <size>

	Options
	  --no-overwrite       Do not overwrite the destination
	  --parents            Preserve path structure
	  --cwd=<dir>          Working directory for files
	  --rename=<filename>  Rename all <source> filenames to <filename>

	<source> can contain globs if quoted

	Examples
	  Copy 3 random .png files in src folder into dist except src/goat.png
	  $ cpy "src/*.png" "!src/goat.png" dist 3

	  Copy 3 random .html files inside src folder into dist and preserve path structure
	  $ cpy "**/*.html" "../dist/" 3 --cwd=src --parents
`, {
	string: ['_']
});


var defaults = {
}

var options = _.extend({},defaults,{
	cwd: cli.flags.cwd || process.cwd(),
	rename: cli.flags.rename,
	parents: cli.flags.parents,
	overwrite: cli.flags.overwrite !== false,
	nonull:true,
})


var size = cli.input.pop();
var dest = cli.input.pop();

self(cli.input,dest,size,options);

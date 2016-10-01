# copy-random

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
<!-- [![Test coverage][coveralls-image]][coveralls-url] -->

> Copy random files from a folder

## Installation

```
npm install copy-random --save
```

## Usage

```javascript
var cpy = require('copy-random');

cpyr('./test/*.png','./test/output',3).then(function(){
})
```

## CLI

```
npm install copy-random -g
```

```
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
```


## License

MIT

[npm-image]: https://img.shields.io/npm/v/copy-random.svg?style=flat-square
[npm-url]: https://npmjs.org/package/copy-random
[travis-image]: https://img.shields.io/travis/webcaetano/copy-random.svg?style=flat-square
[travis-url]: https://travis-ci.org/webcaetano/copy-random
<!-- [coveralls-image]: https://img.shields.io/coveralls/blakeembrey/copy-random.svg?style=flat 
[coveralls-url]: https://coveralls.io/r/blakeembrey/copy-random?branch=master
-->

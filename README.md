[![(a histogram of downloads)](https://nodei.co/npm-dl/shee2arr.png?height=3)](https://npmjs.org/package/shee2arr)

This module (`shee2arr`) converts an Excel sheet to a 2D array; that Excel sheet has to be returned from the [`xlsx`](https://github.com/SheetJS/js-xlsx/) module, which is also used to parse the sheet.

This module is written in JavaScript and requires [Node.js](http://nodejs.org/) to run.

## Installing shee2arr

[![(npm package version)](https://nodei.co/npm/shee2arr.png?downloads=true&downloadRank=true)](https://npmjs.org/package/shee2arr)

* Latest packaged version: `npm install shee2arr`

* Latest githubbed version: `npm install https://github.com/Mithgol/shee2arr/tarball/master`

The npm package does not contain the tests, they're published on GitHub only.

You may visit https://github.com/Mithgol/shee2arr#readme occasionally to read the latest `README` because the package's version is not planned to grow after changes when they happen in `README` only. (And `npm publish --force` is [forbidden](http://blog.npmjs.org/post/77758351673/no-more-npm-publish-f) nowadays.)

## Using shee2arr

When you `require()` the installed module, you get a function that is given an Excel sheet and returns a 2D array of that sheet's rows and columns:

```js
var shee2arr = require('shee2arr');
var array2D = shee2arr(anExcelSheet);
```

## Testing shee2arr

[![(build testing status)](https://img.shields.io/travis/Mithgol/shee2arr/master.svg?style=plastic)](https://travis-ci.org/Mithgol/shee2arr)

It is necessary to install [JSHint](http://jshint.com/) for testing.

* You may install JSHint globally (`npm install jshint -g`) or locally (`npm install jshint` in the directory of shee2arr).

After that you may run `npm test` (in the directory of shee2arr). Only the JS code errors are caught; the code's behaviour is not tested.

## License

MIT license (see the `LICENSE` file).
# path-params [![Build Status](https://api.travis-ci.org/h2non/path-params.svg?branch=master&style=flat)][travis] [![NPM](https://img.shields.io/npm/v/path-params.svg)](https://www.npmjs.org/package/path-params) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Replace path params based on `express` route notation.

## Installation

Via npm:
```bash
npm install path-params --save
```

Via bower:
```bash
bower install path-params --save
```

Or loading the script:
```html
<script src="//cdn.rawgit.com/h2non/path-params/master/path-params.js"></script>
```

## Environments

Runs in any [ES5 compliant](http://kangax.github.io/mcompat-table/es5/) engine:

![Node.js](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
---  | --- | --- | --- | --- | --- |
+0.8 | +5 | +3.5 | +9 | +12 | +5 |

## Usage

```js
const pathParams = require('path-params')

const path = pathParams('/users/:id/:action', { id: 123, action: 'foo' })

if (path instanceof Error) {
  console.error('Params error:', err.message)
} else {
  console.log('Path:', path) // -> '/users/123/foo'
}
```

## API

### pathParams(path, params) => `String|Error`

## License

[MIT](http://opensource.org/licenses/MIT) © Tomas Aparicio

[travis]: http://travis-ci.org/h2non/path-params

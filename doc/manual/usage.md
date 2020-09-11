# Usage

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

First, require the polyfill at the entry point of your application
```js
require( 'regenerator-runtime/runtime' );
// or
import 'regenerator-runtime/runtime.js' ;
```

Then, import the library where needed
```js
const skiplist = require( '@aureooms/js-skip-list' ) ;
// or
import * as skiplist from '@aureooms/js-skip-list' ;
```

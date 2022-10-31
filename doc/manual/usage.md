# Usage

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

First, require the polyfill at the entry point of your application
```js
await import( 'regenerator-runtime/runtime.js' );
// or
import 'regenerator-runtime/runtime.js' ;
```

Then, import the library where needed
```js
const skiplist = await import( '@data-structure/skip-list' ) ;
// or
import * as skiplist from '@data-structure/skip-list' ;
```

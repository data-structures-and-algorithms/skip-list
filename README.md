:fast_forward: [@aureooms/js-skip-list](https://aureooms.github.io/js-skip-list)
==

Skip list data structure for JavaScript.
See [docs](https://aureooms.github.io/js-skip-list/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {decreasing} from '@aureooms/js-compare';
import {range} from '@aureooms/js-itertools';
import SkipList from '@aureooms/js-skip-list';
const list = SkipList.from(decreasing, range(10000));
[...list]; // [9999, 9998, ...]
list.add(...)
list.get(...)
list.has(...)
list.remove(...)
```

[![License](https://img.shields.io/github/license/aureooms/js-skip-list.svg)](https://raw.githubusercontent.com/aureooms/js-skip-list/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-skip-list.svg)](https://www.npmjs.org/package/@aureooms/js-skip-list)
[![Build](https://img.shields.io/travis/aureooms/js-skip-list/main.svg)](https://travis-ci.org/aureooms/js-skip-list/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-skip-list.svg)](https://david-dm.org/aureooms/js-skip-list)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-skip-list.svg)](https://david-dm.org/aureooms/js-skip-list?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-skip-list.svg)](https://github.com/aureooms/js-skip-list/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-skip-list.svg)](https://www.npmjs.org/package/@aureooms/js-skip-list)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-skip-list.svg)](https://codeclimate.com/github/aureooms/js-skip-list/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-skip-list.svg)](https://codeclimate.com/github/aureooms/js-skip-list/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-skip-list/main.svg)](https://codecov.io/gh/aureooms/js-skip-list)
<!--[![Code coverage (alls)](https://img.shields.io/coveralls/github/aureooms/js-skip-list/main.svg)](https://coveralls.io/r/aureooms/js-skip-list)-->
<!--[![Code coverage (clim)](https://img.shields.io/codeclimate/coverage/aureooms/js-skip-list.svg)](https://codeclimate.com/github/aureooms/js-skip-list/trends/test_coverage_new_code)-->
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-skip-list.svg)](https://codeclimate.com/github/aureooms/js-skip-list/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-skip-list/badge.svg)](https://aureooms.github.io/js-skip-list/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-skip-list)](https://bundlephobia.com/result?p=@aureooms/js-skip-list)

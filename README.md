:fast_forward: [@data-structure/skip-list](https://data-structures-and-algorithms.github.io/skip-list)
==

Skip list data structure for JavaScript.
See [docs](https://data-structures-and-algorithms.github.io/skip-list/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {decreasing} from '@total-order/primitive';
import {range} from '@iterable-iterator/range';
import {SkipList} from '@data-structure/skip-list';
const list = SkipList.from(decreasing, range(10000));
[...list]; // [9999, 9998, ...]
list.add(...)
list.get(...)
list.has(...)
list.remove(...)
```

[![License](https://img.shields.io/github/license/data-structures-and-algorithms/skip-list.svg)](https://raw.githubusercontent.com/data-structures-and-algorithms/skip-list/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@data-structure/skip-list.svg)](https://www.npmjs.org/package/@data-structure/skip-list)
[![Build](https://img.shields.io/travis/data-structures-and-algorithms/skip-list/main.svg)](https://travis-ci.com/data-structures-and-algorithms/skip-list/branches)
[![Dependencies](https://img.shields.io/librariesio/github/data-structures-and-algorithms/skip-list.svg)](https://github.com/data-structures-and-algorithms/skip-list/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/data-structures-and-algorithms/skip-list.svg)](https://github.com/data-structures-and-algorithms/skip-list/issues)
[![Downloads](https://img.shields.io/npm/dm/@data-structure/skip-list.svg)](https://www.npmjs.org/package/@data-structure/skip-list)

[![Code issues](https://img.shields.io/codeclimate/issues/data-structures-and-algorithms/skip-list.svg)](https://codeclimate.com/github/data-structures-and-algorithms/skip-list/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/data-structures-and-algorithms/skip-list.svg)](https://codeclimate.com/github/data-structures-and-algorithms/skip-list/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/data-structures-and-algorithms/skip-list/main.svg)](https://codecov.io/gh/data-structures-and-algorithms/skip-list)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/data-structures-and-algorithms/skip-list.svg)](https://codeclimate.com/github/data-structures-and-algorithms/skip-list/trends/technical_debt)
[![Documentation](https://data-structures-and-algorithms.github.io/skip-list/badge.svg)](https://data-structures-and-algorithms.github.io/skip-list/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@data-structure/skip-list)](https://bundlephobia.com/result?p=@data-structure/skip-list)

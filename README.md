
# set-comparision
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![dependencies status](https://david-dm.org/ksxnodemodules/set-comparision.svg)](https://david-dm.org/ksxnodemodules/set-comparision#info=dependencies)
[![devDependencies status](https://david-dm.org/ksxnodemodules/set-comparision/dev-status.svg)](https://david-dm.org/ksxnodemodules/set-comparision#info=devDependencies)
[![Travis CI](https://travis-ci.org/ksxnodemodules/set-comparision.svg?branch=master)](https://travis-ci.org/ksxnodemodules/set-comparision)
![downloads](https://img.shields.io/npm/dt/set-comparision.svg)
![version](https://img.shields.io/npm/v/set-comparision.svg)
[![license](https://img.shields.io/npm/l/set-comparision.svg)](http://spdx.org/licenses/MIT)

## Language

ECMAScript 6

## Usage

### Import

#### Normal

```javascript
const compare = require('set-comparision') // Equivalent to `template(template.OBJECT_EQUAL)`, see below
```

#### Advanced

```javascript
const template = require('set-comparision/x')
const compare = template(myEqualFunction)
```

### Functions

 * `A` and `B` are instances of a `Set`-like class

 * `a` and `b` are elements of `A` and `B` above

#### `compare(A, B)`

Equivalent to `compare.equal(A, B)`

#### `compare.equal(A, B)`

Returns `true` if every elements of `A` are found in `B` and vice versa

#### `compare.subset(A, B)`

Returns `true` if `A` is a [subset](https://en.wikipedia.org/wiki/Subset) of `B`

#### `compare.superset(A, B)`

Returns `true` if `A` is a [superset](https://en.wikipedia.org/wiki/Subset) of `B`

#### `compare.notFunc(A, B)`
 * with `Func` is either `Equal`, `Subset` or `Superset`

Returns negative boolean of `compare.func(A, B)`, e.g. `compare.notEqual(A, B)` is `!compare.equal(A, B)`

#### `compare.xCompareSet(myEqualFunction)`

Create a new set of set-comparision functions based on `myEqualFunction` as element equality function

`myEqualFunction` takes 2 parameters, which are `a` and `b`, and returns a boolean which `true` for equal and `false` otherwise

Equivalent to `template(myEqualFunction)` with `template = require('set-comparision/x')`

#### `compare.for(myEqualFunction)`

Equivalent to `compare.xCompareSet(myEqualFunction)`

#### `compare.STRICT_EQUAL(a, b)`

```javascript
compare.STRICT_EQUAL = (a, b) => a === b
```

#### `compare.OBJECT_EQUAL(a, b)`

```javascript
compare.OBJECT_EQUAL = (a, b) => Object.is(a, b)
```

## License

MIT

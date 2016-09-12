'use strict'

const {assign, is} = Object
const STRICT_EQUAL = (a, b) => a === b
const OBJECT_EQUAL = (a, b) => is(a, b)
const COMMON_PROPS = {STRICT_EQUAL, OBJECT_EQUAL, xCompareSet, for: xCompareSet}
const negfn = fn => (a, b) => !fn(a, b)

function xCompareSet (elementEqual) {
  const equal = (a, b) =>
    subset(a, b) && subset(b, a)
  const notEqual = negfn(equal)
  const subset = (a, b) => {
    for (const x of a) {
      if (!b.has(x)) {
        return false
      }
    }
    return true
  }
  const notSubset = negfn(subset)
  const superset = (a, b) => subset(b, a)
  const notSuperset = negfn(superset)
  return assign(
    (a, b) => equal(a, b),
    {equal, notEqual, subset, notSubset, superset, notSuperset},
    COMMON_PROPS
  )
}

module.exports = assign(xCompareSet, COMMON_PROPS)

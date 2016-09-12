'use strict'

const assert = require('assert')
const compare = require('..')
const {console} = global
const {STRICT_EQUAL, OBJECT_EQUAL} = compare

test()

function test () {
  const pattern = [
    compare,
    compare.for(STRICT_EQUAL),
    compare.for(OBJECT_EQUAL)
  ]
  pattern.forEach(testStage)
  console.info('PASSED ALL STAGES.')
}

function testStage (compare, stage) {
  const {equal, notEqual, subset, notSubset, superset, notSuperset} = compare
  const left = new Set('abcdef')
  const rightEqual = new Set('abcdef')
  const rightSub = new Set('cde')
  const rightSuper = new Set('012345abcdef!@#$')
  const rightDiffer = new Set('&*()')
  console.log(`Testing stage ${stage}...`)
  assert(compare(left, rightEqual), 'compare()')
  assert(equal(left, rightEqual), 'equal()')
  assert(notEqual(left, rightDiffer), 'notEqual()')
  assert(subset(left, rightSuper), 'subset()')
  assert(notSubset(left, rightSub), 'notSubset()')
  assert(notSubset(left, rightDiffer), 'notSubset()')
  assert(superset(left, rightSub), 'superset()')
  assert(notSuperset(left, rightSuper), 'notSuperset()')
  assert(notSuperset(left, rightDiffer), 'notSuperset()')
  console.log(`Passed test stage ${stage}.`)
}

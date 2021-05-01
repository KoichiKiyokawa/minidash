const { performance } = require('perf_hooks')
const { pick } = require('rhodash')
const { range } = require('rhodash')

const obj = Object.fromEntries(
  range(97, 97 + 26).map((code, i) => [String.fromCharCode(code), i + 1])
)

const keys = 'abcdefghijklmnopqrstu'.split('')

// pick (for of)
;(() => {
  console.log('pick (for of)')

  const start = performance.now()
  for (let i = 0; i < 100; i++) {
    pick(obj, keys)
  }
  const end = performance.now()

  console.log(`time: ${end - start}`)
})()

// original for
;(() => {
  console.log('---------------')
  console.log('pick (for)')

  const start = performance.now()
  for (let i = 0; i < 100; i++) {
    for_pick(obj, keys)
  }
  const end = performance.now()

  console.log(`time: ${end - start}`)
})()

// original while
;(() => {
  console.log('---------------')
  console.log('pick (while)')

  const start = performance.now()
  for (let i = 0; i < 100; i++) {
    while_pick(obj, keys)
  }
  const end = performance.now()
  // console.log('---------------')

  console.log(`time: ${end - start}`)
})()

function for_pick(obj, keys) {
  const result = {}
  const { length } = keys
  for (let i = 0; i < length; i++) {
    const key = keys[i]
    result[key] = obj[key]
  }
  return result
}

function while_pick(obj, keys) {
  const result = {}
  let i = -1
  const { length } = keys
  while (++i < length) {
    const key = keys[i]
    result[key] = obj[key]
  }
  return result
}

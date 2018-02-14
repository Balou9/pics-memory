var tape = require('tape')
var pics_memory = require('./index.js')


tape('Test if function output', function (t) {
  var input = pics_memory
  t.true(typeof input, 'object', 'is an object')
  t.end()
})

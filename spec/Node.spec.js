var Node = require('../lib/Node');
var tape = require('tape');

tape('Node', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new Node(7);
  ACTUAL   = test.data;
  EXPECTED = 7;

  assert.equal(ACTUAL, EXPECTED, 'it sets a data value');

  assert.end();
});

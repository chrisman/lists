var tape = require('tape');
var List = require('../List');

tape('List', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new List();
  ACTUAL   = test.print();
  EXPECTED = [];

  assert.deepEqual(ACTUAL, EXPECTED, 'it initializes to an empty array');

  assert.end();
});

tape('addLast', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new List().addLast(7);
  ACTUAL   = test.print();
  EXPECTED = [7];

  assert.deepEqual(ACTUAL, EXPECTED, 'it adds to an array');

  test     = new List().addLast(7).addLast(14).addLast(21);
  ACTUAL   = test.print();
  EXPECTED = [7, 14, 21];

  assert.deepEqual(ACTUAL, EXPECTED, 'it adds multiple items');

  assert.end();
});

tape('removeLast', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new List().addLast(7);
  ACTUAL   = test.removeLast();
  EXPECTED = 7;

  assert.deepEqual(ACTUAL, EXPECTED, 'it returns the item removed');

  test     = new List().addLast(7).addLast(14).addLast(21);
  test.removeLast();
  ACTUAL   = test.print();
  EXPECTED = [7, 14];

  assert.deepEqual(ACTUAL, EXPECTED, 'it removes an item from the end');

  assert.end();
});

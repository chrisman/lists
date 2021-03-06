var tape = require('tape');
var Queue = require('../lib/Queue');

tape('Queue', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new Queue();
  ACTUAL   = test.print();
  EXPECTED = [];

  assert.deepEqual(ACTUAL, EXPECTED, 'it initializes to an empty array');

  assert.end();
});

tape('push', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new Queue().push(7);
  ACTUAL   = test.print();
  EXPECTED = [7];

  assert.deepEqual(ACTUAL, EXPECTED, 'it adds to an array');

  test     = new Queue().push(7).push(14).push(21);
  ACTUAL   = test.print();
  EXPECTED = [21, 14, 7];

  assert.deepEqual(ACTUAL, EXPECTED, 'it adds multiple items');

  assert.end();
});

tape('pop', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new Queue().addFirst(7);
  ACTUAL   = test.pop();
  EXPECTED = 7;

  assert.deepEqual(ACTUAL, EXPECTED, 'it returns the item removed');

  test     = new Queue().addLast(7).addLast(14).addLast(21);
  test.pop();
  ACTUAL   = test.print();
  EXPECTED = [7, 14];

  assert.deepEqual(ACTUAL, EXPECTED, 'it removes an item from the front');

  assert.end();
});


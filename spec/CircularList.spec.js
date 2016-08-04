var tape = require('tape');
var CircularList = require('../CircularList');

tape('CircularList', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new CircularList();
  ACTUAL   = test.print();
  EXPECTED = [];

  assert.deepEqual(ACTUAL, EXPECTED, 'it initializes to an empty array');

  assert.end();
});

tape('push', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new CircularList().push(7);
  ACTUAL   = test.print();
  EXPECTED = [7];

  assert.deepEqual(ACTUAL, EXPECTED, 'it adds to an array');

  test     = new CircularList().push(7).push(14).push(21);
  ACTUAL   = test.print();
  EXPECTED = [21, 14, 7];

  assert.deepEqual(ACTUAL, EXPECTED, 'it adds multiple items');

  assert.end();
});

tape('pop', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new CircularList().addFirst(7);
  ACTUAL   = test.pop();
  EXPECTED = 7;

  assert.deepEqual(ACTUAL, EXPECTED, 'it returns the item removed');

  test     = new CircularList().addLast(7).addLast(14).addLast(21);
  test.pop();
  ACTUAL   = test.print();
  EXPECTED = [14, 21];

  assert.deepEqual(ACTUAL, EXPECTED, 'it removes an item from the front');

  assert.end();
});


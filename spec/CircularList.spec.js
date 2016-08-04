var tape = require('tape');
var CircularList = require('../lib/CircularList');

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

  assert.deepEqual(ACTUAL, EXPECTED, 'it adds to the front of an array');

  test     = new CircularList().push(7).push(14).push(21);
  ACTUAL   = test.print();
  EXPECTED = [21, 14, 7];

  assert.deepEqual(ACTUAL, EXPECTED, 'it adds multiple items');

  assert.end();
});

tape('pop', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new CircularList().push(7);
  ACTUAL   = test.pop();
  EXPECTED = 7;

  assert.deepEqual(ACTUAL, EXPECTED, 'it returns the item removed');

  test     = new CircularList().push(7).push(14).push(21);
  test.pop();
  ACTUAL   = test.print();
  EXPECTED = [21, 14];

  assert.deepEqual(ACTUAL, EXPECTED, 'it removes an item from the front');

  assert.end();
});

tape('show', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new CircularList().push(7).push(14).push(21);
  ACTUAL   = test.show();
  EXPECTED = null;

  assert.equal(ACTUAL, EXPECTED, 'it returns null if not nexted');

  test.next().remove();
  ACTUAL   = test.show();
  EXPECTED = 14;

  assert.equal(ACTUAL, EXPECTED, 'it shows correctly after a removal');

  assert.end();
});

tape('next', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new CircularList().push(7).push(14).push(21).next();
  ACTUAL   = test.show();
  EXPECTED = 21;

  assert.equal(ACTUAL, EXPECTED, 'it advances the index');

  ACTUAL   = test.next().show();
  EXPECTED = 14;

  assert.equal(ACTUAL, EXPECTED, 'it advances the index');

  ACTUAL   = test.next().show();
  EXPECTED = 7;

  assert.equal(ACTUAL, EXPECTED, 'it advances the index');

  ACTUAL   = test.next().show();
  EXPECTED = 21;

  assert.equal(ACTUAL, EXPECTED, 'it wraps around edges');

  assert.end();
});

tape('remove', (assert) => {
  var test, ACTUAL, EXPECTED;

  test     = new CircularList().push(7).push(14).push(21).next();
  ACTUAL   = test.remove();
  EXPECTED = 21;

  assert.equal(ACTUAL, EXPECTED, 'it returns the value of the removed node');

  ACTUAL   = test.print();
  EXPECTED = [14, 7];

  assert.deepEqual(ACTUAL, EXPECTED, 'it removes the item');

  ACTUAL   = test.show();
  EXPECTED = 14;

  assert.equal(ACTUAL, EXPECTED, 'the index remains put');
  
  test     = test.next();
  ACTUAL   = test.remove();
  EXPECTED = 7;

  assert.equal(ACTUAL, EXPECTED, 'it returns the value of a node removed from the end of a list');

  ACTUAL   = test.print();
  EXPECTED = [14];

  assert.deepEqual(ACTUAL, EXPECTED, '... and that node is remove from the list');

  assert.end();
});

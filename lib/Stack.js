var List = require('./List');

var Stack = function() {
  List.call(this);
}

Stack.prototype = Object.create(List.prototype);

Stack.prototype.constructor = Stack;

Stack.prototype.push = function(value) {
  List.prototype.addFirst.call(this, value);
  return this;
}

Stack.prototype.pop = function(value) {
  return List.prototype.removeFirst.call(this, value);
}

module.exports = Stack;

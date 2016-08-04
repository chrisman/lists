var List = require('./List');

var Queue = function() {
  List.call(this);
}

Queue.prototype = Object.create(List.prototype);

Queue.prototype.constructor = Queue;

Queue.prototype.push = function(value) {
  List.prototype.addFirst.call(this, value);
  return this;
}

Queue.prototype.pop = function(value) {
  return List.prototype.removeLast.call(this, value);
}

module.exports = Queue;

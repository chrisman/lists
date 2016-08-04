var Queue = require('./Queue');

var CircularList = function() {
  Queue.call(this);

  this.current = this.head;
}

CircularList.prototype = Object.create(Queue.prototype);

CircularList.prototype.constructor = CircularList;

CircularList.prototype.next = function() {
  this.current = (this.current.next === this.tail)
    ? this.head.next
    : this.current.next
  return this;
}

CircularList.prototype.remove = function() {
  var prev = this.current.prev;
  var next = this.current.next;
  var data = this.current.data;

  prev.next = next;
  next.prev = prev;

  this.current = next;

  return data;
}

CircularList.prototype.show = function() {
  return this.current.data;
}

module.exports = CircularList;

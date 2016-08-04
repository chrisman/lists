var Stack = require('./Stack');

var CircularList = function(size) {
  Stack.call(this);
  
  this.size = size;
  this.current = this.head;
}

CircularList.prototype = Object.create(Stack.prototype);

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

  prev.next = next;
  next.prev = prev;

  this.size--;

  return this.current.data;
}

module.exports = CircularList;

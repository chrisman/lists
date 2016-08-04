var List = require('./List');

var PeekList = function(size) {
  List.call(this);
  
  this.size = size;
  this.current = this.head;

  for(var i = 0, il = this.size; i < il; i++) {
    this.addLast(i);
  }
}

PeekList.prototype = Object.create(List.prototype);

PeekList.prototype.constructor = PeekList;

PeekList.prototype.peek = function() {
  return this.current.data;
}

PeekList.prototype.next = function() {
  this.current = (this.current.next === this.tail)
    ? this.head.next
    : this.current.next
  return this;
}

PeekList.prototype.removeCurrent = function() {
  var prev = this.head;
  while (prev.next !== this.current) {
    prev = prev.next;
  }
  prev.next = this.current.next;
  this.size--;
  return this.current.data;
}

module.exports = PeekList;

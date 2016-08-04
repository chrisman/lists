var Node = require('./Node');

var List = function() {
  this.head = new Node(null);
  this.tail = new Node(null);

  this.head.next = this.tail;
  this.head.prev = this.tail;

  this.tail.next = this.head;
  this.tail.prev = this.head;

  return this;
}

List.prototype.addFirst = function(data) {
  // TODO
}

List.prototype.addLast = function(data) {
  var node = new Node(data);
  var prev = this.tail.prev;

  prev.next = node;
  node.next = this.tail;

  node.prev = prev;

  this.tail.prev = node;

  return this;
}

List.prototype.removeFirst = function() {
  // TODO
}

List.prototype.removeLast = function() {
  var last = this.tail.prev;
  var data = last.data;
  last.prev.next = this.tail;
  this.tail.prev = last.prev.prev;
  return data;
}

List.prototype.print = function() {
  var current = this.head.next;
  var res = [];
  while (current !== this.tail) {
    res.push(current.data);
    current = current.next;
  }
  return res;
}

module.exports = List;

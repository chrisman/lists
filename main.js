'use strict'

var fs = require('fs');
var CL = require('./lib/CircularList');

// helpers
var formatInput  = (str) => str.split(',');
var formatOutput = (arr) => arr.join(' ');

function main(args) {
  var size   = args[0];
  var nth    = args[1] - 1; // you lose spaces as you remove items
  var list   = new CL;
  var answer = [];

  for(var i = 0, il = size; i < il; i++) {
    list.push(i);
  }


  while(size) {
    for(var i = 0; i <= nth; i++)
      list.next();
    answer.push(list.remove());
    size--;
  }

  return answer;
}

if (process.argv[2]) {
  fs.readFileSync(process.argv[2])
  .toString().split('\n')
  .filter(line => line !== '')
  .forEach(function (line) {
    compose(
      console.log,
      formatOutput,
      main,
      formatInput
    )(line)
  });
}


function compose() {
  var funs = Array.from(arguments);
  return function(init) {
    return funs.reduceRight((val, f) => f(val), init);
  }
} 

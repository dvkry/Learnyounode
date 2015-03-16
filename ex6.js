var fs = require('fs');
var path = require('path');
var ex6a = require('./ex6a');


ex6a(process.argv[2], process.argv[3], callbackFunction);



function callbackFunction(err, list) {
  if (err) {
    console.log('error');
  }
  else {
    for(var i = 0; i < list.length; i++) {
      console.log(list[i]);
    }
  }
}
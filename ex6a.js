var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extStr, cb) {

  fs.readdir(dirName, function(err, list) {
    if (err) {
      return cb(err)
    }
    var returnArray = [];
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) == ('.' + extStr)) {
        returnArray.push(list[i]);
      }
    }
    return cb(null, returnArray);
  });
};


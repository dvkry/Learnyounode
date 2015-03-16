var fs = require('fs');


fs.readFile(process.argv[2], 'utf8', callbackFunction);

function callbackFunction (err, data) {
  var returnData;
  if (!err) {
    returnData = data;
    var strArray = returnData.split('\n');
    console.log(strArray.length - 1);
  }
};


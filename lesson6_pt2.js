var fs = require("fs");
var path = require("path");

module.exports = function directory(dir, type, callback) {
  fs.readdir(dir, function(err, list) {

    if (err) return callback(err);
    var newList = [];

    list.forEach(element => {
      if (path.extname(element) == "."+type) {
        newList.push(element);
      }
    });

    callback(null, newList);
  });
};

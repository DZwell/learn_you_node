var fs = require('fs');
var path = require('path');
module.exports = function(dir, ext, callback) {
    var filtered = [];
    fs.readdir(dir, function(err, files) {
        if (err) {
            callback(err, null);
        } else {
            for (var file in files) {
                if (path.extname(files[file]) === '.' + ext) {
                    filtered.push(files[file]);
                }
            }
            callback(null, filtered);
        }
    });
};

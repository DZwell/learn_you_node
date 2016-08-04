var fs = require('fs');
var path = require('path');
var my_files = fs.readdir(process.argv[2], function(err, files){
    if (err) throw err;
    for (file in files) {
        if (path.extname(files[file]) === '.' + process.argv[3]) {
            console.log(files[file]);
        }
    }
});

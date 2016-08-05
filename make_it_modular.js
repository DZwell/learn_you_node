var myModule = require('./module');
myModule(process.argv[2], process.argv[3], function(err, files) {
    for (var file in files) {
        console.log(files[file]);
    }
});


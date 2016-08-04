var fs = require('fs');
var file = fs.readFile(process.argv[2], 'utf8', function(err, data){
    if (err) throw err;
    data = data.split('\n');
    console.log(data.length - 1);
});


// My solution

var http = require('http');
var url = process.argv[2];
http.get(url, function(response) {
    var stringList = [];
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
        stringList.push(chunk);
    });
    response.on('end', function() {
        for (var chunk in stringList) {
            console.log(stringList[chunk]);
        };
    });
});



// Their solution

var http = require('http')

http.get(process.argv[2], function (response) {
 response.setEncoding('utf8')
 response.on('data', console.log)
 response.on('error', console.error)
}).on('error', console.error)

// My solution. It works some of the time.

let bl = require('bl');
let http = require('http');
let urls = [process.argv[2], process.argv[3], process.argv[4]];
let results = [];
let wait = 3;



urls.forEach(function(url) {
  getUrl(url);
});


function done() {
  for (let result in results) {
    console.log(results[result]);
  }
};


function getUrl(url) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      results.push(data);
      wait--;
      if (wait === 0) {
        done();
      }
    }))
  })
};


// Their solution


 var http = require('http')
 var bl = require('bl')
 var results = []
 var count = 0

 function printResults () {
   for (var i = 0; i < 3; i++)
     console.log(results[i])
 }

 function httpGet (index) {
   http.get(process.argv[2 + index], function (response) {
     response.pipe(bl(function (err, data) {
       if (err)
         return console.error(err)

       results[index] = data.toString()
       count++

       if (count == 3)
         printResults()
     }))
   })
 }

 for (var i = 0; i < 3; i++)
   httpGet(i)




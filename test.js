var fs = require('fs')

fs.readFile('input.txt', function(err, results) {
    if (err) return console.log(err);
    console.log(results.toString())
})
console.log("program end")
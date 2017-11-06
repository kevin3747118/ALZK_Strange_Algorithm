// var fs = require('fs')

// fs.readFile('input.txt', function(err, results) {
//     if (err) return console.log(err);
//     console.log(results.toString())
// })
// console.log("program end")



// function test(cb) {
//     var greeting = "hello~"
//     // setTimeout(function() {
//     //     console.log(greeting)
//     // }, 3000)
//     cb(greeting, 123)
// }

// test(function(a, b) {
//     // console.log("my name is kevin")
//     console.log(a)
//     console.log(b)
// })


function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (10 - 1)) + 1;
  }

a = getRandomArbitrary(1, 10)
console.log(a)
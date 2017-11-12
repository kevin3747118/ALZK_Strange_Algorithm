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






var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
console.log(i)
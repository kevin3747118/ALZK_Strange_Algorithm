

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






// function asyncCall(cb) {
//     process.nextTick(function () {
//         // throw new Error('async exception');
//         cb('ayncCall');
//     });
// }
// try {
//     asyncCall((text) => {
//         console.log(text)
//     });
// } catch (error) {
//     console.log('catch asycn exception');
// }


// var a;
// var array = [1, 2, 3, 4, 5, 6, 7]
// for(var index in array){
//     a += array[index];
// }
// console.log(a);

// Promise.all([
//     // Resolves
//     Promise.resolve(1),
//     // Rejects after 2 seconds
//     new Promise((resolve, reject) => setTimeout(() => reject(1), 2000))
// ].map(p => p.catch(() => undefined))).then(() => console.log('done!'));


// var bar = function () {
//     console.log(a);
// };
// // bar()
// var foo = function () {
//     var a = 123;
//     bar();
// };

// foo();


// let myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('@_@')
//     })
//   });

//   myFirstPromise.then((successMessage) => {
//     console.log("Yay! " + successMessage);
//   });

// var start = new Date;
// setTimeout(
//     function () {
//         var end = new Date;
//         console.log('Time elapsed:', end - start, 'ms');
//     }, 1500);

// while (new Date - start < 1000) { };

// for (let i = 1; i <= 3; i++) {
//     setTimeout(
//         function () {
//             console.log(i);
//         }, 0);
// };
// console.log(i)


// function x() {
//     console.log('xxx@_@')
// }

// function y(cb) {
//     console.log('yyy')
//     cb()
// }

// y(x)

a = [1, 2, '@', '幹']
b = ['@', 3, 4, '幹']
// b = []
// a = a.filter((ele) => {
//     return b.indexOf(ele) < 0
// })

c = a.filter(()=>{
    return true
})
console.log(c)
// console.log(b.indexOf('@'))

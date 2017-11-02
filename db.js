const mysql = require('mysql');

class db {
    constructor(sqlText) {
        this.host = '127.0.0.1';
        this.user = 'alzk';
        this.password = 'alzk';
        this.sqlText = sqlText
        this.conn = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password
        }).query("select * from alzk.staffs", function(eee, aaa){
            if (eee) {
                console.log(eee)
            } else {
                console.log(aaa)
            }
        })
        // .connect(function(err) {
        //     if (!err) {
        //         console.log("ok")
        //     } else {
        //         console.log(err)
        //     }
        // })
        // .query('select * from alzk.staffs', function(err, results) {
        //     console.log(results)
        // })
//     }

//     test() {
//         return this.conn
//     }
// }

// let a = new db()
// a.test



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

const mysql = require('mysql');
const Promise = require('promise');


class db {
    static conn() {
        const conn = mysql.createConnection({
            host: '127.0.0.1',
            user: 'alzk',
            password: 'alzk',
        })
        return conn
    }

    static execSQL(sqlText) {
        const conn = this.conn()
        return new Promise((resolve, reject) => {
            conn.query(sqlText, function(err, results) {
                if (err) reject(err);
                resolve(results)
                conn.end()
            }) 
        })
    }
}

db.execSQL(`select * from alzk.staffs`)
.then((results) => {
    console.log(results)
})


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

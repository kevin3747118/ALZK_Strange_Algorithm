const mysql = require('mysql');
const Promise = require('promise');

class DB {

    static conn() {
        const conn = mysql.createConnection({
            host: '127.0.0.1',
            user: 'alzk',
            password: 'alzk',
        })
        return conn
    }

    static execSQL(sqlText, values) {
        const conn = this.conn()
        return new Promise((resolve, reject) => {
            conn.query(sqlText, [values], function(err, results) {
                if (err) reject(err);
                resolve(results)
                conn.end()
            }) 
        })
    }

    static test() {
        console.log('@_@')
    }
}

module.exports = DB
// module.exports.DB = DB;


// DB.execSQL(`select * from alzk.staffs`)
// .then((results) => {
//     console.log(results)
// })

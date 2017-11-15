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

    static execSQL(sqlText, values=null, type='SEL') {

        const conn = this.conn()
        return new Promise((resolve, reject) => {
            if (type == 'SEL') {
                conn.query(sqlText, [values], function (err, results) {
                    if (err) reject(err);
                    else {
                        // console.log(results)
                        resolve(results)
                    }
                    conn.end()
                })
            } else {
                conn.query(sqlText, [values], function (err, results) {
                    if (err) reject();
                    else {
                        // console.log(results)
                        resolve()
                    }
                    conn.end()
                })
            }
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

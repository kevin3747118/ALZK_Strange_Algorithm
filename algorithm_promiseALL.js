const DB = require('./DB.js');
const readline = require('readline');
const randomString = require('randomstring');
const Promise = require('promise');



let insertStatus = { 'success': 0, 'fail': 0 }
tTable = function () {

    // let arr2db = [{ t1: 1 }, { t1: 2 }, { t1: 3 }]
    let arr2db = [{ t1: 1 }, { t1: 2 }, { t1: 1 }, { t1: 3 }]
    // let arr2db = [{ t1: 1 }, { t1: 1 }, { t1: 2 }]
    // let arr2db = [{ t1: 1 }, { t1: 1 }, { t1: 1 }]
    return new Promise((resolve, reject) => {
        const p = []; const q = []; let results = null
        // DB.execSQL('truncate table alzk.T')
        Promise.resolve()
            .then(() => {
                arr2db.forEach(function (x) {
                    p.push(DB.execSQL('insert into alzk.T values(' + Object.values(x)[0].toString() + ')', values = null, type = 'INS'))
                    // q.push(Object.values(x)[0]);
                })
                results = p.map((pp) => pp.then(() => {
                    insertStatus['success'] += 1;
                    // return Promise.resolve()
                }).catch(() => {
                    insertStatus['fail'] += 1
                    // return Promise.resolve()
                }))
                return Promise.all(results)
                // return Promise.resolve(results)
            }).then((re) => {
                // console.log(results)
                // resolve(re)
                resolve(insertStatus)
            }).catch((err) => {
                console.log(err)
            })
        })
    }



tTable().then((results) => {
            console.log(results)
        }).catch((err) => {
            console.log(err)
        })

// DB.execSQL(`select * from alzk.locks limit 1`)
// .then((results) => {
//     console.log(results[0])
// }).catch((err) => {
//     console.log(err)
// })

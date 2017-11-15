const DB = require('./DB.js');
const readline = require('readline');
const randomString = require('randomstring');
const Promise = require('promise');



let insertStatus = { 'success': 0, 'fail': 0 }
tTable = function () {
    const p = []
    // let arr2db = [{ t1: 1 }, { t1: 2 }, { t1: 3 }]
    // let arr2db = [{ t1: 1 }, { t1: 2 }, { t1: 1 }, { t1: 3 }]
    // let arr2db = [{ t1: 1 }, { t1: 1 }, { t1: 2 }]
    let arr2db = [{ t1: 1 }, { t1: 1 }, { t1: 1 }] 
    return new Promise((resolve, reject) => {
        arr2db.forEach(function (x) {
            p.push(DB.execSQL('insert into alzk.T values(' + Object.values(x)[0].toString() + ')', values=null, type='INS'))
        })
    return Promise.all(p.map(p => p.then(() => {
        insertStatus['success'] += 1
    }).catch(() => {
        insertStatus['fail'] += 1
    }))).then(()=>{resolve(insertStatus)}).catch((err) => {
        reject(err)
    })
    })
}
tTable().then((results) => {
    console.log(results)
}).catch((err)=>{
    console.log(err)
})

// DB.execSQL(`select * from alzk.locks limit 1`)
// .then((results) => {
//     console.log(results[0])
// }).catch((err) => {
//     console.log(err)
// })

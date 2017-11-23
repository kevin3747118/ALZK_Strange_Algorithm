const DB = require('./DB.js');
const readline = require('readline');
const randomString = require('randomstring');
const Promise = require('promise');



let insertStatus = { 'success': 0, 'fail': 0 }
tTable = function () {
    const p = []; let rr = null
    // let arr2db = [{ t1: 1 }, { t1: 2 }, { t1: 3 }]
    let arr2db = [{ t1: 1 }, { t1: 2 }, { t1: 1 }, { t1: 3 }, { t1: 7 }, { t1: 8 }]
    // let arr2db = [{ t1: 1 }, { t1: 1 }, { t1: 2 }]
    // let arr2db = [{ t1: 1 }, { t1: 1 }, { t1: 1 }]
    return new Promise((resolve, reject) => {
        // let results = null
        Promise.resolve()
            .then(() => {
                arr2db.forEach((x) => {
                    p.push(DB.execSQL('insert into alzk.T values(' + Object.values(x)[0].toString() + ')', values = null, type = 'INS'))
                })
                rr = p.map((ele)=>{
                    ele.then(()=>{
                        insertStatus['success'] += 1
                        return Promise.resolve()
                    })
                    .catch(()=>{
                        insertStatus['fail'] += 1
                        // console.log(insertStatus)
                        return Promise.resolve()
                    })
                })
                return Promise.all(rr)
            })
            .then((p)=>{
                resolve(insertStatus)
            })
            .catch((err)=>{
                console.log(err)
            })
    })
}


tTable()
    .then((results) => {
        console.log(results)
    }).catch((err) => {
        console.log(err)
    })
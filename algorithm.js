// import { resolve } from 'url';

const DB = require('./DB.js');
const readline = require('readline');
const randomString = require('randomstring');
const Promise = require('promise');



let insertStatus = { 'success': 0, 'fail': 0 }
let aa = null
tTable = function () {

    // let arr2db = [{ t1: 1 }, { t1: 2 }, { t1: 3 }]
    let arr2db = [{ t1: 1 }, { t1: 2 }, { t1: 1 }, { t1: 3 }, { t1: 7 }, { t1: 8 }]
    // let arr2db = [{ t1: 1 }, { t1: 1 }, { t1: 2 }]
    // let arr2db = [{ t1: 1 }, { t1: 1 }, { t1: 1 }]
    return new Promise((resolve, reject) => {
        let p = []
        Promise.resolve()
            .then(() => {
                arr2db.forEach((x) => {
                    p.push(DB.execSQL('insert into alzk.T values(' + Object.values(x)[0].toString() + ')', values = null, type = 'INS'))
                })
            })
        resolve(p)
    })
        .catch((err) => {
            console.log(err)
        })
}


tTable()
    .then((results) => {
        return new Promise((resove, reject) => {
            results.map(p => p.then(() => {
                insertStatus['success'] += 1
                // console.log(insertStatus)
            }).catch(() => {
                insertStatus['fail'] += 1
                // console.log(insertStatus)
            }))
            Promise.resolve(insertStatus)
        })
    }).then((err) => {
        console.log(err)
    }).catch((err) => {
        console.log(err)
    })
const DB = require('./DB.js');
const readline = require('readline');
const randomString = require('randomstring');
const Promise = require('promise');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const util = {
    getNum(low, high) {
        min = Math.ceil(low);
        max = Math.floor(high);
        return Math.floor(Math.random() * (10 - 1)) + 1;
    },
    genAlph() {
        const alphabetic = randomString.generate({
            length: this.getNum(),
            charset: 'alphabetic'
        })
        return alphabetic
    },
    getInput() {
        return new Promise((resolve, reject) => {
            rl.question('Please input the number of numerals: ', (input) => {
                const num = Number(input)
                if (isNaN(num)) {
                    reject('err!!')
                } else {
                    resolve(num)
                }
                rl.close();
            })
        })
    }

}


sTable = function (value) {
    // c = [[1], [3], [5]]
    return new Promise((resolve, reject) => {
        arr2db = []
        value.forEach(function (d) {
            alphabetic = genRandom.genAlph()
            for (var i = 0; i < alphabetic.length; i++) {
                arr2db.push([d[0], alphabetic[i]])
            }
            if (arr2db.length === 0) reject('err!!')
            resolve(arr2db)
        })
    })
}

let insertStatus = { 'success': 0, 'fail': 0 }
tTable = function () {
    // const p = []
    let arr2db = [{ t1: 1 }, { t1: 2 }, { t1: 1 }]

    return new Promise((resolve, reject) => {
        arr2db.forEach(function (x) {
            DB.execSQL('insert into alzk.T values(' + Object.values(x)[0].toString() + ')')
                .then(() => {
                    insertStatus['success'] += 1;
                }).catch(() => {
                    insertStatus['fail'] += 1;
                })
        }).then(resolve(insertStatus)).catch(reject(insertStatus))
    })
}
// tTable()
// tTable().then(() => {
//     console.log(insertStatus)
// }).catch(() => {
//     console.log(insertStatus)
// })
// console.log(insertStatus)
// .then(() => {
//     console.log('@@')
//     resolve()
// }).catch(() => {
//     console.log('==')
//     reject()
// })





// getInput()
//     .then((num) => {
//         const value = [] //optimize by array comprehension
//         for (var i = 1; i <= num; i++) {
//             value[i - 1] = [i]
//         }
//         DB.execSQL(`truncate table alzk.t`)
//         DB.execSQL(`truncate table alzk.s`)
//         DB.execSQL(`insert into alzk.T values ?`, value)
//         return sTable(value)
//     }).then((results) => {
//         DB.execSQL(`insert into alzk.S values ?`, results)
//         console.log('Done')
//     }).catch((err) => {
//         console.log(err)
//     })


DB.execSQL(`select * from alzk.locks limit 1`)
.then((results) => {
    console.log(results[0])
}).catch((err) => {
    console.log(err)
})



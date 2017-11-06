const DB = require('./DB.js');
const readline = require('readline');
const randomString = require('randomstring');
const Promise = require('promise');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


getInput = function () {
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


const genRandom = {
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
    }
}


sTable = function (value) {
    // c = [[1], [3], [5]]
    return new Promise((resolve, reject) => {
        arr2db = [ ]
        value.forEach(function(d){
            alphabetic = genRandom.genAlph()
            for (var i = 0; i < alphabetic.length; i++) {
                arr2db.push([d[0] ,alphabetic[i]])
            }
            if (arr2db.length === 0) reject('err!!')
            resolve(arr2db)
        }) 
    })
}


tTable = function () {
        getInput()
            .then((num) => {
                const value = [] //optimize by array comprehension
                for (var i = 1; i <= num; i++) {
                    value[i - 1] = [i]
                }
                DB.execSQL(`truncate table alzk.t`)
                DB.execSQL(`truncate table alzk.s`)
                DB.execSQL(`insert into alzk.T values ?`, value)
                return sTable(value)
            }).then((results) => {
                DB.execSQL(`insert into alzk.S values ?`, results)
                console.log('Done')
            }).catch((err) => {
                console.log(err)
            })
    }


tTable()

// DB.execSQL(`select * from alzk.staffs`)
// .then((results) => {
//     console.log(results[0])
// })



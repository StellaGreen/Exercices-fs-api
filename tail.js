const fs = require('fs')

const txt = fs.readFileSync('file.txt', 'utf-8')
const tab = txt.split('\n')
//const count = tab.length
const rv = tab.reverse()


console.log(rv)


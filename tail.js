const fs = require('fs')

const txt = fs.readFileSync(process.argv[2], 'utf-8')
const tab = txt.split('\n')
console.log(`${tab}`.length)
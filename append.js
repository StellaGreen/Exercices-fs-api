const fs = require('fs')

let ForFile = ''

    // check if command line is well 
if (process.argv.length < 4) {
    console.log(`Usage : node append.js file(s) filedirection`)
    process.exit(1)
}

for(let i= 2; i < process.argv.length -1; ++i){

    // check if the path exist
    if (!fs.existsSync(process.argv[i])) {
    console.log(`The file ${process.argv[i]} does'nt exist`)
    process.exit(1)
    }

    //check if the value is a file or a directory (you choose)
    const stats = fs.statSync(process.argv[i])

    if (!stats.isFile(process.argv[i])) {
    console.log(`${process.argv[i]} is not a file`)
    process.exit(1)
    }
    ForFile += fs.readFileSync(process.argv[i])
}

fs.appendFileSync(process.argv[process.argv -1], ForFile, 'utf8')
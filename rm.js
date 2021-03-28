const fs = require('fs')

// check if command line is well 
if (process.argv.length !== 3) {
    console.log(`usage : node rm.js NameOfFile`)
    process.exit(1)
}

// check if the path exist
if (!fs.existsSync(process.argv[2])) {
    console.log(`Sorry ${process.argv[2]} doesn't exist`)
    process.exit(1)
}

//check if the value is a file or a directory (you choose)
const stats = fs.statSync(process.argv[2])

if (!stats.isFile(process.argv[2])) {
    console.log(`${process.argv[2]} is not a file`)
    process.exit(1)
}


fs.rmSync(process.argv[2])
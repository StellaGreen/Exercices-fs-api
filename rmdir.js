const fs = require('fs')

//check command line
if (process.argv.length !== 3) {
    console.log('Usage : node rmdir.js NameOfDirectory')
    process.exit(1)
}
//check if directory exist
if (!fs.existsSync(process.argv[2])) {
    console.log(`Sorry ${process.argv[2]} doesn't exist`)
    process.exit(1)
}
// check if file is a file
const stats = fs.statSync(process.argv[2])

if (!stats.isDirectory(process.argv[2])){
    console.log(`${process.argv[2]} n'est pas un dossier`)
    process.exit(1)
}

fs.rmdirSync(process.argv[2])
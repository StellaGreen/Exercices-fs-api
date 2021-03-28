const fs = require('fs')


//check command line
if (process.argv.length !== 3) {
    console.log('Usage : node mkdir.js NewNameOfDirectory')
    process.exit(1)
}
//check if directory exist
if (fs.existsSync(process.argv[2])) {
    console.log(`Sorry ${process.argv[2]} exist`)
    process.exit(1)
}


fs.mkdirSync(process.argv[2])
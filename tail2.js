const fs = require('fs')

let nbLine = 10 // nb line by default
let file = process.argv.slice(-1).join() // choose the last argv
const warning = 'Usage : node tail.js [-n NUMBER] file.txt' // text usage

//check command line
if (process.argv.length < 3 || process.argv.length > 5) {
    console.log(warning)
    process.exit(1)
}

//check if file exist
if (!fs.existsSync(file)) {
    console.log(`Sorry ${file} doesn't exist`)
    process.exit(1)
}
//check if the file is a file
const stats = fs.statSync(file)
if (!stats.isFile(file)) {
    console.log(`${file} is not a file`)
    process.exit(1)
}
//check 4 arguments
if(process.argv.length === 4){
    console.log(warning)
    process.exit(1)
}
//if the command have 5 arguments :

//check argument is valid
if(process.argv.length === 5){
    if(process.argv[2] !== '-n'){
        console.log(warning)
        process.exit(1)
    }

    //check if the number is a number
    if(isNaN(process.argv[3])){
        console.log(warning)
        process.exit(1)
    }
    nbLine = Number(process.argv[3])
}
const txt = fs.readFileSync(file, 'utf-8') //read file
const lastLines = txt.split('\n').slice(-nbLine).join('\n') // array of line with slice -10 with join
console.log(lastLines) // result
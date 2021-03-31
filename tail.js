const fs = require('fs')

//check command line
if (process.argv.length < 3 || process.argv.length > 5) {
    console.log('Usage : node tail.js file.txt\nOr : node tail.js -n NUMBER file.txt')
    process.exit(1)
}

//if the command have just 3 arguments :
if(process.argv.length === 3){

 //check if file exist
if (!fs.existsSync(process.argv[2])) {
    console.log(`Sorry ${process.argv[2]} doesn't exist`)
    process.exit(1)
}
//check if the file is a file
const stats = fs.statSync(process.argv[2])
if (!stats.isFile(process.argv[2])) {
    console.log(`${process.argv[2]} is not a file`)
    process.exit(1)
}
const txt = fs.readFileSync(process.argv[2], 'utf-8') //read file
const tab = txt.split('\n') // array of line
const rv = tab.reverse() // reverse the array
const choose = rv.slice(0, 10) // choose to line 1 at 10
const rv2 = choose.reverse() // reverse the lines chooses
const joinfinal = rv2.join('\n') // array to string of lines
console.log(joinfinal) // result
console.log(choose.length)
}

//check 4 arguments
if(process.argv.length === 4){
if(process.argv[2] !== '-n'){
    console.log('Usage : node tail.js -n file.txt')
    process.exit(1)
}
//check if file exist
if (!fs.existsSync(process.argv[3])) {
    console.log(`Sorry ${process.argv[3]} doesn't exist`)
    process.exit(1)
}
//check if the file is a file
const stats = fs.statSync(process.argv[3])
if (!stats.isFile(process.argv[3])) {
    console.log(`${process.argv[3]} is not a file`)
    process.exit(1)
}
const txt = fs.readFileSync(process.argv[3], 'utf-8') //read file
const tab = txt.split('\n') // array of line
const rv = tab.reverse() // reverse the array
const choose = rv.slice(0, 10) // choose to line 1 at 10
const rv2 = choose.reverse() // reverse the lines chooses
const joinfinal = rv2.join('\n') // array to string of lines
console.log(joinfinal) // result
console.log(choose.length)
}

//if the command have 5 arguments :

//check argument is valid
if(process.argv.length === 5){
if(process.argv[2] !== '-n'){
    console.log('Usage : node tail.js -n NUMBER file.txt')
    process.exit(1)
}
if(process.argv[2] === '-n'){
//check if file exist
if (!fs.existsSync(process.argv[4])) {
console.log(`Sorry ${process.argv[4]} doesn't exist`)
process.exit(1)
}
//check if the number is a number
if(isNaN(Number(process.argv[3]))){
    console.log('Usage : node tail.js -n NUMBER file.txt')
    process.exit(1)
}
//check if the file is a file
const stats = fs.statSync(process.argv[4])
if (!stats.isFile(process.argv[4])) {
    console.log(`${process.argv[4]} is not a file`)
    process.exit(1)
}
const txt = fs.readFileSync(process.argv[4], 'utf-8') //read file
const tab = txt.split('\n') // array of line
const rv = tab.reverse() // reverse the array
const choosesp = rv.slice(0, process.argv[3]) // choose line 1 at you like
const rv2v2 = choosesp.reverse() // reverse lines chooses
const joinfinal2 = rv2v2.join('\n') // array to sting of lines
console.log(joinfinal2) // result
console.log(choosesp.length)
}
}
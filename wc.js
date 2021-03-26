const fs = require('fs')
const txt = fs.readFileSync(process.argv[2], 'utf-8')
const tabn = txt.split('\n') // string to array of lines
const conline = tabn.length // count lines of array  ------------------------------------------- count lines
const tabtout = txt.split('') // separate all elements of the string
const contout = tabtout.length // count all  --------------------------------------------------- count all
const join = tabn.join(' ') // join with a space
const tabe = join.split('.') // remove stitches
const joine = tabe.join(' ') // join with a space
const tabepoint = joine.split(';') // remove semicolons
const joinepoint = tabepoint.join(' ') // join with a space
const tabexla = joinepoint.split('!') // remove the exclamation marks
const joinexcla = tabexla.join(' ') // join with a space
const tabevirg = joinexcla.split(',') // remove commas
const joinvirg = tabevirg.join(' ') // join with a space
const tabclean = joinvirg.split(' ') // separate each word 
const contword = tabclean.length // number of words in the file -------------------------------- count word

//check command line
if (process.argv.length < 3 || process.argv.length > 4) {
    console.log('Usage : node wc.js file.txt')
    process.exit(1)
}

//check if file exist
if (!fs.existsSync(process.argv[2])) {
    console.log(`Sorry ${process.argv[2]} doesn't exist`)
    process.exit(1)
}

// check if file is a file
const stats = fs.statSync(process.argv[2])

if (!stats.isFile(process.argv[2])) {
  console.log(`${process.argv[2]} is not a file`)
  process.exit(1)
}


//if command have juste 2 arguments :
if(process.argv.length === 3){
    console.log(`${contword}  ${conline}  ${contout}  ${process.argv[2]}`)
}

// if the 3st arguments -l (ligne)
if(process.argv[3] === '-l'){
    console.log(`${conline}  ${process.argv[2]}`)
}

// if the 3st arguments -w (word)
if(process.argv[3] === '-w'){
    console.log(`${contword}  ${process.argv[2]}`)
}

//if the 3st argument -c (all)
if(process.argv[3] === '-c'){
    console.log(`${contout}  ${process.argv[2]}`)
}
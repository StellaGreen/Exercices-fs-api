const fs = require('fs')
const txt = fs.readFileSync(process.argv[2], 'utf-8')
const tabn = txt.split('\n') // met en tableau les lignes
const conline = tabn.length // compte les lignes du tableau ------------------------------------- compte ligne
const tabtout = txt.split('') // sépare l'integralité des éléments de du texte en tableau
const contout = tabtout.length // compte l'integralité du fichier --------------------------------compte tout
const join = tabn.join(' ') // fonctionne
const tabe = join.split('.') // a enlever les espaces 
const joine = tabe.join(' ') // fonctionne
const tabepoint = joine.split(';') // a enlever les points virgules
const joinepoint = tabepoint.join(' ') // fonctionne
const tabexla = joinepoint.split('!') // a enlever les ponits d'exclamations
const joinexcla = tabexla.join(' ') // fonctionne
const tabevirg = joinexcla.split(',') // a enlever les virgules
const joinvirg = tabevirg.join(' ') // fonctionne
const tabclean = joinvirg.split(' ') // sépare chaque mots 
const contword = tabclean.length // nombre de mots dans le fichier ----------------------------- compte mots

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


//if have juste 2 arguments :
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
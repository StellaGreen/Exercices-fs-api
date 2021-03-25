const fs = require('fs')

let argv3 = fs.readFileSync(process.argv[3], 'utf-8')
let argv4 = fs.readFileSync(process.argv[4], 'utf-8')
let argv5 = fs.readFileSync(process.argv[5], 'utf-8')
let argv6 = fs.readFileSync(process.argv[6], 'utf-8')
let argv7 = fs.readFileSync(process.argv[7], 'utf-8')
let argv8 = fs.readFileSync(process.argv[8], 'utf-8')

const file2 = argv3.concat(argv4) // 5 arguments
const file3 = file2.concat(argv5) // 6 arguments
const file4 = file3.concat(argv6) // 7 arguments
const file5 = file4.concat(argv7) // 8 arguments
const file6 = file5.concat(argv8) // 9 arguments


switch (process.argv.length) {

    
	case 2 :
	console.log(`usage : node file fileToCopy(s)`)
	process.exit(1)
	case 3 :
	console.log(`usage : node file fileToCopy(s)`)
	process.exit(1)
    case 4 :
        let argv3 = fs.readFileSync(process.argv[3], 'utf-8')
        fs.appendFileSync(process.argv[2], argv3, 'utf8')
	break
    case 5 :
        fs.appendFileSync(process.argv[2], file2, 'utf8')
    break
    case 6 :
        fs.appendFileSync(process.argv[2], file3, 'utf8')
    break
    case 7 :
        fs.appendFileSync(process.argv[2], file4, 'utf8')
    break
    case 8 :
        fs.appendFileSync(process.argv[2], file5, 'utf8')
    break
    case 9 :
        fs.appendFileSync(process.argv[2], file6, 'utf8')
	default:
        console.log(`command not found`)
        process.exit(1)
	}
const fs = require('fs')

switch (process.argv.length) {
	case 2 :
	console.log('usage: node cat.js file(s)')
	process.exit(1)
	case 3 :
        //check if file[2] exist
        if(!fs.existsSync(process.argv[2])){
        console.log(`Error: ${process.argv[2]} does not exist`)
        process.exit(1)
        }
        //check if the value are a file[2]
        const stats = fs.statSync(process.argv[2])
        if (!stats.isFile(process.argv[2])) {
    console.log(`${process.argv[2]} n\'est pas un fichier`)
    process.exit(1)
        }
	console.log(fs.readFileSync(process.argv[2], 'utf-8'))
    break
    case 4 :
        //check if file[2] exist
        if(!fs.existsSync(process.argv[2])){
        console.log(`Error: ${process.argv[2]} does not exist`)
        process.exit(1)
        }
        //check if file[3] exist
        if(!fs.existsSync(process.argv[3])){
        console.log(`Error: ${process.argv[3]} does not exist`)
        process.exit(1)
        }
        //check if the value are a file[2]
        const stats = fs.statSync(process.argv[2])
        if (!stats.isFile(process.argv[2])) {
        console.log(`${process.argv[2]} n\'est pas un fichier`)
        process.exit(1)
        }
        //check if the value are a file[3]
        const stats = fs.statSync(process.argv[3])
        if (!stats.isFile(process.argv[3])) {
        console.log(`${process.argv[3]} n\'est pas un fichier`)
        process.exit(1)
        }
    console.log(fs.readFileSync(process.argv[2], 'utf-8'))
    console.log(fs.readFileSync(process.argv[3], 'utf-8'))
	break
    case 5 :
        //check if file[2] exist
        if(!fs.existsSync(process.argv[2])){
        console.log(`Error: ${process.argv[2]} does not exist`)
        process.exit(1)
        }
        //check if file[3] exist
        if(!fs.existsSync(process.argv[3])){
        console.log(`Error: ${process.argv[3]} does not exist`)
        process.exit(1)
        }
        //check if file[4] exist
        if(!fs.existsSync(process.argv[4])){
        console.log(`Error: ${process.argv[4]} does not exist`)
        process.exit(1)
        }
        //check if the value are a file[2]
        const stats = fs.statSync(process.argv[2])
        if (!stats.isFile(process.argv[2])) {
        console.log(`${process.argv[2]} n\'est pas un fichier`)
        process.exit(1)
        }
        //check if the value are a file[3]
        const stats = fs.statSync(process.argv[3])
        if (!stats.isFile(process.argv[3])) {
        console.log(`${process.argv[3]} n\'est pas un fichier`)
        process.exit(1)
        }
        //check if the value are a file[4]
        const stats = fs.statSync(process.argv[4])
        if (!stats.isFile(process.argv[4])) {
        console.log(`${process.argv[4]} n\'est pas un fichier`)
        process.exit(1)
        }
    console.log(fs.readFileSync(process.argv[2], 'utf-8'))
    console.log(fs.readFileSync(process.argv[3], 'utf-8'))
    console.log(fs.readFileSync(process.argv[4], 'utf-8'))
    break
    case 6 :
        //check if file[3] exist
        if(!fs.existsSync(process.argv[2])){
            console.log(`Error: ${process.argv[2]} does not exist`)
            process.exit(1)
            }
            //check if file[3] exist
        if(!fs.existsSync(process.argv[3])){
            console.log(`Error: ${process.argv[3]} does not exist`)
            process.exit(1)
            }
            //check if file[3] exist
        if(!fs.existsSync(process.argv[4])){
            console.log(`Error: ${process.argv[4]} does not exist`)
            process.exit(1)
            }
            //check if file[3] exist
        if(!fs.existsSync(process.argv[5])){
            console.log(`Error: ${process.argv[5]} does not exist`)
            process.exit(1)
            }
        //check if the value are a file[2]
        const stats = fs.statSync(process.argv[2])
        if (!stats.isFile(process.argv[2])) {
        console.log(`${process.argv[2]} n\'est pas un fichier`)
        process.exit(1)
        }
        //check if the value are a file[3]
        const stats = fs.statSync(process.argv[3])
        if (!stats.isFile(process.argv[3])) {
        console.log(`${process.argv[3]} n\'est pas un fichier`)
        process.exit(1)
        }
        //check if the value are a file[4]
        const stats = fs.statSync(process.argv[4])
        if (!stats.isFile(process.argv[4])) {
        console.log(`${process.argv[4]} n\'est pas un fichier`)
        process.exit(1)
        }
        //check if the value are a file[4]
        const stats = fs.statSync(process.argv[5])
        if (!stats.isFile(process.argv[5])) {
        console.log(`${process.argv[5]} n\'est pas un fichier`)
        process.exit(1)
        }
        console.log(fs.readFileSync(process.argv[2], 'utf-8'))
        console.log(fs.readFileSync(process.argv[3], 'utf-8'))
        console.log(fs.readFileSync(process.argv[4], 'utf-8'))
        console.log(fs.readFileSync(process.argv[5], 'utf-8'))
    break
	default:
        console.log(`command not found`)
        process.exit(1)
	}
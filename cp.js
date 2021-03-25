
	switch (process.argv.length) {
	case 2 :
	console.log(`usage : node echo.js word word word`)
	process.exit(1)
	case 3 :
	    console.log(`${process.argv[2]}`)
    break
    case 4 :
        console.log(`${process.argv[2]} ${process.argv[3]}`)
	break
    case 5 :
        console.log(`${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`)
    break
    case 6 :
        console.group(`${process.argv[2]} ${process.argv[3]} ${process.argv[4]} ${process.argv[5]}`)
    break
	default:
        console.log(`command not found`)
        process.exit(1)
	}
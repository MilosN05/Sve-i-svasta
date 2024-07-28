const os = require('os')



// ///INFORMACIJE O RACUNARU
const korisnik = os.userInfo
console.log(korisnik())


// ///KOLIKO DUGO JE UPALJEN RACUNAR

// console.log(`Računar je uključen ${((os.uptime())/60)/60} sati.`)


// const oSistemu= {
//     ime: os.type(),
//     verzija : os.release(),
//     ukMemorija : os.totalmem(),
//     slMemorija : os.freemem()
// }


// console.log(oSistemu)






const porekloNeceg = require('path')




// let mFajla = porekloNeceg.join("/content/", "/dFolder", "test.txt")
// console.log(mFajla)


// console.log(porekloNeceg.sep)


// const Baza = porekloNeceg.basename(mFajla)

// console.log(Baza)


// const PRAVOMESTOFAJLA = porekloNeceg.resolve(__dirname, 'content', 'subfolder')


// console.log(PRAVOMESTOFAJLA)
// console.log("ODAVDE POCINJE DRUGO SAZIVANJE FUNKCIJE")



// let tFajla = porekloNeceg.join("/dSadrzaj", "test.txt")

// console.log(porekloNeceg.basename(tFajla))



let fs = require('fs')



//////SINHRONE FUNKCIJE TACNIJE METODE
// let pTekst = fs.readFileSync("./dSadrzaj/pTekst.txt", "utf-8")
// let dTekst = fs.readFileSync("./dSadrzaj/dTekst.txt", "utf-8")

// console.log(pTekst)
// console.log(dTekst)

// fs.writeFileSync("./dSadrzaj/testггг.txt", "stagod" )



// fs.readFile("./dSadrzaj/dFolder/test.txt", "utf8", (greska, podaci) => {
//     if (greska) {
//         console.log(greska)
//     }

//     console.log(podaci)
// })



//ASINHRONE FUNKCIJE (METODE)

// console.log("test")
// fs.readFile("./dSadrzaj/dFolder/test.txt", "utf8", function(greske, podaci) {
//     if (greske) {
//         console.log(greske)
//     }
//     console.log(podaci)

//     fs.writeFile("./dSadrzaj/dFolder/Öblalablalbal.txt", `REZULTAT JEEE ${podaci}`, (greskeee, podaciiii) => {
//         if (greske) {
//             console.log(greskeee)
//         }

//         console.log("BUREK SA SIROM")
//     }) 
// } )


// fs.readFileSync("./dSadrzaj/dFolder/test.txt", "utf8")







fs.writeFile("./dSadrzaj/Mesnica.txt", "Burek je samo sa sirom", function(проблем, резултат) {
    console.log(резултат)
})


//ИЛИ


fs.writeFile("./dSadrzaj/Mesnica.txt", "Burek je samo sa sirom", function(проблем, резултат) {
    if(проблем) {
        console.log(проблем)
    }

    console.log(резултат)
})



console.log("burek sa mesom")

console.log("burek sa mesom")
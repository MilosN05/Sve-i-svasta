const http = require("http")
let server = http.createServer(function(trazilac, posiljalac) {

    if (trazilac.url == "/onama") {
        posiljalac.end("<input id='test'>")
    }

    if (trazilac.url == "/") {
        posiljalac.end("WELKM, DOBRO DOSO. USKORO CE BITI RKEIRANA STRANICA")
    }


    if (trazilac.url != "/" && trazilac.url !="/onama") {
        posiljalac.end("A JEB MACER PAZI BA")
    }

})


server.listen(4000)


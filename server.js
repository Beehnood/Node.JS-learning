const http = require("http");
const fs = require("fs");
const _ =require("lodash")

const server = http.createServer((request, response) => {

    const num = _.random(0, 20)
    console.log(num);

    response.setHeader("Content-Type", "text/html");
    let path = "./view/";

    switch (request.url) {
        case "/":
            path += "index.html";
            response.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            response.statusCode = 200;
            break;
        case "/about-me":
            // Redirection 301
            response.statusCode = 301;
            response.setHeader("Location", "/about");
            response.end();
            return; // 🔹 Important pour éviter d'exécuter la lecture du fichier après la redirection
        default:
            path += "404.html";
            response.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            response.statusCode = 500; // 🔹 Ajouter un code d'erreur serveur
            response.end("Internal Server Error");
        } else {
            response.end(data);
        }
    });
});

server.listen(3000, "localhost", () => {
    console.log("Listening for requests on port 3000");
});
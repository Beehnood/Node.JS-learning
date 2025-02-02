const express = require("express");
const morgan = require("morgan");



const app = express();

// Définir le moteur de template
app.set("view engine", "ejs");

// Démarrer le serveur
app.listen(3000); 

// conecter à la base de données (MongoDB)
const mongoose = 'mongodb+srv://<db_username>:<Mahdi:1234Test>@cluster0.oszwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;'

// Middleware & Static files
app.use(express.static("public"));

app.use(morgan("tiny"));



// j'ai utilisé morgan à la place de cela:
//     app.use((require, response, next) => {

//     console.log("new request made");
//     console.log("host: ", require.hostname);
//     console.log("path: ", require.path);
//     console.log("method: ", require.method);
//     next();
// });

// Page d'accueil avec blogs
app.get("/", (req, res) => {
    const blogs = [
        { title: "Nader trouve la NASA", snippet: "Lorem ipsum dolor sit amet..." },
        { title: "Ghassem découvre Git", snippet: "Lorem ipsum dolor sit amet..." },
        { title: "Jerard trouve LeBonCoin", snippet: "Lorem ipsum dolor sit amet..." },
    ];
    res.render("index", { title: "Home", blogs }); // 🔹 Passer les blogs
});

// app.use((require, response, next) => {

//     console.log("------------------- Ben");
   
//     next();
// });

// Page About
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// Page de création d'un blog
app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create" });
});

// Redirection
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// Page 404 (toujours à la fin)
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});

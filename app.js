const express = require("express");
const app = express();

// Définir le moteur de template
app.set("view engine", "ejs");

// Démarrer le serveur
app.listen(3000, () => {
    console.log("Serveur en écoute sur http://localhost:3000");
});

// Page d'accueil avec blogs
app.get("/", (req, res) => {
    const blogs = [
        { title: "Nader trouve la NASA", snippet: "Lorem ipsum dolor sit amet..." },
        { title: "Ghassem découvre Git", snippet: "Lorem ipsum dolor sit amet..." },
        { title: "Jerard trouve LeBonCoin", snippet: "Lorem ipsum dolor sit amet..." },
    ];
    res.render("index", { title: "Home", blogs }); // 🔹 Passer les blogs
});

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

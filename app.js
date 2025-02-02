const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

// Définir le moteur de template
app.set("view engine", "ejs");

// Middleware & fichiers statiques
app.use(express.static("public"));
app.use(morgan("morgan"));

// Connexion à la base de données (MongoDB)
const mongoURI = "mongodb+srv://beny:Beny1234@cluster0.oszwg.mongodb.net/node-course?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log(" Connecté à la base de données !");
    app.listen(3000, () => console.log("Serveur en écoute sur le port 3000"));
  })
  .catch((err) => console.error(" Erreur de connexion MongoDB :", err));

// Page d'accueil avec blogs
app.get("/", (req, res) => {
  const blogs = [
    { title: "Nader trouve la NASA", snippet: "Lorem ipsum dolor sit amet..." },
    { title: "Ghassem découvre Git", snippet: "Lorem ipsum dolor sit amet..." },
    { title: "Jerard trouve LeBonCoin", snippet: "Lorem ipsum dolor sit amet..." },
  ];
  res.render("index", { title: "Home", blogs });
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

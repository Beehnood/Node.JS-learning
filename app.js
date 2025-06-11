const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

let dbAvailable = false;

const app = express();

// Définir le moteur de template
app.set("view engine", "ejs");

// Middleware & fichiers statiques
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// ajouter un blog à la main
// app.get("/add-blog", (req, res) => {

//     const blog = new Blog({
//         title: "new blog 5",
//         snippet: "about my new blog 5",
//         body:"more about my new blog",
//     })
//     blog.save()
//         .then((result) => res.send(result))
//         .catch((err) => console.log(err));
//     })

// trouver tous les blogs
// app.get("/all-blog", (req, res) => {
//     Blog.find()
//         .then((result) => res.send(result))
//         .catch((err) => console.log(err));

// });

// trouver un blog
// app.get("/single-blog", (req, res) => {
//     Blog.findById('67a070a48d59b49c7086e2f0')
//         .then((result)=> res.send(result)
//         .catch((err)=> console.log(err)))

// });

// supprimer un blog
// app.get("/rm-single-blog", (req, res)=>{
//     Blog.findByIdAndDelete('67a0a0968fc4e657c9626e1a')
//     .then((result)=> {
//         if(result){
//             res.send(`blog supprimé: ${result}`)
//     }else{
//         res.send('blog non trouvé')
//     }
// })
//     .catch((err)=> console.log(err))
// })

// supprimer tous les blogs
// app.get("/rm-all-blogs", (req, res)=>{
//     Blog.deleteMany({})
//      .then((result)=> res.send(result))
//      .catch((err)=> console.log(err))
// })

// Connexion à la base de données (MongoDB)
const hardcodedMongoURI =
  "mongodb+srv://beny:Beny1234@cluster0.oszwg.mongodb.net/node-course?retryWrites=true&w=majority&appName=Cluster0";
const mongoURI = process.env.MONGODB_URI || hardcodedMongoURI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log(" Connecté à la base de données !");
    dbAvailable = true;
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    dbAvailable = false;
  });

app.listen(3000, () => console.log("Serveur en écoute sur le port 3000"));

// Routes
// Page d'accueil avec blogs à la main
app.get("/", (req, res) => {
  // Page d'accueil avec blogs à la main
  //   const blogs = [
  //     { title: "Nader trouve la NASA", snippet: "Lorem ipsum dolor sit amet..." },
  //     { title: "Ghassem découvre Git", snippet: "Lorem ipsum dolor sit amet..." },
  //     { title: "Jerard trouve LeBonCoin", snippet: "Lorem ipsum dolor sit amet..." },
  //   ];
  //   res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

// Page About
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use('/blogs', blogRoutes);


// Redirection
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// Page 404 (toujours à la fin)
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

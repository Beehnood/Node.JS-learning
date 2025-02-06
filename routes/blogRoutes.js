const express = require("express");
const Blog = require("../model/blog.js");


const router = express.Router();

// routes des blogs
router.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index", { title: "All Blogs", blogs });
    })
    .catch((err) =>
      console.log(" Erreur lors de la récupération des blogs :", err)
    );
});

// Page de détails d'un blog
router.post("/", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => console.log(" Erreur lors de l'ajout du blog :", err));
});

// Page de création d'un blog
router.get("/create", (req, res) => {
  res.render("create", { title: "Create a new blogs" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((blog) => {
      res.render("details", { title: "Blog Details", blog });
    })
    .catch((err) => {
      console.log(" Erreur lors de la récupération du blog :", err);
      res.status(404).render("404", { title: "Blog not found" });
    });
});
// Page de suppression d'un blog
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) =>
      console.log(" Erreur lors de la suppression du blog :", err)
    );
});

module.exports = router;

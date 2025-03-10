const express = require("express");
const router = express.Router();

let posts = [
    { id: 1, title: "Post 1", content: "This is the first post." },
  { id: 2, title: "Post 2", content: "This is the second post." },
]

router.get("/", (req, res) => {
    res.json(posts);
  });

  router.get("/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((p) => p.id === postId);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  });
  
  // POST /posts
  router.post("/", (req, res) => {
    const newPost = req.body;
    posts.push(newPost);
    res.json({ message: "Post added!", post: newPost });
  });
  
  module.exports = router;
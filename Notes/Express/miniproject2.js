const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

module.exports = router;
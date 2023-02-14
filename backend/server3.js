const express = require("express");
const products = require("./data/products");

const app = express();

//localhost:27017

mongodb: app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params._id);
  res.json(product);
});

app.listen(5001, console.log(`Server running on port 5001`));

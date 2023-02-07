require("dotenv").config();
const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 5015;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get data from products.json
app.get("/products", (req, res) => {
  fs.readFile(__dirname + "/data/products.json", "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log("These are Products", data);
    res.json(JSON.parse(data));
  });
});

// post data to products.json
app.post("/products", (req, res) => {
  fs.readFile(__dirname + "/data/products.json", "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    products = JSON.parse(data);

    let id = products[products.length - 1].id + 1;
    let newProduct = {
      nameP: req.body.nameP,
      image: req.body.image,
      description: req.body.description,
      brand: req.body.brand,
      category: req.body.category,
      price: req.body.price,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      _id: id,
    };
    let activeProduct = products.concat(newProduct);

    fs.writeFile(
      __dirname + "/data/products.json",
      JSON.stringify(activeProduct),
      (err, data) => {
        if (err) {
          return err;
        }
        console.log(activeProduct);
        res.json(activeProduct);
      }
    );
  });
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));

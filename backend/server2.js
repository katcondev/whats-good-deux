const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/whats-good", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const spiritSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  brand: String,
  category: String,
  price: Number,
  countInStock: Number,
  rating: Number,
  numReviews: Number,
});

const Spirit = mongoose.model("Spirit", spiritSchema);

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/spirits", (req, res) => {
  Spirit.find({}, (err, spirits) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(spirits);
    }
  });
});

app.listen(5001, console.log(`Server running on port 5001`));

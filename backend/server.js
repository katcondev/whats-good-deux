const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB_URI, {
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

app.get("/api/spirits/:id", (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ObjectId");
  }

  Spirit.findById(id, (err, spirit) => {
    if (err) return res.status(500).send(err);
    if (!spirit) return res.status(404).send("Spirit not found.");
    res.send(spirit);
  });
});

app.listen(PORT, console.log(`Server running on port 5001`));

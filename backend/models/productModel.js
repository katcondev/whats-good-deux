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

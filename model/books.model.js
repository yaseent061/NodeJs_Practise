const mongoose = require("mongoose")

const books = new mongoose.Schema({
  name: String,
  author: String,
})

module.exports = mongoose.model("book", books)

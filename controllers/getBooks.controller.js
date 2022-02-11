const getAllBooks = (req, res) => {
  res.send([
    {
      name: "Nothing ventured",
      author: " Jeffrey",
    },
    {
      name: "Book thief",
      author: "Markus zusak",
    },
  ])
}
const getOneBook = (req, res) => {
  res.send({
    name: "Nothing ventured",
    author: " Jeffrey",
  })
}

module.exports = {
  getAllBooks,
  getOneBook,
}

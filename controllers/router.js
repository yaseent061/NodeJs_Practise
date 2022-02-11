const express = require("express")
const { getAllBooks, getOneBook } = require("./getBooks.controller")
const router = express.Router()

router.use((req, res, next) => {
  console.log("Time : ", Date.now(), "Req:", res.data)
  next()
})

router.get("/getAllBooks", getAllBooks)
router.get("/getOneBook", getOneBook)

module.exports = router

const express = require("express")
const app = express()
const router = require("./controllers/router")

app.use(express.json())

app.use("/books", router)

// app.connect
console.log("Hello")

app.listen("5000", () => {
  console.log("Working")
})

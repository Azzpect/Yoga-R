const express = require("express")
const cors = require("cors")
const path = require("path")
require("dotenv").config()


const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use("/public", express.static(path.join(__dirname, "../web/public")))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../web/home.html"))
})
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../web/about.html"))
})
app.get("/offer", (req, res) => {
  res.sendFile(path.join(__dirname, "../web/offer.html"))
})
app.get("/price", (req, res) => {
  res.sendFile(path.join(__dirname, "../web/price.html"))
})
app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "../web/gallery.html"))
})
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../web/contact.html"))
})



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

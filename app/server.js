const express = require('express')
const app = express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const router=require("./routes");
app.use("/api",router)
console.log("Escuchando en el puerto 3000")
app.listen(3000)
const express = require('express')
const app = express()
let datos=["a","b","c","d","e"];
app.get('/', function (req, res) {
  res.send("Bienvenido a mi API")
})
app.get('/pets', function (req, res) {
    res.json('{Mensaje:"Todos los datos",datos:['+ datos +'] }')
  })
app.get('/pets/:id' , (req,res)=>{
    let dato=req.params.id;
    console.log(dato);
    res.json("{Mensaje:'Se regresa una sola mascota',valor:"+datos[dato]+"}")
})
app.put("/pets",(req,res)=>{
  res.json('{Mensaje:"Es para modificar mascotas"}')
})
app.get('/pets', function (req, res) {
  res.json('{Mensaje:"Todos los productos",datos:['+ datos +'] }')
})
app.get('/products/:id' , (req,res)=>{
  let dato=req.params.id;
  console.log(dato);
  res.json("{Mensaje:'Se regresa un solo producto',valor:"+datos[dato]+"}")
})
console.log("Escuchando en el puerto 3000")
app.listen(3000)
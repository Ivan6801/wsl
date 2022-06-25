const express = require('express');

var app = express();

app.use('/', function(req, res) {
  res.send("Estoy aprendiendo!!!");
})

app.listen(8080);
console.log('Estoy escuchando por http://localhost:8080 que es el puerto por el que escucho.');
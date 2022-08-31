const express = require ('express');

var app = express ();
app.use('/', function (req,res){
    res.send('Holaaa al servidopr de wsl');
});

app.listen(3000);
console.log('La aplicacion esta funcionando en http://localhost:3000 ');

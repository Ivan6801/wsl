const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

var app = express();
app.use(bodyParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function (req, res) {
  console.log(req.headers);
  res.headers({
    "custom-header" : "Nuestro valor personalizado",
  })
  res.send("Lista de mensaje");
});

router.post("/message", function (req, res) {
  res.send("Hola desde post");
});

router.delete("/message", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.status(201).send([{ error: '', body: 'Creado correctamente' }]);
});

// app.use('/', function(req, res) {
//   res.send("Estoy aprendiendo!!!");
// })

app.listen(3000);
console.log(
  "Estoy escuchando por http://localhost:3000 que es el puerto por el que escucho."
);

const express = require ('express');
const bodyParser = require ('body-parser');
const response = require ('./network/response');
const router = express.Router();


var app = express ();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use (router);

router.get ('/words', function (req,res){
    console.log(req.body);
    console.log(req.query);
    response.success(req, res, 'List of words',200);
   
});

router.post ('/words', function (req,res){
    if (req.query.error=="ok"){
        response.error(req, res, ' simulated error');
    } else {
        response.success(req, res, ' word created',201);
    }
   
    
});

router.put ('/words', function (req,res){
    res.send('Holaaa al servidopr de wsl desde router put');
});

router.patch ('/words', function (req,res){
    res.send('Holaaa al servidopr de wsl desde router patch');
});

router.delete ('/words', function (req,res){
    res.send('Holaaa al servidopr de wsl desde router delete');
});

app.listen(3000);
console.log('La aplicacion esta funcionando en http://localhost:3000 ');


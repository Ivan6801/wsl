const express = require ('express');
const router = express.Router();
const response = require ('../../network/response');

router.get ('/', function (req,res){
    console.log(req.body);
    console.log(req.query);
    response.success(req, res, 'List of words',200);
   
});

router.post ('/', function (req,res){
    if (req.query.error=="ok"){
        response.error(req, res, ' simulated error',500,'simulacion error en consola');
    } else {
        response.success(req, res, ' word created',201);
    }
   
    
});

router.put ('/', function (req,res){
    response.success(req, res, 'word updated',200);
   
});

router.patch ('/', function (req,res){
    response.success(req, res, 'word changed',200);
});

router.delete ('/', function (req,res){
    response.success(req, res, 'words deleted',200);
});


module.exports = router;
const express = require ('express');
const controller = require ('../words/controller')
const router = express.Router();
const response = require ('../../network/response');

router.get ('/', function (req,res){
    console.log(req.body);
    console.log(req.query);
    response.success(req, res, 'List of words',200);
   
});

router.post ('/', function (req,res){
    controller.addWord(req.body.user, req.body.word)  
        .then((fullWord) => {
            response.success(req, res, fullWord,201); 
            })
        .catch (e => {
            response.error(req, res, ' info invalida',400,'error en el controlador');
            }); 
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
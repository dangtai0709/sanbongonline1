var express = require('express');
var router = express.Router();
var DB = require('./model/thongke');
router.get('/',function(req,res,next){
        DB.getSL(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    
});
router.get('/top',function(req,res,next){
    DB.getTOPsb(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

});
router.get('/info',function(req,res,next){
    DB.getInfo(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

});
router.get('/xacthucDB/:id/:status',function(req,res,next){
   // console.log(req.params.id+"xxxx"+req.params.status)
    DB.xacthucDB(req.params.id,req.params.status,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

});
router.get('/xacthucSB/:id/:status',function(req,res,next){
    DB.xacthucSB(req.params.id,req.params.status,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });

});


module.exports=router;
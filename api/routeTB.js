var express = require('express');
var router = express.Router();
var TB = require('./model/thongbao');


router.get('/:id?',function(req,res,next){
    if(req.params.id){
        TB.getTBById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        TB.getAllTB(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/',function(req,res,next){
    TB.addTB(req.body,function(err,count){
        if(err){
            res.end('0');
        } else{
            res.end('1');
        }
    });
});


router.delete('/:id',function(req,res,next){
    TB.deleteTB(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/:id',function(req,res,next){
    TB.updateTB(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
module.exports=router;
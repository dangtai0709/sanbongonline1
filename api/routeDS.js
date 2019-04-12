var express = require('express');
var router = express.Router();
var DS = require('./model/datsan');
router.get('/:id?',function(req,res,next){
    if(req.params.id){
        DS.getDSById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        DS.getAllDS(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/',function(req,res,next){
    DS.addDS(req.body,function(err,count){
        if(err){
            res.end("0");
        } else{
            res.end('1');
        }
    });
});


router.delete('/:id',function(req,res,next){
    DS.deleteDS(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{  
         res.json(count);
        }
    });
});

router.put('/:id',function(req,res,next){
    DS.updateDS(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
router.get('/yeucaudatsan/:id',function(req,res,next){
    
        DS.getDSbyTK(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    
});
module.exports=router;
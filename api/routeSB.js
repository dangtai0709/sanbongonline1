var express = require('express');
var router = express.Router();
var SB = require('./model/sanbong');
router.get('/dadat/:id/:ngay?',function(req,res,next){
   
    if(req.params.ngay){
        var date="'"+req.params.ngay+"'";
        date=new Date(date).toLocaleDateString();
    }else{
      date=new Date().toLocaleDateString();
    }
        SB.getdatsan(req.params.id,date,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    
});

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        SB.getSBById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                
                res.json(rows);
            }
        });
    }else{
        if(req.query.khuvuc==null){
            req.query.khuvuc="";
        }
        SB.getAllSB(req.query.khuvuc,function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/',function(req,res,next){
    SB.addSB(req.body,function(err,count){
        if(err){
            console.log(err);
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});


router.delete('/:id',function(req,res,next){
    SB.deleteSB(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/:id',function(req,res,next){
    SB.updateSB(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
module.exports=router;
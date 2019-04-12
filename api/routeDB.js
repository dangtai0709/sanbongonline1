var express = require('express');
var router = express.Router();
var DB = require('./model/doibong');
router.get('/khuvuc/',function(req,res,next){
        DB.getKhuvuc(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    
});
// router.get('/timdoi/:id?',function(req,res,next){
//     DB.getDBBytimdoi(req.params.id,function(err,rows){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(rows);
//         }
//     });

// });
router.get('/:id?',function(req,res,next){
    if(req.params.id){
        DB.getDBById(req.params.id,function(err,rows){
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
        DB.getAllDB(req.query.khuvuc,function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/',function(req,res,next){
    DB.addDB(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});


router.delete('/:id',function(req,res,next){
    DB.deleteDB(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router.put('/:id',function(req,res,next){
    DB.updateDB(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
module.exports=router;
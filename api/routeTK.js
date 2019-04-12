
var express = require('express');
var router = express.Router();
var TK = require('./model/taikhoan');
const bcrypt = require('bcrypt-nodejs');
router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        TK.getTKById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        TK.getAllTK(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post('/', function (req, res, next) {
    req.body.matkhau = bcrypt.hashSync(req.body.matkhau);
    TK.addTK(req.body, function (err, count) {
        if (err) {
            res.end("0");
           // res.json(err);
        } else {
            //res.redirect(targetUrl);
            //res.json(req.body);
            res.end("1");
        }
    });
});
router.post('/login', function (req, res, next) {
    TK.checkLogin(req.body, function (err, count) {
        if ((count.length != 0) && bcrypt.compareSync(req.body.matkhau,count[0].matkhau)) {
            res.end('1');
          }
          else {
            res.end('0');
          }
    });
});
router.post('/logina', function (req, res, next) {
    TK.checkLoginAdmin(req.body, function (err, count) {
        if (count[0]['a'] == '1') { 
            res.end('1'); }
        else {
            res.end('0');
        }
    });
});

router.delete('/:id', function (req, res, next) {
    TK.deleteTK(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:id', function (req, res, next) {
    req.body.matkhau = bcrypt.hashSync(req.body.matkhau);
    TK.updateTK(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.end('1');
        }
    });
});

module.exports = router;
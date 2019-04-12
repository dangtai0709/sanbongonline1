var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();

app.set('trust proxy', 1) // trust first proxy

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
var originsWhitelist = [
  'http://localhost:4200',      //this is my front-end url for development
  'http://127.0.0.1:4200'
];
var corsOptions = {
  origin: function(origin, callback){
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
},
credentials:true,
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
var routeTK = require('./routeTK');
var routeDB=require('./routeDB');
var routeSB=require('./routeSB');
var routeTB=require('./routeTB');
var routeDS=require('./routeDS');
var routeTrandau=require('./routeTrandau');

var routeTk=require('./routeTKe');
app.use('/taikhoan',routeTK);
app.use('/doibong',routeDB);
app.use('/sanbong',routeSB);
app.use('/thongbao',routeTB);
app.use('/datsan',routeDS);
app.use('/trandau',routeTrandau);
app.use('/thongke',routeTk);
app.options("*", cors(corsOptions));
var server = app.listen(3000, function() {
  console.log('Server listening on port ' + server.address().port);
});
module.exports = app;
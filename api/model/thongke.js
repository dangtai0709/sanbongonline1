var db = require('../DB.js');

var DB = {
	getSL: function ( callback) {
        var sql="SELECT COUNT(*) as a FROM taikhoan union ALL SELECT COUNT(*) FROM sanbong union ALL SELECT COUNT(*) FROM doibong union ALL SELECT COUNT(*) FROM datsan";
		return db.query(sql, callback);
	},
getTOPsb:function(callback){
    var sql="select tensan,khuvuc,COUNT(*) as luot from datsan join sanbong on sanbong.masanbong=datsan.masanbong group by datsan.masanbong order by luot desc LIMIT 5";
    return db.query(sql, callback);
},
getInfo:function(callback){
    var sql="SELECT sodienthoai,email,tensan,tendoi,sanbong.trangthai as SB,doibong.trangthai as DB FROM taikhoan LEFT join sanbong ON sanbong.mataikhoan=taikhoan.sodienthoai    LEFT join doibong on taikhoan.sodienthoai=doibong.mataikhoan";
    return db.query(sql, callback);
},
xacthucDB:function(id,status,callback){
    console.log(id +"abc"+ status);
    if(status==0){
        var sql="UPDATE `doibong` SET `trangthai`= 1 WHERE mataikhoan=?";
    }else{
        var sql="UPDATE `doibong` SET `trangthai`= 0 WHERE mataikhoan=?";
    }
   
    return db.query(sql,[id], callback);
},
xacthucSB:function(id,status,callback){
    if(status==0){
        var sql="UPDATE `sanbong` SET `trangthai`= 1 WHERE mataikhoan=?";
    }else{
        var sql="UPDATE `sanbong` SET `trangthai`= 0 WHERE mataikhoan=?";
    }
    
    return db.query(sql,[id], callback);
},
	
};
module.exports = DB;
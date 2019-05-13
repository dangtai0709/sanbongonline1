var db = require('../DB.js');

var SB={
	getAllSB:function(kv,callback){ 
        if(kv!='')   {
			var sql="SELECT sanbong.mataikhoan,sanbong.masanbong,sanbong.loaisan,sanbong.tensan,sanbong.anh,sanbong.thongtin,sanbong.khuvuc,sanbong.sosan,sanbong.trangthai ,COUNT(datsan.masanbong) as luot FROM `sanbong` LEFT join datsan on datsan.masanbong=sanbong.masanbong where  khuvuc like '%"+kv+"%' group by sanbong.masanbong ORDER by luot DESC";
			return db.query(sql,callback);
			// check so sân đã đặt theo ngày đổ vào callback??
        }  
		return db.query("SELECT sanbong.mataikhoan,sanbong.masanbong,sanbong.loaisan,sanbong.tensan,sanbong.anh,sanbong.thongtin,sanbong.khuvuc,sanbong.sosan,sanbong.trangthai ,COUNT(datsan.masanbong) as luot FROM `sanbong` LEFT join datsan on datsan.masanbong=sanbong.masanbong group by sanbong.masanbong ORDER by luot DESC ",callback);
    },
    getdatsan:function(id,ngay,callback){  
		console.log(ngay);
		// check số sân đã đặt theo từng khung giờ của san bóng theo từng ngày
		return db.query("SELECT batdau,COUNT(*) as dadat FROM `datsan` where  masanbong=? and ngay=?  GROUP BY batdau ORDER by batdau asc",[id,ngay],callback);
	//	return db.query("SELECT masanbong,COUNT(*) as dadat FROM `datsan`  GROUP BY masanbong",callback);
	},
	getSBById:function(id,callback){

		var sql="SELECT * from sanbong  where (mataikhoan=? or masanbong=?) ";//and ngay=?
		return db.query(sql,[id,id],callback);	
    },
	addSB:function(SB,callback){
        created_at= new Date();
       	db.query("SELECT * FROM sanbong", function(err, result) {
        SB.masanbong="SB"+result.length;
		SB.trangthai=0;
        return db.query("INSERT INTO sanbong(masanbong,mataikhoan,loaisan,tensan,anh,thongtin,khuvuc,sosan,gia1,gia2,gia3,trangthai, created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[SB.masanbong,SB.mataikhoan,SB.loaisan,SB.tensan,SB.anh,SB.thongtin,SB.khuvuc,SB.sosan,SB.gia1,SB.gia2,SB.gia3,SB.trangthai,created_at],callback);    
    });
		
		
	},
	deleteSB:function(id,callback){
		return db.query("delete from sanbong where masanbong=?",[id],callback);
	},
	updateSB:function(id,SB,callback){
		return db.query("update sanbong set  loaisan=?,tensan=?,anh=?,thongtin=?,khuvuc=?,sosan=?,gia1=?,gia2=?,gia3=? where mataikhoan=?",[SB.loaisan,SB.tensan,SB.anh,SB.thongtin,SB.khuvuc,SB.sosan,SB.gia1,SB.gia2,SB.gia3,id],callback);
	}
};
 module.exports=SB;
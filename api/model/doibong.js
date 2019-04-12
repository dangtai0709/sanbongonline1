var db = require('../DB.js');

var DB = {
	getAllDB: function (kv, callback) {
		if (kv != '') {
			var sql="SELECT doibong.*,ten,email FROM doibong join taikhoan on doibong.mataikhoan=taikhoan.sodienthoai where trangthai=1 and khuvuc like '%"+kv+"%'";
			return db.query(sql, callback);
		}
		return db.query("SELECT doibong.*,ten,email FROM doibong join taikhoan on doibong.mataikhoan=taikhoan.sodienthoai where trangthai=1", callback);
	},
	getKhuvuc: function (callback) {
		return db.query("SELECT khuvuc FROM doibong ", callback);
	},
	getDBById: function (id, callback) {
		return db.query("SELECT doibong.*,ten,email FROM doibong join taikhoan on doibong.mataikhoan=taikhoan.sodienthoai where madoibong=? or mataikhoan=?", [id, id], callback);
	},
	// getDBBytimdoi: function (id, callback) {
	// 	if (id) {
	// 		var sql="SELECT * FROM doibong where timdoi=1 and  khuvuc like '%"+id+"%'";
	// 		return db.query(sql, callback);
	// 	}
	// 	return db.query("select * from doibong where timdoi=1 ", callback);
	// },
	addDB: function (DB, callback) {
		created_at = new Date();
		 db.query("SELECT * FROM doibong", function (err, result) {
			DB.madoibong = "DB" + result.length;
			DB.trangthai = 0;
			console.log(DB);
			return db.query("INSERT INTO doibong(madoibong, mataikhoan, tendoi, trinhdo, anh, timdoi, cosan, thoigianthuongda, gioithieu, khuvuc, trangthai, created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [DB.madoibong, DB.mataikhoan, DB.tendoi, DB.trinhdo, DB.anh, DB.timdoi, DB.cosan, DB.thoigianthuongda, DB.gioithieu, DB.khuvuc, DB.trangthai, created_at], callback);
		});

	},
	deleteDB: function (id, callback) {
		return db.query("delete from doibong where madoibong=?", [id], callback);
	},
	updateDB: function (id, DB, callback) {
		console.log( DB);
		return db.query("update doibong set  tendoi=?,trinhdo=?,anh=?,timdoi=?,cosan=?,thoigianthuongda=?,gioithieu=?,khuvuc=? where mataikhoan=?", [DB.tendoi, DB.trinhdo, DB.anh, DB.timdoi, DB.cosan, DB.thoigianthuongda, DB.gioithieu, DB.khuvuc, id], callback);
	}
};
module.exports = DB;
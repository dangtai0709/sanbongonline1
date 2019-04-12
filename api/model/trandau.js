var db = require('../DB.js');

var DS = {
	getAllDS: function (callback) {
		db.query("DELETE FROM trandau where ngay < CURRENT_DATE() ");
		return db.query("SELECT trandau.*,tendoi,madoibong FROM trandau join doibong on trandau.mataikhoan=doibong.mataikhoan  where ngay ORDER by ngay ASC", callback);
	},
	getDSById: function (id, callback) {
		return db.query("SELECT * FROM trandau where id=? ", [id], callback);
	},
	getDSbyTK: function (id, callback) {
	var sql = "SELECT * FROM `trandau` join taikhoan on trandau.mataikhoan=taikhoan.sodienthoai WHERE mataikhoan=?  ORDER by ngay ASC";
	return db.query(sql, [id], callback);
	},
	addDS: function (DS, callback) {
		var created_at = new Date();
		var sql="INSERT INTO `trandau`(thoigian,ngay,diadiem,noidung,mataikhoan,created_at) VALUES (?,?)";
		return db.query(sql, [Object.values(DS),created_at], callback);
	},
	deleteDS: function (id, callback) {
		console.log(id);
		return db.query("delete from trandau where id=?", [id], callback);
	},
	updateDS: function (id,DS, callback) {
		console.log([DS,id]);
		var sql="UPDATE `trandau` SET ? where id=? ";
		return db.query(sql, [DS,id], callback);
	},
	
};
module.exports = DS;
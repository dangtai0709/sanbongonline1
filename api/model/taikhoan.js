var db = require('../DB.js');
var TaiKhoan = {
	checkLogin: function (TK,callback) {
		return db.query("Select * from taikhoan where sodienthoai=? ", [TK.sodienthoai], callback);
	},
	checkLoginAdmin: function (TK, callback) {
		console.log(TK);
		return db.query("Select count(*) as a from admin where name=? and pass=?", [TK.name, TK.pass], callback);
	},
	getAllTK: function (callback) {
		return db.query("Select * from taikhoan", callback);
	},
	getTKById: function (id, callback) {
		return db.query("select * from taikhoan where sodienthoai=?", [id], callback);
	},
	addTK: function (TK, callback) {
		created_at = new Date();
		console.log(TK);
		return db.query("Insert into taikhoan(sodienthoai,ten,matkhau,created_at) values(?,?,?,?)", [TK.sodienthoai,TK.ten, TK.matkhau, created_at], callback);
	},
	deleteTK: function (id, callback) {
		return db.query("delete from taikhoan where sodienthoai=?", [id], callback);
	},
	updateTK: function (id, TK, callback) {
		console.log(id +" va"+ TK.ten+ TK.anh+TK.email+TK.matkhau);
		return db.query("update taikhoan set ten=?,anh=?,email=?,matkhau=?  where sodienthoai=?", [TK.ten, TK.anh, TK.email, TK.matkhau, id], callback);
	}
};
module.exports = TaiKhoan;
var db = require('../DB.js');

var TB = {
	getAllTB: function (callback) {

		return db.query("SELECT * FROM thongbao ", callback);
	},

	getTBById: function (id, callback) {
		return db.query("SELECT * FROM thongbao where mataikhoan=? ", [id], callback);
	},
	addTB: function (TB, callback) {
		created_at = new Date().toLocaleDateString();
		 db.query("SELECT * FROM thongbao", function (err, result) {
			TB.mathongbao = "TB" + result.length;
			console.log(TB);
			return db.query("INSERT INTO thongbao(mataikhoan,mathongbao,created_at,noidung) VALUES (?,?,?,?)", [TB.mataikhoan, TB.mathongbao, created_at, TB.noidung], callback);
		});
	},
	deleteTB: function (id, callback) {
		return db.query("delete from thongbao where mathongbao=?", [id], callback);
	},
	updateTB: function (id, TB, callback) {
		return db.query("update thongbao set  noidung=? where mathongbao=?", [TB.noidung, id], callback);
	}
};
module.exports = TB;
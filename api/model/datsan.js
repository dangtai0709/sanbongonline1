var db = require('../DB.js');

var DS = {
	getAllDS: function (callback) {
		return db.query("SELECT * FROM datsan ORDER by ngay asc", callback);
	},
	getDSById: function (id, callback) {
		return db.query("SELECT datsan.*,tensan FROM datsan JOIN sanbong on datsan.masanbong= sanbong.masanbong where lienhe=?  ORDER by ngay asc", [id], callback);
	},
	//SELECT datsan.* FROM `datsan` JOIN sanbong on datsan.masanbong= sanbong.masanbong WHERE mataikhoan='333'
	getDSbyTK: function (id, callback) {
		var sql = "SELECT datsan.*,tensan FROM `datsan` JOIN sanbong on datsan.masanbong= sanbong.masanbong WHERE mataikhoan=? ORDER by ngay asc";
		return db.query(sql, [id], callback);
	},
	addDS: function (DS, callback) {
		db.query("DELETE FROM datsan where ngay < CURRENT_DATE() ");
		var date = "'" + DS.ngay + "'";
		created_at= new Date();
		DS.ngay = new Date(date).toLocaleDateString();
		db.query("select count(*) as dadat from datsan where masanbong=? and ngay=? and batdau=?", [DS.masanbong, DS.ngay, DS.batdau], function (err, result) {
			dadat = Number(result[0].dadat);
			db.query("select sosan from sanbong where masanbong=? ", [DS.masanbong], function (err, result) {
				sosan = Number(result[0].sosan);
				// console.log(DS);
				console.log("so san " + sosan + " da dat " + dadat);
				
				if (sosan > dadat) {
					return db.query("INSERT INTO datsan(masanbong,tennguoidat,ngay,batdau,lienhe,ghichu,created_at) VALUES (?,?,?,?,?,?,?)", [DS.masanbong, DS.tennguoidat, DS.ngay, DS.batdau, DS.lienhe, DS.ghichu,created_at], callback);
				} else {
					return db.query("INSERT INTO datsan(masanbong,tennguoidat,ngay,batdau,lienhe,ghichu) VALUES (?)", [DS.ghichu], callback);
				}
			});
		});





	},
	deleteDS: function (id, callback) {
		return db.query("delete from datsan where madatsan=?", [id], callback);
	},
	countDSbyday: function (id, DS, callback) {
		for (var i = 1; i < 6; i++) {
			db.query("select count(*) as dadat from datsan where masanbong=? and ngay=? and batdau=? ", [id, DS.ngay, i], function (err, result) {
				callback[i] = result;
			});
		}
		return callback;
	}
};
module.exports = DS;
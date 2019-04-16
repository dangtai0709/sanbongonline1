import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-thongbaotimdoi',
  templateUrl: './thongbaotimdoi.component.html',
  styleUrls: ['./thongbaotimdoi.component.css']
})
export class ThongbaotimdoiComponent implements OnInit {
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  protected isupdate: Boolean;
  protected arrds: Object;
  protected thoigian: String;
  protected ngay: String;
  protected diadiem: String;
  protected noidung: String;
  protected info; String;
  protected id: String;
  constructor(private cookieService: CookieService, private http: HttpClient) { }

  ngOnInit() {
    this.isupdate = false;
    this.getdata();
  }
  getdata() {
    this.http.get("http://localhost:3000/doibong/" + this.cookieService.get('TK')).subscribe(data => {
      console.log(data);
      if (data == "") {
        this.info = "Bạn chưa đăng kí đội bóng nên các thông báo sẽ không được hiện thị ở trang chủ";
      }

    });
    this.http.get("http://localhost:3000/trandau/ds/" + this.cookieService.get('TK')).subscribe(data => {
      this.arrds = data;
    });

  }
  clearform() {
    this.thoigian = "";
    this.ngay = "";
    this.diadiem = "";
    this.noidung = "";
    this.isupdate = false;
  }
  getinfo(i, id) {
    this.id = id;
    this.isupdate = true;
    this.thoigian = this.arrds[i].thoigian;
    this.ngay = new Date().toISOString().slice(0, 10);
    this.diadiem = this.arrds[i].diadiem;
    this.noidung = this.arrds[i].noidung;
  }
  update() {
    var data = {
      "thoigian": this.thoigian,
      "ngay": this.ngay,
      "diadiem": this.diadiem,
      "noidung": this.noidung,
      "mataikhoan": this.cookieService.get('TK'),
    };
    if (this.thoigian && this.ngay && this.diadiem && this.noidung) {
      if (this.isupdate) {

        this.http.put("http://localhost:3000/trandau/" + this.id, data, this.httpOptions)
          .subscribe(
            data => {
              if (data) {
                this.info = "Cập nhật thành công";
                this.clearform();
              }

            },
            error => {

              console.log("xxxx", error['error']['text']);

            });
        this.ngOnInit();
      } else {
        //insert
        this.http.post("http://localhost:3000/trandau/", data, this.httpOptions)
          .subscribe(
            data => {

              this.clearform();

            },
            error => {

              console.log(error);

            });
        this.ngOnInit();
        this.info = "Thêm kèo thành công";
      }
    } else {
      this.info = "Mời bạn nhập đủ thông tin";
    }


  }
  delTB(id) {
    this.http.delete("http://localhost:3000/trandau/" + id, this.httpOptions)
      .subscribe(
        data => {
          console.log(data);
          this.info = "Đã xóa kèo";
          this.ngOnInit();
        },
        error => {

          console.log("xxxx", error['error']['text']);

        });

  }
}

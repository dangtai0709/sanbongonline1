import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-thongtindoibong',
  templateUrl: './thongtindoibong.component.html',
  styleUrls: ['./thongtindoibong.component.css']
})
export class ThongtindoibongComponent implements OnInit {
  protected info: string;
  protected tendoi: String;
  protected khuvuc: String;
  protected trinhdo: String;
  protected anh: String;
  protected timdoi: String;
  protected cosan: String;
  protected thoigian: String;
  protected gioithieu: String;
  protected trangthai: String;
  protected isupdate: Boolean;
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit() {
    this.isupdate = false;
    this.getdata();
  }
  getdata() {
    //+ this.cookieService.get('TK')
    this.http.get("http://localhost:3000/doibong/" + this.cookieService.get('TK')).subscribe(data => {
      console.log(data);
      if (data) {
        this.tendoi = data[0].tendoi;
        this.khuvuc = data[0].khuvuc;
        this.trinhdo = data[0].trinhdo;
        this.anh = data[0].anh;
        this.timdoi = data[0].timdoi;
        this.cosan = data[0].cosan;
        this.thoigian = data[0].thoigianthuongda;
        this.gioithieu = data[0].gioithieu;
        this.trangthai = data[0].trangthai;
        this.isupdate = true;
      }

    });
  }
  update() {
    //12  tendoi, trinhdo, anh, timdoi, cosan, thoigianthuongda, gioithieu, khuvuc
    if (!this.anh) {
      this.anh = "https://sas.edu.vn/wp-content/uploads/2018/05/thien-nhien.jpg";
    }
    if (!this.timdoi) {
      this.timdoi = "";
    }
    if (!this.cosan) {
      this.cosan = "";
    }
    if (!this.gioithieu) {
      this.gioithieu = "";
    }
    var data = {
      "mataikhoan": this.cookieService.get('TK'),
      "tendoi": this.tendoi,
      "khuvuc": this.khuvuc,
      "trinhdo": this.trinhdo,
      "anh": this.anh,
      "timdoi": this.timdoi,
      "cosan": this.cosan,
      "thoigianthuongda": this.thoigian,
      "gioithieu": this.gioithieu,
    };
console.log(data);
    if (this.tendoi && this.khuvuc && this.trinhdo && this.thoigian) {
      if (this.isupdate) {
        //update

        this.http.put("http://localhost:3000/doibong/" + this.cookieService.get('TK'), data, this.httpOptions)
          .subscribe(
            data => {
              this.info = "Cập nhật thành công";
            },
            error => {

              console.log("xxxx", error['error']['text']);

            });
      } else {
        //insert
        this.http.post("http://localhost:3000/doibong/", data, this.httpOptions)
          .subscribe(
            data => {



            },
            error => {

              console.log(error);

            });
        this.isupdate = true;
        this.info = "Tạo thành công đội bóng";
      }

    } else {
      this.info = " Bạn phải nhập đủ thông tin ";
    }
  }
}

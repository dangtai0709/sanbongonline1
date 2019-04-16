import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-quanlisan',
  templateUrl: './quanlisan.component.html',
  styleUrls: ['./quanlisan.component.css']
})
export class QuanlisanComponent implements OnInit {
  protected arrDS: object;

  protected anh: String;
  protected loaisan: String;
  protected tensan: String;
  protected thongtin: String;
  protected khuvuc: String;
  protected sosan: String;
  protected gia1: String;
  protected gia2: String;
  protected gia3: String;
  protected trangthai: String;
  protected info: String;
  protected isupdate:Boolean;
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit() {
    this.getdata();
    this.isupdate=false;
  }
  getdata() {

    this.http.get("http://localhost:3000/datsan/yeucaudatsan/" + this.cookieService.get('TK')).subscribe(data => {
      if (data) {

        this.arrDS = data;
      }
    });

    this.http.get("http://localhost:3000/sanbong/" + this.cookieService.get('TK')).subscribe(data => {
      if (data) {
        this.anh = data[0].anh;
        this.tensan = data[0].tensan;
        this.khuvuc = data[0].khuvuc;
        this.thongtin = data[0].thongtin;
        this.sosan = data[0].sosan;
        this.loaisan = data[0].loaisan;
        this.gia1 = data[0].gia1;
        this.gia2 = data[0].gia2;
        this.gia3 = data[0].gia3;
        this.trangthai = data[0].trangthai;
        this.isupdate=true;
      }
    });
  }
  delDS(id) {
    this.http.delete("http://localhost:3000/datsan/" + id, this.httpOptions)
      .subscribe(
        data => {
          console.log(data);
          this.getdata();
        },
        error => {

          console.log("xxxx", error['error']['text']);

        });

  }
  update() {
    if (!this.anh) {
      this.anh = "";
    }
    if (!this.thongtin) {
      this.thongtin = "";
    }
    var data = {
      "mataikhoan":this.cookieService.get('TK'),
      "anh": this.anh,
      "tensan": this.tensan,
      "khuvuc": this.khuvuc,
      "thongtin": this.thongtin,
      "sosan": this.sosan,
      "loaisan": this.loaisan,
      "gia1": this.gia1,
      "gia2": this.gia2,
      "gia3": this.gia3,
      
    };
    if (this.gia1 && this.gia2 && this.gia3 && this.loaisan && this.sosan && this.khuvuc && this.tensan) {
      if (this.isupdate) {
        //update

        this.http.put("http://localhost:3000/sanbong/" + this.cookieService.get('TK'), data, this.httpOptions)
          .subscribe(
            data => {
              this.info = "Cập nhật thành công";
            },
            error => {

              console.log("xxxx", error['error']['text']);

            });
      } else {
        //insert
        this.http.post("http://localhost:3000/sanbong/", data, this.httpOptions)
          .subscribe(
            data => {



            },
            error => {

              console.log("xxxx", error['error']['text']);

            });
this.isupdate=true;
        this.info = "Tạo thành công sân bóng";
      }
      
    } else {
      this.info = " Bạn phải nhập đủ thông tin ";
    }
  }
}

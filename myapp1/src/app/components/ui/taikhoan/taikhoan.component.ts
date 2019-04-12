import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-taikhoan',
  templateUrl: './taikhoan.component.html',
  styleUrls: ['./taikhoan.component.css']
})
export class TaikhoanComponent implements OnInit {

  protected sodienthoai: string;
  protected ten: string;
  protected anh: string;
  protected email: string;
  protected matkhau: string;
  protected info:string;

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit() {
    this.getdata();

  }


  getdata() {
    //+this.cookieService.get('TK')

    this.http.get("http://localhost:3000/taikhoan/" + this.cookieService.get('TK')).subscribe(data => {
      console.log(data);
      if (data) {
        this.sodienthoai = data[0].sodienthoai;
        this.ten = data[0].ten;
        this.email = data[0].email;
        this.anh = data[0].anh;
        this.matkhau = data[0].matkhau;
      } else {
        this.sodienthoai = this.cookieService.get('TK');
        this.ten = '';
        this.email = '';
        this.anh = '';
        this.matkhau = '';


      }

    });
  }
  update() {
    if(!this.email){
      this.email="";
    }
    if(!this.ten){
      this.ten="";
    }
    if(!this.anh){
      this.anh="";
    }
if(!this.matkhau){
  this.info="Bạn chưa nhập mật khẩu";
}else{
  var data = {
    "email": this.email,
    "matkhau": this.matkhau,
    "ten": this.ten,
    "anh": this.anh,

  };
  this.http.put("http://localhost:3000/taikhoan/" + this.cookieService.get('TK'), data, this.httpOptions)
    .subscribe(
      data => {
        this.info="Cập nhật thành công";
      this.getdata();

      },
      error => {

        console.log("xxxx", error['error']['text']);

      });
}
    
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  protected arrTB: object;
  protected data: object;
  protected sodienthoai: string;
  protected matkhau: string;
  protected dangnhap = false;
  public mataikhoan: object;
  protected err: string;
  protected admin = false;
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }
  ngOnInit() {
    this.http.get("http://localhost:3000/thongbao").subscribe(data => {
      console.log(data);
      this.arrTB = data;

    });
    this.checklogin();

  }
  login() {

    this.data = {
      "sodienthoai": this.sodienthoai,
      "matkhau": this.matkhau,
    };
    this.http.post("http://localhost:3000/taikhoan/login", this.data, this.httpOptions)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          if (data == '1') {

            this.cookieService.set('TK', this.sodienthoai);

            this.checklogin();
            this.router.navigate(['/quanli']);
          } else {
            this.err = "Kiểm tra số điện thoại và mật khẩu";
          }

        },
        error => {

          console.log("xxxx", error['error']['text']);

        });

  }
  loginadmin() {

    this.data = {
      "name": this.sodienthoai,
      "pass": this.matkhau,
    };
    this.http.post("http://localhost:3000/taikhoan/logina", this.data, this.httpOptions)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          if (data == '1') {
            this.admin = true;
            this.dangnhap = true;
            this.cookieService.set('TK', "ADMIN");
            this.router.navigate(['/admin']);
            

          } else {
            this.err = "Kiểm tra tên đăng nhập và mật khẩu";
          }

        },
        error => {

          console.log("xxxx", error['error']['text']);

        });

  }
  checklogin() {
    // kiem tra mataikhoan =null
    //  this.router;// lay duong dan hien tai
    //neu no la cac route quan li thi quay lai trang chu
    //nguoc lai
    var arrlink = [
      "http://localhost:4200/quanli",
      "http://localhost:4200/admin"
    ];
    console.log(this.cookieService.get('TK'));
    console.log(window.location.href);


    if (this.cookieService.get('TK') && !this.admin) {
      this.dangnhap = true;
      if (window.location.href == "http://localhost:4200/admin") {
        this.router.navigate(['/index']);
      }

    } else {
      this.dangnhap = false;
      if (arrlink.indexOf(window.location.href) != -1) {
        this.router.navigate(['/index']);
      }
    }




  }
  logout() {

    this.dangnhap = false;
    this.cookieService.deleteAll();
    this.router.navigate(['/index']);

  }
}

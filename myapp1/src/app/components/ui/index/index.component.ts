import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  protected sodienthoai:string;
  protected matkhau:string;
  protected ten:string;
  protected data: object;
  
  protected err:string;
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
   
  }
  taoTK() {
   
    this.data ={
     "sodienthoai":this.sodienthoai ,
     "matkhau":  this.matkhau,
     "ten":this.ten,
     };
   this.http.post("http://localhost:3000/taikhoan",this.data, this.httpOptions)
   .subscribe(
     data  => {
     console.log("POST Request is successful ", data);
     if(data=='1'){
      this.err="Đăng kí thành công !! Hãy đăng nhập ";
     }else{
       this.err="Kiểm tra số điện thoại !! Có thể đã tồn tại";
     }
     
     },
     error  => {
    
     console.log("xxxx", error['error']['text']);
     
     });
   }
}

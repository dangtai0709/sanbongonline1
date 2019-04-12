import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-thongbao',
  templateUrl: './thongbao.component.html',
  styleUrls: ['./thongbao.component.css']
})
export class ThongbaoComponent implements OnInit {
protected arrTB:object;
protected noidung:String;
protected info:String;
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
getdata(){
  this.http.get("http://localhost:3000/thongbao/"+this.cookieService.get('TK')).subscribe(data => {
    console.log(data);
    if(data){
      this.arrTB = data;
    }
    
  });
}
addTK(){
  if(this.noidung){
    var data = {
      "mataikhoan":this.cookieService.get('TK'),
      "noidung":this.noidung,
    };
    this.http.post("http://localhost:3000/thongbao/", data, this.httpOptions)
      .subscribe(
        data => {
          if(data=='1'){
            console.log("POST Request is successful ", data);
            this.getdata();
            this.info="Thông báo của bạn đã được đăng";
          }else{
            this.info="Đăng thông báo thất bại ";
          }
         
        },
        error => {
  
          console.log("xxxx", error['error']['text']);
  
        });
  }else{
    this.info="Bạn chưa nhập nội dung";
  }
 
}
delTB(id){
  this.http.delete("http://localhost:3000/thongbao/"+id, this.httpOptions)
  .subscribe(
    data => {
     console.log(data);
     this.info="Đã xóa thông báo";
     this.getdata();
    },
    error => {

      console.log("xxxx", error['error']['text']);

    });

}
}

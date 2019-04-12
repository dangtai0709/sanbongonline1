import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  protected thongke:object;
  protected top:object;
  protected arrTB:object;
  protected noidung:String;
  protected info:String;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getdata();
    this.arrTB=null;
  }
  getdata(){
    this.http.get("http://localhost:3000/thongke/").subscribe(data => {
     // console.log(data);
      if(data){
        var arr=[];
        for(var i=0; i<Object.keys(data).length;i++){
arr[i]=data[i].a;
        }
         this.thongke=arr;
      }
      
    });
    this.http.get("http://localhost:3000/thongke/top").subscribe(data => {
     // console.log(data);
      if(data){
       
   
         this.top=data;
      }
      
    });
    this.http.get("http://localhost:3000/thongbao/").subscribe(data => {
      console.log(data);
      if(data){
        this.arrTB = data;
      }
      
    });
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
  addTB(){
    if(this.noidung){
      var data = {
        "mataikhoan":"ADMIN",
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
              this.info="Đăng thông báo thất bại !! Không thể đăng quá nhiều thông báo trong một ngày";
            }
           
          },
          error => {
    
            console.log("xxxx", error['error']['text']);
    
          });
    }else{
      this.info="Bạn chưa nhập nội dung";
    }
   
  }
}

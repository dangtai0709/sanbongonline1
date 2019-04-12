import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-thunghiem',
  templateUrl: './thunghiem.component.html',
  styleUrls: ['./thunghiem.component.css']
})
export class ThunghiemComponent implements OnInit {
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  protected isupdate: Boolean;
  protected arrds:Object;
  protected thoigian:String;
  protected ngay:String;
  protected diadiem:String;
  protected noidung:String;
  protected info;String;
  protected id:String;
  constructor(private cookieService: CookieService,private http: HttpClient) { }

  ngOnInit() {
    this.isupdate = false;
    this.getdata();
  }
  getdata() {
    this.http.get("http://localhost:3000/trandau/ds/" + this.cookieService.get('TK')).subscribe(data => {
        console.log(data[0]);
    this.arrds=data;
    });
    
  }
  clearform(){
   this.thoigian="";
     this.ngay="";
    this.diadiem="";
     this.noidung="";
    this.isupdate=false;
  }
  getinfo(i,id){
    this.id=id;
    this.isupdate=true;
    this.thoigian=this.arrds[i].thoigian;
     this.ngay=this.arrds[i].ngay;
    this.diadiem=this.arrds[i].diadiem;
     this.noidung=this.arrds[i].noidung;
  }
  update() {
    
   
    var data = {
      "thoigian":this.thoigian.trim(),
      "ngay":this.ngay.trim(),
      "diadiem":this.diadiem.trim(),
      "noidung":this.noidung.trim(),
      "mataikhoan":this.cookieService.get('TK'),
    };

      if (this.isupdate) {

        this.http.put("http://localhost:3000/trandau/" + this.id, data, this.httpOptions)
          .subscribe(
            data => {
              this.info = "Cập nhật thành công";
              this.clearform();
            },
            error => {

              console.log("xxxx", error['error']['text']);

            });
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
       
        this.info = "Thêm kèo thành công";
      }
      this.ngOnInit();
    } 
    delTB(id){
      this.http.delete("http://localhost:3000/trandau/"+id, this.httpOptions)
      .subscribe(
        data => {
         console.log(data);
         this.info="Đã xóa kèo";
         this.ngOnInit();
        },
        error => {
    
          console.log("xxxx", error['error']['text']);
    
        });
    
    }
  }




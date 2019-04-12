import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
@Component({
  selector: 'app-quanlidatsan',
  templateUrl: './quanlidatsan.component.html',
  styleUrls: ['./quanlidatsan.component.css']
})
export class QuanlidatsanComponent implements OnInit {
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  protected arrds: object;
  protected info:String;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  ngOnInit() {
    this.getdata();

  }
    // getSB(id){
     
    //   this.http.get("http://localhost:3000/get/tensan/" +id).subscribe(data => {
    //     console.log(data[0].tensan+"xxx");
    //     this.tensan=data[0].tensan;
    //   });
    //   return this.tensan;
    // }
   


  getdata() {
    //+this.cookieService.get('TK')

    this.http.get("http://localhost:3000/datsan/" + this.cookieService.get('TK')).subscribe(abc => {
      // console.log(this.getSB(1));
this.arrds=abc;
    });
  }
delete(id){
  this.http.delete("http://localhost:3000/datsan/" + id, this.httpOptions)
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

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
 protected arrDB:any;
  constructor(private cookieService: CookieService,private http: HttpClient) { }

  ngOnInit() {
    this.getdata();
  }
  getdata(){
   
    this.http.get('http://localhost:3000/trandau').subscribe(data => {
      console.log(data);
      this.arrDB = data;

    });
   

  }
  delTB(id){
    this.http.delete("http://localhost:3000/trandau/"+id, this.httpOptions)
    .subscribe(
      data => {
      
       this.ngOnInit();
      },
      error => {
  
        console.log("xxxx", error['error']['text']);
  
      });
  
  }
}




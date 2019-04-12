import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-xacthuc',
  templateUrl: './xacthuc.component.html',
  styleUrls: ['./xacthuc.component.css']
})
export class XacthucComponent implements OnInit {
protected arrTK:object;
protected httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getdata();
  }
getdata(){
  this.http.get("http://localhost:3000/thongke/info").subscribe(data => {
     console.log(data);
    
        this.arrTK=data;
     
     
   });
}
DB(id,status){
  
  this.http.get("http://localhost:3000/thongke/xacthucDB/"+id+"/"+status, this.httpOptions)
  .subscribe(
    data => {
    
     this.getdata();
    },
    error => {

      console.log("xxxx", error['error']['text']);

    });

}
SB(id,status){
  console.log(id +"abc"+status)
  this.http.get("http://localhost:3000/thongke/xacthucSB/"+id+"/"+status, this.httpOptions)
  .subscribe(
    data => {
    
     this.getdata();
    },
    error => {

      console.log("xxxx", error['error']['text']);

    });

}
}

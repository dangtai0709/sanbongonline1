import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-timdoi',
  templateUrl: './timdoi.component.html',
  styleUrls: ['./timdoi.component.css']
})
export class TimdoiComponent implements OnInit {
protected arrtimdoi:Object;
  constructor(private http: HttpClient) { }

  protected link: string;
  ngOnInit() {
    this.getdata();
  }
  getdata() {
   
    var link = "http://localhost:3000/trandau/";
 
    this.http.get(link).subscribe(data => {
      console.log(data);
      this.arrtimdoi = data;
    });
   
    
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datsan',
  templateUrl: './datsan.component.html',
  styleUrls: ['./datsan.component.css']
})
export class DatsanComponent implements OnInit {
  protected arrSB: object;
 protected khuvuc='';
 protected ngay="";
  public url="http://localhost:3000/sanbong/";
  public link1=null;
 
  constructor(private http: HttpClient,private router:Router) { }

    ngOnInit() {
    var link="";
    
    link= this.url;
    if(this.link1){
      link+=this.link1;
    }
   this.http.get(link).subscribe(data => {
      console.log(data);
      this.arrSB = data;
    });
    
  }
  timkiem() {
    this.link1 = "?khuvuc="+this.khuvuc;
    this.ngOnInit();
    console.log(this.ngay);
  }
}

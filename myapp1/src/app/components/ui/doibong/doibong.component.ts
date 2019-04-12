import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doibong',
  templateUrl: './doibong.component.html',
  styleUrls: ['./doibong.component.css']
})
export class DoibongComponent implements OnInit {
  protected arrDB: object;
  protected khuvuc = '';
  public url = "http://localhost:3000/doibong/";
  
  public link1 = null;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    var link = "";
    var id = this.route.snapshot.params.id;
    
    if (id) {
      link = this.url + id;
    }
    if(!link) {
      link = this.url;
    }


    if (this.link1) {
      link += this.link1;
    }
   this.getdata(link);
  }
  getdata(link){
    console.log(link);
    this.http.get(link).subscribe(data => {
      console.log(data);
      this.arrDB = data;

    });
    this.link1 = null;

  }
  timkiem() {
    this.link1 = "?khuvuc=" + this.khuvuc;
    this.ngOnInit();

  }
}

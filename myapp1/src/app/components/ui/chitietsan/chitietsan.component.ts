import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-chitietsan',
  templateUrl: './chitietsan.component.html',
  styleUrls: ['./chitietsan.component.css']
})
export class ChitietsanComponent implements OnInit {
  protected arrSB: object;
  protected arrdadat: any;
  protected ngay: String;
  protected lienhe: String;
  protected nguoi: String;
  protected batdau: String;
  protected ghichu: String;
  protected ngay1: String;
  protected info: string;
  protected san:String;
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient, private route: ActivatedRoute, private cookieService: CookieService) { }
  protected link: string;
  ngOnInit() {
    this.getdata();
    this.ngay=this.ngay1=new Date().toISOString().slice(0, 10);
  }
  getdata() {
    this.lienhe = this.cookieService.get('TK');
    var id = this.route.snapshot.params.id;
    var link = "http://localhost:3000/sanbong/" + id;
    console.log(this.route.snapshot.params);
    this.http.get(link).subscribe(data => {
      //console.log(data[0].sosan);
      this.arrSB = data;
    });
    if (this.ngay) {
      this.link = "http://localhost:3000/sanbong/dadat/" + id + "/" + this.ngay;
    } else {
      this.link = "http://localhost:3000/sanbong/dadat/" + id;
    }

    this.http.get(this.link).subscribe(data => {

      var arr = [0,0,0,0];
      for (var i = 0; i < Object.keys(data).length; i++) {
        var sang = ["6h-7h", "7h-8h", "8h-9h", "9h-10h"];
        var chieu = ["14h-15h", "15h-16h", "16h-17h", "17h-18h"];
        var toi=["18h-19h", "19h-20h", "20h-21h", "21h-22h"];
        if (sang.indexOf(data[i]['batdau'])!=-1 ) {
          arr[1] += parseInt(data[i]['dadat']);
        }
        if (chieu.indexOf(data[i]['batdau'])!=-1) {
          arr[2] += parseInt(data[i]['dadat']);
        }
        if (toi.indexOf(data[i]['batdau'])!=-1) {
          arr[3] += parseInt(data[i]['dadat']);
        }
      }
     
      this.arrdadat = arr;

      
    });
  }
  changedate(ngay) {
    this.ngay = ngay;
    console.log(ngay);
    this.getdata();
  }
  book() {
    if (this.ngay1!=null && this.nguoi!=null && this.batdau!=null && this.lienhe !=null) {
      if (!this.ghichu) {
        this.ghichu = "";
      }
      var data = {
        "masanbong": this.arrSB[0].masanbong,
        "tennguoidat": this.nguoi,
        "ngay": this.ngay1,
        "batdau": this.batdau,
        "lienhe": this.lienhe,
        "ghichu": this.ghichu
      };
      this.http.post("http://localhost:3000/datsan/", data, this.httpOptions)
        .subscribe(
          data => {
            console.log(data);
            if (data != '1') {
              this.info = "Đặt sân thất bại !! Đặt vào khung giờ khác hoặc liên hệ với chủ sân";
            } else {
              this.info = "Đặt sân thành công";
            }

            // console.log(data);
            this.getdata();

          },
          error => {

            console.log("xxxx", error['error']['text']);

          });
    } else {
      this.info = "Yêu cầu nhập đủ thông tin";
    }

    //console.log(data);

  }

}

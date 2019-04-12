import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { IndexComponent } from './components/ui/index/index.component';
import { DoibongComponent } from './components/ui/doibong/doibong.component';
import { DatsanComponent } from './components/ui/datsan/datsan.component';
import { ChitietsanComponent } from './components/ui/chitietsan/chitietsan.component';
import { QuanliComponent } from './components/ui/quanli/quanli.component';
import { QuanlidatsanComponent } from './components/ui/quanlidatsan/quanlidatsan.component';
import { TaikhoanComponent } from './components/ui/taikhoan/taikhoan.component';
import { ThongtindoibongComponent } from './components/ui/thongtindoibong/thongtindoibong.component';
import { QuanlisanComponent } from './components/ui/quanlisan/quanlisan.component';
import { ThongbaoComponent } from './components/ui/thongbao/thongbao.component';
import { LoginadminComponent } from './components/ui/loginadmin/loginadmin.component';
import { AdminComponent } from './components/ui/admin/admin.component';
import { ThunghiemComponent } from './components/thunghiem/thunghiem.component';
import { ThongkeComponent } from './components/ui/thongke/thongke.component';
import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { XacthucComponent } from './components/ui/xacthuc/xacthuc.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TimdoiComponent } from './components/ui/timdoi/timdoi.component';
import { ThongbaotimdoiComponent } from './components/ui/thongbaotimdoi/thongbaotimdoi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    DoibongComponent,
    DatsanComponent,
    ChitietsanComponent,
    QuanliComponent,
    QuanlidatsanComponent,
    TaikhoanComponent,
    ThongtindoibongComponent,
    QuanlisanComponent,
    ThongbaoComponent,
    LoginadminComponent,
    AdminComponent,
    ThunghiemComponent,
    ThongkeComponent,
    XacthucComponent,
    TimdoiComponent,
    ThongbaotimdoiComponent,
   
    
    
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule, NgxPaginationModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

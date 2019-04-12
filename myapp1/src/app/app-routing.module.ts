import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/ui/index/index.component';
import { DoibongComponent } from './components/ui/doibong/doibong.component';
import { TimdoiComponent } from './components/ui/timdoi/timdoi.component';
import { DatsanComponent } from './components/ui/datsan/datsan.component';
import { ChitietsanComponent } from './components/ui/chitietsan/chitietsan.component';
import { QuanliComponent } from './components/ui/quanli/quanli.component';
import { LoginadminComponent } from './components/ui/loginadmin/loginadmin.component';
import { AdminComponent } from './components/ui/admin/admin.component';
import { ThunghiemComponent } from './components/thunghiem/thunghiem.component';
const routes: Routes = [
  { path: 'thunghiem', component: ThunghiemComponent },
  { path: 'index', component: IndexComponent },
  { path: 'doibong', component: DoibongComponent },
  { path: 'thongtindoibong/:id', component: DoibongComponent },
  { path: 'timdoi', component: TimdoiComponent },
  { path: 'datsan', component: DatsanComponent },
  { path: 'chitiet/:id', component: ChitietsanComponent },
  { path: 'quanli', component: QuanliComponent },
  { path: 'login', component: LoginadminComponent },
  { path: 'admin', component: AdminComponent },

  {
    path: '', component: IndexComponent

  }, {
    path: '**', component: IndexComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

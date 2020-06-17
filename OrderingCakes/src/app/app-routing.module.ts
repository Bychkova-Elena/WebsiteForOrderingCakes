import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormReadyComponent } from './form-ready/form-ready.component';
import { FormOwnComponent } from './form-own/form-own.component';
import { CakeInfoComponent } from './cake-info/cake-info.component';
import { LoginComponent } from './login/login.component';
import { LoginWorkerComponent } from './worker/login-worker/login-worker.component';
import { CustomerFirstComponent } from './worker/worker-panel/customer-first/customer-first.component';
import { CustomerSecondComponent } from './worker/worker-panel/customer-second/customer-second.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminChangeComponent } from './admin-change/admin-change.component';
import { DashboardComponent } from './worker/worker-panel/dashboard/dashboard.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login-worker', component:LoginWorkerComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'admin-panel', component:AdminPanelComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'admin-change', component:AdminChangeComponent},
  {path:'customer-first', component:CustomerFirstComponent},
  {path:'customer-second', component:CustomerSecondComponent},                           
  {path:'main', component:MainComponent},                           /** ссылка на главную*/ 
  { path: 'form-ready/:id', component: FormReadyComponent },   /** Ссылка на форму заказа готовых тортов*/
  {path:'form-own', component:FormOwnComponent},               /** Ссылка на форму заказа тота по индивидуальным параметрам */ 
  {path:'cake-info/:id', component:CakeInfoComponent}          /** Ссылка на страницу с информацией по торту */ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

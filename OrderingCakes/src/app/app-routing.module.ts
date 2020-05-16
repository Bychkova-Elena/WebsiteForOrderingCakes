import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormReadyComponent } from './form-ready/form-ready.component';
import { FormOwnComponent } from './form-own/form-own.component';
import { CakeInfoComponent } from './cake-info/cake-info.component';


const routes: Routes = [
  {path:'', component:MainComponent},                           /** ссылка на главную*/ 
  { path: 'form-ready/:id', component: FormReadyComponent },   /** Ссылка на форму заказа готовых тортов*/
  {path:'form-own', component:FormOwnComponent},               /** Ссылка на форму заказа тота по индивидуальным параметрам */ 
  {path:'cake-info/:id', component:CakeInfoComponent}          /** Ссылка на страницу с информацией по торту */ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormReadyComponent } from './form-ready/form-ready.component';
import { FormOwnComponent } from './form-own/form-own.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  { path: 'form-ready/:id', component: FormReadyComponent },
  {path:'form-own', component:FormOwnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

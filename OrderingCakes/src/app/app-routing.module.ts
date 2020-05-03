import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormReadyComponent } from './form-ready/form-ready.component';
import { FormOwnComponent } from './form-own/form-own.component';
import { CakeInfoComponent } from './cake-info/cake-info.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  { path: 'form-ready/:id', component: FormReadyComponent },
  {path:'form-own', component:FormOwnComponent},
  {path:'cake-info/:id', component:CakeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

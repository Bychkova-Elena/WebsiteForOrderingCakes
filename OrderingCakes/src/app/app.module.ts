import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormReadyComponent } from './form-ready/form-ready.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { FormOwnComponent } from './form-own/form-own.component';
import { CakeInfoComponent } from './cake-info/cake-info.component';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginWorkerComponent } from './worker/login-worker/login-worker.component';
import { CustomerFirstComponent } from './worker/worker-panel/customer-first/customer-first.component';
import { WorkerHeaderComponent } from './worker/worker-panel/worker-header/worker-header.component';
import { CustomerSecondComponent } from './worker/worker-panel/customer-second/customer-second.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminChangeComponent } from './admin-change/admin-change.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { DashboardComponent } from './worker/worker-panel/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormReadyComponent,
    FormOwnComponent,
    CakeInfoComponent,
    LoginComponent,
    LoginWorkerComponent,
    CustomerFirstComponent,
    WorkerHeaderComponent,
    CustomerSecondComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    AdminChangeComponent,
    FilterPipe,
    SortPipe,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    TextMaskModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

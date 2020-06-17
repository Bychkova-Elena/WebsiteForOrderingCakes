import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  formLogin: FormGroup;
  disabled = false;
  email;
  password;
  constructor( private router:Router) { 
  }

    async ngOnInit() {
    this.formLogin = new FormGroup({                              
      email: new FormControl(this.email, [Validators.required,  Validators.email]),
      password: new FormControl(this.password, [Validators.required]),
      });
  }

  async onSubmit() { 
    if (this.formLogin.value.email== "admin@gmail.com" && this.formLogin.value.password=="admin"){
      this.router.navigate(['/admin-panel']);
    }
    else {
      alert("Неправильно ввдены данные");
    }

}
}


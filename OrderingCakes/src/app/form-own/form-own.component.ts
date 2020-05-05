import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-own',
  templateUrl: './form-own.component.html',
  styleUrls: ['./form-own.component.css']
})
export class FormOwnComponent implements OnInit {
  name_customer = "";
  address = "";
  tel="";
  email="";
  corz="";
  filling="";
  weight="";
  tiers="";
  wishes="";
  date="";

  constructor(private router:Router,
    public db:AngularFireDatabase) { 
    }

  ngOnInit() {
  }
  onSubmit(){                           //Проверяет наличие данных в input и отправляет данные в БД
    if(this.name_customer=="" || this.address=="" || this.tel == "" || this.email=="" || this.date=="")
    alert('Необходимо заполнить все необходимые поля формы!');
    else{
    this.db.list('customers').push({name_customer:this.name_customer, address:this.address, tel:this.tel, email:this.email, 
      corz:this.corz, filling:this.filling, weight:this.weight, tiers:this.tiers, wishes:this.wishes, date:this.date});
    alert('Ваш заказ успешно отправлен! Наш администратор скоро с Вами свяжется!');
    this.router.navigate(['']);
      }
    }
    public mask = [8,'(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];  // Маска для телефона
}

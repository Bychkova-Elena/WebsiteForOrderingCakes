import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-own',
  templateUrl: './form-own.component.html',
  styleUrls: ['./form-own.component.css']
})
export class FormOwnComponent implements OnInit {
  formOwn: FormGroup;
  disabled = false;

  constructor(private router:Router,
    public db:AngularFireDatabase) { 
    }

    async ngOnInit() {
      this.formOwn = new FormGroup({                              // создание новой формы
      name_customer: new FormControl( { value: '', disabled: this.disabled } , [Validators.required]),
      address: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      tel: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      email: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.email]),
      corz:new FormControl({value: '', disabled: this.disabled}),
      filling: new FormControl ({value: '', disabled: this.disabled}),
      weight: new FormControl ({value: '', disabled: this.disabled}),
      tiers: new FormControl ({value: '', disabled: this.disabled}),
      wishes: new FormControl ({value: '', disabled: this.disabled}),
      date: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      });
      }

onSubmit(){
  this.db.list('customers').push( this.formOwn.value);                           //Заносим данные с формы в БД
  alert('Ваш заказ успешно отправлен! Наш администратор скоро с Вами свяжется!');  // Выводим сообщение об успешной отправке формы
  this.router.navigate(['/']);                                                     // Перенаправляемся на главную страницу
  }
  public mask = [8,'(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]; //Маска для корректного ввода телефона
}
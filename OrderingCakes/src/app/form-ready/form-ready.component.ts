import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeModule } from '../cake/cake.module';
import { CakesService } from '../services/cakes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-form-ready',
  templateUrl: './form-ready.component.html',
  styleUrls: ['./form-ready.component.css']
})
export class FormReadyComponent implements OnInit {
  formReady: FormGroup;
  cake;
  id:number;
  disabled = false;
  constructor(  private activeRoute:ActivatedRoute,
    private router:Router,
    private CakesService:CakesService,
    public db:AngularFireDatabase
    ) { 
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;
      
    });
  } 

  async ngOnInit() {
    this.cake = await this.CakesService.getById(this.id);          // Получаем торт по id
    this.formReady = new FormGroup({                              // создание новой формы
    cake_name: new FormControl( { value: this.cake.name, disabled: this.disabled }),
    cake_price: new FormControl( { value: this.cake.price, disabled: this.disabled }),
    name_customer: new FormControl( { value: '', disabled: this.disabled } , [Validators.required]),
    address: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    tel: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    email: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.email]),
    date: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
    });
    }
onSubmit(){
  this.db.list('customers').push( this.formReady.value);                           //Заносим данные с формы в БД
  alert('Ваш заказ успешно отправлен! Наш администратор скоро с Вами свяжется!');  // Выводим сообщение об успешной отправке формы
  this.router.navigate(['/']);                                                     // Перенаправляемся на главную страницу
  }
  public mask = [8,'(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]; //Маска для корректного ввода телефона
}

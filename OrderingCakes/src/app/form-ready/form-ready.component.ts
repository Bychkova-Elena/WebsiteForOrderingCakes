import { Component, OnInit } from '@angular/core';
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
  cakes;
  id:number;
  name_customer = "";
  address = "";
  tel="";
  email="";
  date="";
  constructor(  private activeRoute:ActivatedRoute,
    private router:Router,
    private CakesService:CakesService,
    public db:AngularFireDatabase
    ) { 
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;
      
    });
  } 

  ngOnInit() {
    this.updateData();
  }
  async updateData() {                  // Получаем список тортов и заносим в 'cakes'

    try
    {
      this.cakes = await this.CakesService.getAll();

    } catch (e)
    {
      console.log(e);
    }
  }

  onSubmit(){                                                //Проверяет наличие данных в input и отправляет данные в БД
    if(this.name_customer=="" || this.address=="" || this.tel == "" || this.email=="" || this.date=="")
     alert('Необходимо заполнить все необходимые поля формы!');
    else{
this.db.list('customers').push({name_cake:this.cakes[this.id-1].name, price:this.cakes[this.id-1].price, name_customer:this.name_customer, address:this.address, tel:this.tel, email:this.email, date:this.date});
alert('Ваш заказ успешно отправлен! Наш администратор скоро с Вами свяжется!');
this.router.navigate(['']);
  }
}
public mask = [8,'(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/]; //Маска для корректного ввода телефона
}

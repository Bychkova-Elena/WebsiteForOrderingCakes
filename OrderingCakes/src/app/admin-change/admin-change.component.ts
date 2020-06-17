import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CakesService } from '../services/cakes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-change',
  templateUrl: './admin-change.component.html',
  styleUrls: ['./admin-change.component.css']
})
export class AdminChangeComponent implements OnInit {
  formAdd: FormGroup;
  cakes;
  id:number;
  disabled = false;
  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private CakesService:CakesService){

  }
  ngOnInit() {
    this.updateData();
    this.formAdd = new FormGroup({                              /**создание новой формы для заказа тортов из списка готовых */ 
      name: new FormControl( { value: '', disabled: this.disabled }, [Validators.required]),
      picture: new FormControl( { value: '', disabled: this.disabled }),
      info: new FormControl( { value: '', disabled: this.disabled } , [Validators.required]),
      price: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
      });


  }
  async updateData() {                  /** Получаем все торты, заносим их в переменную 'cakes'*/ 

    try
    {
      this.cakes = await this.CakesService.getAll();

    } catch (e)
    {
      console.log(e);
    }
  }
  onSubmit(){    
    if (this.id== null){
         this.CakesService.postNotes(this.formAdd.value);
    }
    else {
      this.CakesService.putById(this.id, this.formAdd.value);
    }
         this.updateData(); 
         this.formAdd = new FormGroup({                              /**создание новой формы для заказа тортов из списка готовых */ 
          name: new FormControl( { value: '', disabled: this.disabled }, [Validators.required]),
          picture: new FormControl( { value: '', disabled: this.disabled }),
          info: new FormControl( { value: '', disabled: this.disabled } , [Validators.required]),
          price: new FormControl({ value: '', disabled: this.disabled }, [Validators.required]),
          });
    
    }

    delete(id:number) {
      console.log(id);
      this.CakesService.deleteById(id);
      this.updateData(); 
    }

    edit(cake){
      console.log(cake);
      this.formAdd = new FormGroup({                              /**создание новой формы для заказа тортов из списка готовых */ 
        name: new FormControl( { value: cake.name, disabled: this.disabled }, [Validators.required]),
        picture: new FormControl( { value: cake.picture, disabled: this.disabled }),
        info: new FormControl( { value: cake.info, disabled: this.disabled } , [Validators.required]),
        price: new FormControl({ value: cake.price, disabled: this.disabled }, [Validators.required]),
        });
        this.id = cake.id;
    }
}

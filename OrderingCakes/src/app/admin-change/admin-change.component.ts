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
  disabled = false;
  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private CakesService:CakesService){

  }
  ngOnInit() {
    this.updateData();
    this.formAdd = new FormGroup({                              /**создание новой формы для заказа тортов из списка готовых */ 
      name: new FormControl( { value: '', disabled: this.disabled }, [Validators.required]),
      picture: new FormControl( { value: '', disabled: this.disabled }, [Validators.required]),
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
console.log(this.formAdd.value);
         this.CakesService.postNotes(this.formAdd.value);
         this.router.navigate(['/admin-change']); 
      
    }
}

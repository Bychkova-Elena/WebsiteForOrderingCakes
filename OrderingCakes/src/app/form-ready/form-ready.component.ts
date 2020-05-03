import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeModule } from '../cake/cake.module';
import { CakesService } from '../services/cakes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-form-ready',
  templateUrl: './form-ready.component.html',
  styleUrls: ['./form-ready.component.css']
})
export class FormReadyComponent implements OnInit {
  FormReady:FormGroup;
  disabled:false;
  cakes;
  id:number;

  items:Observable<any[]>;
  // name_customer = "";
  // address = "";
  // tel="";
  // email="";
  // date="";
  itemValue="";
  constructor(  private activeRoute:ActivatedRoute,
    private router:Router,
    private CakesService:CakesService,
    public db:AngularFireDatabase
    ) { 
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;
      
    });
    this.items = db.list('items').valueChanges();
  } 

  ngOnInit() {
    this.updateData();
    this.FormReady = new FormGroup({
      name: new FormControl({value:"", disabled:this.disabled}, Validators.required),
      address:new FormControl({value:"", disabled:this.disabled}, Validators.required),
      tel:new FormControl({value:"", disabled:this.disabled}, Validators.required),
      email:new FormControl({value:"", disabled:this.disabled}, Validators.email),
      date:new FormControl({value:"", disabled:this.disabled}, Validators.required)
    });
  }
  async updateData() {

    try
    {
      this.cakes = await this.CakesService.getAll();

    } catch (e)
    {
      console.log(e);
    }
  }

//   onSubmit(){
// this.db.list('customers').push({name_customer:this.name_customer, address:this.address, tel:this.tel, email:this.email, date:this.date});
// this.name_customer="";
// this.address="";
// this.tel="";
// this.email="";
// this.date="";
//   }
onSubmit(){
  this.db.list('items').push({content:this.itemValue});
  this.itemValue="";
}
}

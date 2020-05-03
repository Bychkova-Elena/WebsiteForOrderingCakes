import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CakeModule { 
     id?:number;
     name:string;
     picture:string;
     info:string;
     price:string
    // constructor(id:number, name:string, picture:string, info:string, price:string){
    //   this.id = id;
    //   this.name = name;
    //   this.picture = picture
    //   this.info = info;
    //   this.price = price;
    // }
}

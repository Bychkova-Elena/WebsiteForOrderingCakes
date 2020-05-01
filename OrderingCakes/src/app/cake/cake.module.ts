import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CakeModule { 
    public id:number;
    public name:string;
    public info:string;
    public hover:string;
    constructor(id:number, name:string, info:string, hover:string){
      this.id = id;
      this.name = name;
      this.info = info;
      this.hover = hover;
    }
}

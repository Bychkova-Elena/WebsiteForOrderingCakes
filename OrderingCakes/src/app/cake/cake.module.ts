import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CakeModule { /** Интерфейс, отображающий строки списка готовых тортов.
                                 Торты хранятся в файле db.json*/
     id?:number;
     name:string;
     picture:string;
     info:string;
     price:string
}

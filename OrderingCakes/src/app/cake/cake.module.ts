import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringifyOptions } from 'querystring';

export interface CakeModule { /** Интерфейс, отображающий строки списка готовых тортов.
                                 Торты хранятся в файле db.json*/
     id?:number;
     name:string;
     picture:string;
     info:string;
     price:string
}

export interface customerFirst { 
     
id?:number;
address:string;
cake_name:string;
cake_price:string;
date:string;
email:string;
name_customer:string;
tel:string;
}

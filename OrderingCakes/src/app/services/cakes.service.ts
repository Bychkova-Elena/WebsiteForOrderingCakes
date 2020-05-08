import { Injectable } from '@angular/core';
import { API } from './API';
import { HttpClient } from '@angular/common/http';
import { CakeModule } from '../cake/cake.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakesService extends API {
  url="cakes";                               //массив объектов в db.json
  constructor(public httpClient: HttpClient) { 
    super(httpClient)
  }
  getAll() {                              //Получить все торты

    return this.get(this.url).toPromise();
  }

  getById(id: number) {                   // Получить торт по id

    return this.get(`${this.url}/${id}`).toPromise();
  }

}

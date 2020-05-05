import { Injectable } from '@angular/core';
import { API } from './API';
import { HttpClient } from '@angular/common/http';

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

}

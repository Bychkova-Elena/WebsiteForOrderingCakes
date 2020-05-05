import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class API {

  private baseUrl = "http://localhost:3000/"; //Адрес api


  constructor(public httpClient: HttpClient) { }

  private getUrl(url:string) { // метод для формирования строки запроса
    return this.baseUrl + url;
  }

  public get(url: string) {

    return this.httpClient.get (this.getUrl(url));    //метод для создания get запроса. Метод будет
    //возвращать observable, который мы в дальнейшем переделаем в promise для удобства
    //использования.
  }

  public post(url: string, data) { // для занесения

    return this.httpClient.post (this.getUrl(url), data);
  }

  public put(url: string, data) { // редактирование

    return this.httpClient.put (this.getUrl(url), data);
  }

  public delete(url: string) { // удаление

    return this.httpClient.delete (this.getUrl(url));
  }
}
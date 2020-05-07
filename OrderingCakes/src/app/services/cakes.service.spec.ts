import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CakesService } from './cakes.service';

const mockData = [
  {
    "id":1,
    "name":"Фруктовый",
    "picture":"/assets/img/cake1.png",
    "info":"Информация о торте",
    "price":"1000 руб."
  },
  {
    "id":2,
    "name":"Шоколадный",
    "picture":"/assets/img/cake2.png",
    "info":"Информация о торте",
    "price":"800 руб."
  }
] 

describe('CakesService', () => {

     
  let service;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [CakesService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });
 
  beforeEach(inject([CakesService], s => {
    service = s;
  }));
   
   
    beforeEach(() => {
      this.mockCakes = [...mockData];
      this.mockCake = this.mockCakes[0];
      this.mockId = this.mockCake.id;
    });
   
    afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
    });
   




  it('should be created', () => {
    const service: CakesService = TestBed.get(CakesService);
    expect(service).toBeTruthy();
  });
 
    it('should return mock cakes', () => {
      service.getAll().subscribe(
        cakes => expect(cakes.length).toEqual("2"),
        fail
      );
    });
  });




import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CakesService } from './cakes.service';
import { CakeModule } from '../cake/cake.module';


describe('CakesService', () => {
  let cakesService: CakesService;
  let httpTestingController:HttpTestingController;

 
  beforeEach(() => {
  TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [ 
      CakesService, HttpClient
    ]
  });
      httpTestingController = TestBed.get(HttpTestingController);
      cakesService = TestBed.get(CakesService);
});

afterEach(() =>{
httpTestingController.verify();
});
  

  it('should be created', () => {
    const service: CakesService = TestBed.get(CakesService);
    expect(service).toBeTruthy();
  });
 
    it('should retrieve all cakes', () => {
      const dummyCakes:CakeModule[] = [
        {id:1, name:"Фруктовый", picture:"/assets/img/cake1.png", info:"Информация о торте", price:"1000 руб."},
        {id:2, name:"Шоколадный", picture:"/assets/img/cake2.png", info:"Информация о торте", price:"800 руб."},
      ];
      cakesService.getAll().then(cakes =>{
        expect(cakes).toEqual(dummyCakes);
      });
      const request = httpTestingController.expectOne(`http://localhost:3000/${cakesService.url}`);
      expect(request.request.method).toBe('GET');
      request.flush(dummyCakes);
    });


    it('should retrieve cake by ID', () => {
      const dummyCake:CakeModule[] = [
        {id:1, name:"Фруктовый", picture:"/assets/img/cake1.png", info:"Информация о торте", price:"1000 руб."}
      ];
      const id = 1;
      cakesService.getById(id).then(cake =>{
        expect(cake).toEqual(dummyCake);
      });
      const request = httpTestingController.expectOne(`http://localhost:3000/${cakesService.url}/${id}`);
      expect(request.request.method).toBe('GET');
      request.flush(dummyCake);
    });
  });




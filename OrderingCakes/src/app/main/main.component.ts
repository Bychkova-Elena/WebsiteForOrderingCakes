import { Component, OnInit, Input } from '@angular/core';
import { CakeModule } from '../cake/cake.module';
import { Router, ActivatedRoute } from '@angular/router';
import { CakesService } from '../services/cakes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cakes;
  next:boolean = false; 
  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private CakesService:CakesService){

  }
  ngOnInit() {
    this.updateData();
  }
  async updateData() {                  // Получаем все торты, заносим их в 'cakes'

    try
    {
      this.cakes = await this.CakesService.getAll();

    } catch (e)
    {
      console.log(e);
    }
  }
    onNext(){                /*Меняет значение параметра next на противоположное. 
                               Используется при выводе оставшихся тортов, при нажатии на кнопку "показать ещё" */
    this.next = !this.next;
    return false;
  }
}


  
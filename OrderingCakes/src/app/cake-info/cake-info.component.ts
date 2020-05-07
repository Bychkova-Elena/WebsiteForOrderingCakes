import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CakesService } from '../services/cakes.service';

@Component({
  selector: 'app-cake-info',
  templateUrl: './cake-info.component.html',
  styleUrls: ['./cake-info.component.css']
})
export class CakeInfoComponent implements OnInit {
  id:number;
  cake;

  constructor(private activeRoute:ActivatedRoute,
    private CakesService:CakesService) {
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;
      
    });
   }

   async ngOnInit() {
    this.cake = await this.CakesService.getById(this.id);          // Получаем торт по id
  }


}

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
  cakes;

  constructor(private activeRoute:ActivatedRoute,
    private CakesService:CakesService) {
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;
      
    });
   }

  ngOnInit() {
    this.updateData();
  }
  async updateData() {                                // Получаем все торты, заносим их в 'cakes'

    try
    {
      this.cakes = await this.CakesService.getAll();

    } catch (e)
    {
      console.log(e);
    }
  }


}

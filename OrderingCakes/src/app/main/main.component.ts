import { Component, OnInit } from '@angular/core';
import { CakeModule } from '../cake/cake.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cakes: CakeModule[] = [];
  next:boolean = false;
  constructor(){
      this.cakes.push(
        new CakeModule(1, '/assets/img/cake1.png', 'Информация о торте', '/assets/img/cake1_h.png'),
        new CakeModule(2, '/assets/img/cake1.png', 'Информация о торте','/assets/img/cake1_h.png'),
        new CakeModule(3, '/assets/img/cake1.png', 'Информация о торте', '/assets/img/cake1_h.png'),
        new CakeModule(4, '/assets/img/cake1.png', 'Информация о торте', '/assets/img/cake1_h.png'),
        new CakeModule(5, '/assets/img/cake1.png', 'Информация о торте', '/assets/img/cake1_h.png'));

  }
  ngOnInit() {
  }
  onNext(){
    this.next = !this.next;
    return false;
  }
}

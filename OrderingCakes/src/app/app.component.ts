import { Component } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/analytics';
import "firebase/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Заказ домашних тортов от Павловых';


  
  ngOnInit() {
    firebase.analytics()
   }


}

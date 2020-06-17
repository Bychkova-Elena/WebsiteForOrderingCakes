import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-customer-second',
  templateUrl: './customer-second.component.html',
  styleUrls: ['./customer-second.component.css']
})
export class CustomerSecondComponent implements OnInit {
  customerSecond : any[];
  constructor(db:AngularFireDatabase) { 
    db.list('/customers/customerSecond').valueChanges().subscribe(customerSecond => {
      this.customerSecond = customerSecond;
      console.log(this.customerSecond);
    });
  }

  ngOnInit() {
  }

}

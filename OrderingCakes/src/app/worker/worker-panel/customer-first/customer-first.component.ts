import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { customerFirst } from 'src/app/cake/cake.module';

@Component({
  selector: 'app-customer-first',
  templateUrl: './customer-first.component.html',
  styleUrls: ['./customer-first.component.css']
})
export class CustomerFirstComponent implements OnInit {
  customerFirst:any[];

  constructor(db:AngularFireDatabase) { 
    db.list('/customers/customerFirst').valueChanges().subscribe(customerFirst => {
      this.customerFirst = customerFirst;
      console.log(this.customerFirst);
    });
  }


  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFirstComponent } from './customer-first.component';

describe('CustomerFirstComponent', () => {
  let component: CustomerFirstComponent;
  let fixture: ComponentFixture<CustomerFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

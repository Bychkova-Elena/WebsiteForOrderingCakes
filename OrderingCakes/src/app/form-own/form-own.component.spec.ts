import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOwnComponent } from './form-own.component';

describe('FormOwnComponent', () => {
  let component: FormOwnComponent;
  let fixture: ComponentFixture<FormOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

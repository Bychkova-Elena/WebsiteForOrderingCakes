import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReadyComponent } from './form-ready.component';

describe('FormReadyComponent', () => {
  let component: FormReadyComponent;
  let fixture: ComponentFixture<FormReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should create form with email', () => {
//     expect(component.form.contains('email')).toBe(true);
// });
// it ('should be valid email', () => {
//     const control = component.form.get('email');
//     control.setValue('example@');
//     expect(control.valid).toBeFalsy();
// });

});

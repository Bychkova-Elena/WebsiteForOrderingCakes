import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOwnComponent } from './form-own.component';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';

describe('FormOwnComponent', () => {
  let component: FormOwnComponent;
  let fixture: ComponentFixture<FormOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterModule, RouterTestingModule, HttpClientTestingModule, TextMaskModule, FormsModule, ReactiveFormsModule, AngularFireDatabaseModule, AngularFireModule,  AngularFireModule.initializeApp(environment.firebase)],
      providers:[HttpClient],
      declarations: [ FormOwnComponent, HeaderComponent ]
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
  
  it('should create form with email', () => {
    expect(component.formOwn.contains('email')).toBe(true);
});
it ('should be valid email', () => {
    const control = component.formOwn.get('email');
    control.setValue('lena12000');
    expect(control.valid).toBeFalsy();
});
});

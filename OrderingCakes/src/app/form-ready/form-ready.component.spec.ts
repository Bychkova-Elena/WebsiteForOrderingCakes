import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormReadyComponent } from './form-ready.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';

describe('FormReadyComponent', () => {
  let component: FormReadyComponent;
  let fixture: ComponentFixture<FormReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReadyComponent, HeaderComponent, FooterComponent ],
      imports: [],
      providers:[HttpClient],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

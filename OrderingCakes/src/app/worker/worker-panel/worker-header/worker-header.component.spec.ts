import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerHeaderComponent } from './worker-header.component';

describe('WorkerHeaderComponent', () => {
  let component: WorkerHeaderComponent;
  let fixture: ComponentFixture<WorkerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

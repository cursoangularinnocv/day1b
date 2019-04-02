import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDisplayerComponent } from './employee-displayer.component';

describe('EmployeeDisplayerComponent', () => {
  let component: EmployeeDisplayerComponent;
  let fixture: ComponentFixture<EmployeeDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

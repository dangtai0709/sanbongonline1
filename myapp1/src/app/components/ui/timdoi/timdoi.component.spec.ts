import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimdoiComponent } from './timdoi.component';

describe('TimdoiComponent', () => {
  let component: TimdoiComponent;
  let fixture: ComponentFixture<TimdoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimdoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimdoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

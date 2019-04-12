import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietsanComponent } from './chitietsan.component';

describe('ChitietsanComponent', () => {
  let component: ChitietsanComponent;
  let fixture: ComponentFixture<ChitietsanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietsanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

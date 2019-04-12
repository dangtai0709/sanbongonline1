import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatsanComponent } from './datsan.component';

describe('DatsanComponent', () => {
  let component: DatsanComponent;
  let fixture: ComponentFixture<DatsanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatsanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

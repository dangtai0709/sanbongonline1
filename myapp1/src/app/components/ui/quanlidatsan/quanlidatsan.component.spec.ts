import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlidatsanComponent } from './quanlidatsan.component';

describe('QuanlidatsanComponent', () => {
  let component: QuanlidatsanComponent;
  let fixture: ComponentFixture<QuanlidatsanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlidatsanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlidatsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

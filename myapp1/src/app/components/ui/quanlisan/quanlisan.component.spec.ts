import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlisanComponent } from './quanlisan.component';

describe('QuanlisanComponent', () => {
  let component: QuanlisanComponent;
  let fixture: ComponentFixture<QuanlisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

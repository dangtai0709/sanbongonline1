import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanliComponent } from './quanli.component';

describe('QuanliComponent', () => {
  let component: QuanliComponent;
  let fixture: ComponentFixture<QuanliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

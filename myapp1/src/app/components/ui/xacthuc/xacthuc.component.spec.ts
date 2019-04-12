import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XacthucComponent } from './xacthuc.component';

describe('XacthucComponent', () => {
  let component: XacthucComponent;
  let fixture: ComponentFixture<XacthucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XacthucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XacthucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoibongComponent } from './doibong.component';

describe('DoibongComponent', () => {
  let component: DoibongComponent;
  let fixture: ComponentFixture<DoibongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoibongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoibongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

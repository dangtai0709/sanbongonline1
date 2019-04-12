import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongbaotimdoiComponent } from './thongbaotimdoi.component';

describe('ThongbaotimdoiComponent', () => {
  let component: ThongbaotimdoiComponent;
  let fixture: ComponentFixture<ThongbaotimdoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongbaotimdoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongbaotimdoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

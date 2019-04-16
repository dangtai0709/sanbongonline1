import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachtrandauComponent } from './danhsachtrandau.component';

describe('DanhsachtrandauComponent', () => {
  let component: DanhsachtrandauComponent;
  let fixture: ComponentFixture<DanhsachtrandauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachtrandauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachtrandauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtindoibongComponent } from './thongtindoibong.component';

describe('ThongtindoibongComponent', () => {
  let component: ThongtindoibongComponent;
  let fixture: ComponentFixture<ThongtindoibongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtindoibongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtindoibongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

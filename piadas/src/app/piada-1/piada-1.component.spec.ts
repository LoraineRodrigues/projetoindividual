import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piada1Component } from './piada-1.component';

describe('Piada1Component', () => {
  let component: Piada1Component;
  let fixture: ComponentFixture<Piada1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piada1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piada1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Market.ComponentComponent } from './market.component.component';

describe('Market.ComponentComponent', () => {
  let component: Market.ComponentComponent;
  let fixture: ComponentFixture<Market.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Market.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Market.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

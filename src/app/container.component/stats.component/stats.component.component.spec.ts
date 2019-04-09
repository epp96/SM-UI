import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stats.ComponentComponent } from './stats.component.component';

describe('Stats.ComponentComponent', () => {
  let component: Stats.ComponentComponent;
  let fixture: ComponentFixture<Stats.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stats.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stats.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

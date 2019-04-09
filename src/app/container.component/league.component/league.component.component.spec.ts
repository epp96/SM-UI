import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { League.ComponentComponent } from './league.component.component';

describe('League.ComponentComponent', () => {
  let component: League.ComponentComponent;
  let fixture: ComponentFixture<League.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ League.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(League.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

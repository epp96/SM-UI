import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Team.ComponentComponent } from './team.component.component';

describe('Team.ComponentComponent', () => {
  let component: Team.ComponentComponent;
  let fixture: ComponentFixture<Team.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Team.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Team.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

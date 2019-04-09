import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav.ComponentComponent } from './nav.component.component';

describe('Nav.ComponentComponent', () => {
  let component: Nav.ComponentComponent;
  let fixture: ComponentFixture<Nav.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nav.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

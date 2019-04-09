import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Container.ComponentComponent } from './container.component.component';

describe('Container.ComponentComponent', () => {
  let component: Container.ComponentComponent;
  let fixture: ComponentFixture<Container.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Container.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Container.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

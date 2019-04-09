import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Root.ComponentComponent } from './root.component.component';

describe('Root.ComponentComponent', () => {
  let component: Root.ComponentComponent;
  let fixture: ComponentFixture<Root.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Root.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Root.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

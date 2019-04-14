import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtasktodoapp2Component } from './addtasktodoapp2.component';

describe('Addtasktodoapp2Component', () => {
  let component: Addtasktodoapp2Component;
  let fixture: ComponentFixture<Addtasktodoapp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtasktodoapp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtasktodoapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

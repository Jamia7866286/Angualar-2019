import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDataFormComponent } from './city-data-form.component';

describe('CityDataFormComponent', () => {
  let component: CityDataFormComponent;
  let fixture: ComponentFixture<CityDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

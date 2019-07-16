import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDataListComponent } from './city-data-list.component';

describe('CityDataListComponent', () => {
  let component: CityDataListComponent;
  let fixture: ComponentFixture<CityDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicDetailsComponent } from './demographic-details.component';

describe('DemographicDetailsComponent', () => {
  let component: DemographicDetailsComponent;
  let fixture: ComponentFixture<DemographicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemographicDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

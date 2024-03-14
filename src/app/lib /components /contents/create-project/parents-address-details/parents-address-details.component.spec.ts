import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsAddressDetailsComponent } from './parents-address-details.component';

describe('ParentsAddressDetailsComponent', () => {
  let component: ParentsAddressDetailsComponent;
  let fixture: ComponentFixture<ParentsAddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsAddressDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

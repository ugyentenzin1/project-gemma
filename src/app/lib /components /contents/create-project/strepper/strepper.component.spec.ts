import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrepperComponent } from './strepper.component';

describe('StrepperComponent', () => {
  let component: StrepperComponent;
  let fixture: ComponentFixture<StrepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarrayComponent } from './farray.component';

describe('FarrayComponent', () => {
  let component: FarrayComponent;
  let fixture: ComponentFixture<FarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

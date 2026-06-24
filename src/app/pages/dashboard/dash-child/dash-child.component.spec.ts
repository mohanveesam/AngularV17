import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChildComponent } from './dash-child.component';

describe('DashChildComponent', () => {
  let component: DashChildComponent;
  let fixture: ComponentFixture<DashChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

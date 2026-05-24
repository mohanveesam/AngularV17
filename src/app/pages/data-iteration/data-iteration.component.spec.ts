import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataIterationComponent } from './data-iteration.component';

describe('DataIterationComponent', () => {
  let component: DataIterationComponent;
  let fixture: ComponentFixture<DataIterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataIterationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataIterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

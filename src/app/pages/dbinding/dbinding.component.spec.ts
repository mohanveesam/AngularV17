import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbindingComponent } from './dbinding.component';

describe('DbindingComponent', () => {
  let component: DbindingComponent;
  let fixture: ComponentFixture<DbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

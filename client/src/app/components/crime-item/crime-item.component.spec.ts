import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeItemComponent } from './crime-item.component';

describe('CrimeItemComponent', () => {
  let component: CrimeItemComponent;
  let fixture: ComponentFixture<CrimeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrimeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrimeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

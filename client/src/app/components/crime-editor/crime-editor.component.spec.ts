import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeEditorComponent } from './crime-editor.component';

describe('CrimeEditorComponent', () => {
  let component: CrimeEditorComponent;
  let fixture: ComponentFixture<CrimeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrimeEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrimeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

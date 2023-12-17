import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Crime } from '../../models/models';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { CrimesState } from '../../state/crimes/crimes.selector';
import { createCrime, editCrime } from '../../state/crimes/crimes.actions';

@Component({
  selector: 'crm-crime-editor',
  standalone: true,
  imports: [FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatIconModule,
            ColorPickerModule
          ],
  templateUrl: './crime-editor.component.html',
  styleUrl: './crime-editor.component.scss'
})
export class CrimeEditorComponent implements OnInit,OnChanges{
  @Input() crime:Crime | null = null;
  @Input() sideNav:MatDrawer | null= null;
  color:string='black';
  @Output() close = new EventEmitter();
  isEditMode = false;
  crimeForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder,private store: Store<CrimesState>){}
  
  ngOnInit() {
    this.crimeForm = this.fb.group({
      name: ['', Validators.required],
      desciprtion: ['', [Validators.required]],
    });
   
  }
  ngOnChanges() {
    if(this.crime){
      this.crimeForm.patchValue({
        name: this.crime.name,
        desciprtion: this.crime.desciprtion,
      });
      this.isEditMode = true;
      this.color = this.crime.color;
      
    }
  }

  onSubmit() {
    if (this.crimeForm.valid) {
      
      if (this.isEditMode) {
        const crime:Crime = {
          id:this.crime?.id || -1,
          name: this.crimeForm.get('name')?.value,
          desciprtion: this.crimeForm.get('desciprtion')?.value,
          color:this.color,
          createDate: this.crime?.createDate || new Date(),
          lastUpdate: new Date(),
          createdBy: 'admin',
      }
        this.store.dispatch(editCrime({crime}));
      } else {
        const crime:Crime = {
          id:-1,
          name: this.crimeForm.get('name')?.value,
          desciprtion: this.crimeForm.get('desciprtion')?.value,
          color:this.color,
          createDate: new Date(),
          lastUpdate: new Date(),
          createdBy: 'admin',
      }
        this.store.dispatch(createCrime({crime}));
      }
      
      this.close.emit();
      this.onClose();
    }
    
    
  }
  onClose(){
    this.crimeForm.reset();
    Object.keys(this.crimeForm.controls).forEach(key => {
      const control = this.crimeForm.get(key);
      control?.markAsPristine();
      control?.markAsUntouched();
      control?.clearValidators();
    });
    this.close.emit();
    this.sideNav?.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CrimeTableComponent } from './components/crime-table/crime-table.component';
import { Store } from '@ngrx/store';
import { CrimesState, selectCrimesList } from './state/crimes/crimes.selector';
import { loadCrimes } from './state/crimes/crimes.actions';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CrimeListComponent } from './components/crime-list/crime-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CrimeEditorComponent } from './components/crime-editor/crime-editor.component';
import { ManagementToolComponent } from './components/management-tool/management-tool.component';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatInputModule, 
    ManagementToolComponent,
    CrimeEditorComponent,
    MatSidenavModule,
    MatIconModule,
    CrimeListComponent,
    CrimeTableComponent,
    CommonModule,  
    RouterOutlet,
    HttpClientModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  crimes$ = this.store.select(selectCrimesList); 
  isTableView = true;
  
  constructor(private store: Store<CrimesState>) {}
  
  ngOnInit() {
    this.store.dispatch(loadCrimes());  
  }
}

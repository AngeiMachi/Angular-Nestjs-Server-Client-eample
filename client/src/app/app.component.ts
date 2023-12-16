import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CrimeTableComponent } from './components/crime-table/crime-table.component';
import { Store } from '@ngrx/store';
import { CrimesState, selectCrimesList } from './state/crimes/crimes.selector';
import { LoadCrimes } from './state/crimes/crimes.actions';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CrimeListComponent } from './components/crime-list/crime-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
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
    this.store.dispatch(LoadCrimes()); 
    
  }
}

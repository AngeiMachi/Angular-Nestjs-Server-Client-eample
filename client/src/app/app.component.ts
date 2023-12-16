import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CrimeTableComponent } from './components/crime-table/crime-table.component';
import { Store } from '@ngrx/store';
import { CrimesState, selectCrimesList } from './state/crimes/crimes.selector';
import { LoadCrimes } from './state/crimes/crimes.actions';
import { Crimes } from './models/models';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CrimeTableComponent,
    CommonModule, 
    RouterOutlet,
    HttpClientModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  items$ = this.store.select(selectCrimesList); 
  
  constructor(private store: Store<CrimesState>) {}
  
  ngOnInit() {
    this.store.dispatch(LoadCrimes()); 
    
  }
}

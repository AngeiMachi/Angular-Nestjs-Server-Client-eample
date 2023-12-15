import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CrimeTableComponent } from './components/crime-table/crime-table.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CrimesState, selectCrimes } from './state/crimes/crimes.selector';
import { LoadCrimes } from './state/crimes/crimes.actions';
import { Crimes } from './models/models';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet,CrimeTableComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  items$: Observable<Crimes[]>= new Observable<Crimes[]>(); 
  
  constructor(private store: Store<CrimesState>) {}
  
  ngOnInit() {
    this.store.dispatch(LoadCrimes()); 
    this.items$ = this.store.select(selectCrimes); 
  }
}

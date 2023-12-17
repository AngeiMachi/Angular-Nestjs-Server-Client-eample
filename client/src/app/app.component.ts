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
import { MatSidenavModule} from '@angular/material/sidenav';
import { CrimeEditorComponent } from './components/crime-editor/crime-editor.component';
import { ManagementToolComponent } from './components/management-tool/management-tool.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { Crime } from './models/models';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
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
  crimes$ = this.store.select(selectCrimesList)
  slectedCrime: Crime | null = null;
  
  isTableView = true;
  searchTerm = '';
  
  constructor(private store: Store<CrimesState>) {}
  
  ngOnInit() {
    this.store.dispatch(loadCrimes());  
  }
  editCrime(crime: Crime) {
    this.slectedCrime = crime;
    
  }
  clearCrime(){
    this.slectedCrime = null;
  }
  onInputChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.filterCrimes();
  }

  private filterCrimes(): void {
    this.crimes$ = this.store.select(selectCrimesList).pipe(
      map(crimes => {
        if (!this.searchTerm) {
          return crimes; // If search term is empty, return all crimes
        } else {
          return crimes.filter(crime => 
            crime.name?.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        }
      })
    );
  }
}

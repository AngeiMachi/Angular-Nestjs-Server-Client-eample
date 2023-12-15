import { Component, Input, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Crimes } from '../../models/models';

@Component({
  selector: 'crm-crime-table',
  standalone: true,
  imports:  [MatTableModule, MatPaginatorModule],
  templateUrl: './crime-table.component.html',
  styleUrl: './crime-table.component.scss'
})
export class CrimeTableComponent {
  @Input() crimes:Crimes[]=[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Crimes>(this.crimes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  color:string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {color:'red', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {color:'red',position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {color:'red',position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {color:'red',position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {color:'red',position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {color:'red',position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {color:'red',position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {color:'red',position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {color:'red',position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {color:'red',position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {color:'red',position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {color:'red',position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {color:'red',position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {color:'red',position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {color:'red',position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {color:'red',position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {color:'red',position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {color:'red',position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {color:'red',position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {color:'red',position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
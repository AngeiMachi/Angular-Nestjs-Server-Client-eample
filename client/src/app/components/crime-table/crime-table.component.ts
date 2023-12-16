import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
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
export class CrimeTableComponent implements AfterViewInit,OnChanges{ 
  @Input() crimes:Crimes[] | null=[];
  displayedColumns: string[] = ['color','name', 'createDate', 'lastUpdate', 'createdBy'];
  dataSource = new MatTableDataSource<Crimes>(this.crimes as Crimes[]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Crimes>(this.crimes as Crimes[]);
    this.dataSource.paginator = this.paginator;
  }
}


import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Crime } from '../../models/models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'crm-crime-table',
  standalone: true,
  imports:  [DatePipe,MatTableModule, MatPaginatorModule],
  templateUrl: './crime-table.component.html',
  styleUrl: './crime-table.component.scss'
})
export class CrimeTableComponent implements AfterViewInit,OnChanges{ 
  @Input() crimes:Crime[] | null=[];
  displayedColumns: string[] = ['color','name', 'createDate', 'lastUpdate', 'createdBy'];
  dataSource = new MatTableDataSource<Crime>(this.crimes as Crime[]);
  @Output() rowClick= new EventEmitter<Crime>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Crime>(this.crimes as Crime[]);
    this.dataSource.paginator = this.paginator;
  }
}


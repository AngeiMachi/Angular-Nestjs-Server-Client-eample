import { Component, Input } from '@angular/core';
import { CrimeItemComponent } from '../crime-item/crime-item.component';
import { Crime } from '../../models/models';

@Component({
  selector: 'crm-crime-list',
  standalone: true,
  imports: [CrimeItemComponent],
  templateUrl: './crime-list.component.html',
  styleUrl: './crime-list.component.scss'
})
export class CrimeListComponent {
  @Input() crimes: Crime[] | null = [];
}

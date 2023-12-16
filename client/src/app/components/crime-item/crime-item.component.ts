import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'crm-crime-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './crime-item.component.html',
  styleUrl: './crime-item.component.scss'
})
export class CrimeItemComponent {
  @Input() color:string='black';
  @Input() name:string='';
}

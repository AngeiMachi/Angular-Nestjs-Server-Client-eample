import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'crm-management-tool',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './management-tool.component.html',
  styleUrl: './management-tool.component.scss'
})
export class ManagementToolComponent {
    @Input() isTableView = true;
    @Output() toggleTableView = new EventEmitter<boolean>();
    @Output() createNewCrime = new EventEmitter();
}

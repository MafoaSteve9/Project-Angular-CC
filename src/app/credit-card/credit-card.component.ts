import { Component, Input } from '@angular/core';
import { DataCard } from '../interfaces/data-card.interface';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {
  
  @Input() card: DataCard | undefined;
}

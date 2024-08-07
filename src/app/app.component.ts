import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CardFormComponentComponent } from './card-form-component/card-form-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreditCardComponent, CardFormComponentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface DataCard {
  bank: string,
  numcard: string[]
  expiry: string,
  firstname: string,
  lastname: string

  
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  pNone: 'visible' | 'hidden' = 'visible'

  card:  DataCard = {
    bank: "Caisse d'épargne",
    numcard: ['5600', '7890', '1200', '0340'],
    expiry: "12/28",
    firstname: "John",
    lastname: "Doe"
  }

  methodRandom(): number {
    return Math.floor(Math.random() * 900) + 100
  }
  displayNone() {
    if (this.pNone === 'visible') {
      this.pNone = 'hidden'
    } else {
      this.pNone = 'visible'
    }
  } 
  
}

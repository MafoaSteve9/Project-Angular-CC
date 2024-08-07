import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataCard } from '../interfaces/data-card.interface';
import { CreditCardComponent } from "../credit-card/credit-card.component";
@Component({
  selector: 'app-card-form-component',
  standalone: true,
  imports: [ReactiveFormsModule, CreditCardComponent],
  templateUrl: './card-form-component.component.html',
  styleUrl: './card-form-component.component.scss'
})
export class CardFormComponentComponent {
  form: FormGroup;
  card:  DataCard = {
    bank: "Caisse d'épargne",
    numcard: ['5967', '8456', '1290', '0340'],
    expiry: '12/29',
    firstname: "John",
    lastname: "Doe",
    cvc: 123
  };
  
constructor(private fb: FormBuilder) {
this.form = this.fb.group({
  cardFirstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
  cardLastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
  cardNumber: this.fb.array([
   this.fb.control('', [Validators.required, Validators.maxLength(4)]),
   this.fb.control('', [Validators.required, Validators.maxLength(4)]),
   this.fb.control('', [Validators.required, Validators.maxLength(4)]),
   this.fb.control('', [Validators.required, Validators.maxLength(4)])
]),
  expDate: ['', [Validators.required]],
  cvc: [0, [Validators.required, Validators.pattern(/^\d{3}$/)]]
 });
}


get cardNumberControls() {
  return (this.form.get('cardNumber') as FormArray).controls
}

onSubmit() {
  if (this.form.valid) {
      const formData = this.form.value;
      const cardNumberArray = formData.cardNumber.join('');
      this.card = {
        ...this.card,
        firstname: formData.cardFirstname,
        lastname: formData.cardLastname,
        numcard: cardNumberArray.match(/.{1,4}/g) ?? this.card.numcard,
        expiry: formData.expDate,
        cvc: formData.cvc
      };
      console.log(this.card);
    } else {
      console.log('Form is invalid');
    }
  }
}

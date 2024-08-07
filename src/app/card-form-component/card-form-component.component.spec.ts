import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormComponentComponent } from './card-form-component.component';

describe('CardFormComponentComponent', () => {
  let component: CardFormComponentComponent;
  let fixture: ComponentFixture<CardFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFormComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

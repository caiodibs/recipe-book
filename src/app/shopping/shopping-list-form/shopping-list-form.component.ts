import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-form',
  templateUrl: './shopping-list-form.component.html',
  styleUrls: ['./shopping-list-form.component.scss']
})
export class ShoppingListFormComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(ingredient);
  }

}

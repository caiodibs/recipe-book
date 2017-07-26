import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
export class ShoppingService {
    public eventChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
    ];
    getIngredient() {
        return this.ingredients.slice();
    }
    setIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.eventChanged.emit(this.ingredients.slice());
    }
}

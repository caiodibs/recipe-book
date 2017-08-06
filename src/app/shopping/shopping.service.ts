import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingService {
    public eventChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
    ];
    getIngredient() {
        return this.ingredients.slice();
    }
    setIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.eventChanged.next(this.ingredients.slice());
    }
}

import { Subscription } from 'rxjs/Subscription';
import { ShoppingService } from './shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
    private subscription: Subscription;
    ingredients: Ingredient[];
    constructor(private shoppingService: ShoppingService) { }

    // Subscribing to receive ingredient changes
    ngOnInit() {
        this.ingredients = this.shoppingService.getIngredient();
        this.subscription = this.shoppingService.eventChanged.subscribe(
        (ingredient: Ingredient[]) => {
            this.ingredients = ingredient;
        }
        );
    }

    onAddIngredient(ingredient: Ingredient) {
        this.shoppingService.setIngredient(ingredient)
    }

    // Unsubscribing manualy. Manualy created observables must be destroyed either way.
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

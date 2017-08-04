import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    // Setting new recipes
    private recipes: Recipe[] = [
        new Recipe('French fries',
            'French fries with some meat',
            'https://www.colourbox.com/preview/3033329-grilled-beef-steak-with-french-fries-and-sauce-served-in-plate-isolated.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 10)
        ]),
        new Recipe('Hamburger',
            'Great hamburger',
            'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/hero_pdt_hamburger.png',
        [
            new Ingredient('Buns', 3),
            new Ingredient('Meat', 6),
        ])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
    getOneRecipe(id: number) {
        return this.recipes.slice()[id];
    }
    getDetail(param) {
        this.recipeSelected.emit(param);
    }
}

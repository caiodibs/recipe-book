import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    // Setting new recipes
    private recipes: Recipe[] = [
        new Recipe('Test Recipe',
            'testing',
            'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 10)
        ]),
        new Recipe('Test Recipe2',
            'testing',
            'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
        [
            new Ingredient('Buns', 3),
            new Ingredient('Meat', 6),
        ])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
    getDetail(param) {
        this.recipeSelected.emit(param);
    }
}

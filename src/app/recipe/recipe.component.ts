import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss'],
    providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
    selectedItem: Recipe;
    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeService.recipeSelected.subscribe(
        (Recipe: Recipe) => {
            this.selectedItem = Recipe;
        }
        );
    }

}

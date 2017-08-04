import { RecipeService } from '../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

    // Setting new recipes
    recipes: Recipe[];

    constructor(
        private recipeService: RecipeService,
        private route: Router,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }
    addRecipe() {
        this.route.navigate(['new'], {relativeTo: this.activeRoute})
    }

}

import { RecipeService } from './../recipe.service';
import { ShoppingService } from './../../shopping/shopping.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;
  constructor(
    private shoppingService: ShoppingService,
    private recipeService: RecipeService,
    private routes: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.recipe = this.recipeService.getOneRecipe(this.recipeId);
      }
    )
  }

  // Adding recipe ingredients to shopping list
  addRecipe() {
    this.recipe.ingredients.map((arr) => {
      this.shoppingService.setIngredient(arr);
    });
  }
  editRecipe() {
        this.routes.navigate(['edit'], {relativeTo: this.route})
    }

}

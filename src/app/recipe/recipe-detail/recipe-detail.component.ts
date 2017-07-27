import { ShoppingService } from './../../shopping/shopping.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  // Adding recipe ingredients to shopping list
  addRecipe() {
    this.recipe.ingredients.map((arr) => {
      this.shoppingService.setIngredient(arr);
    });
  }

}

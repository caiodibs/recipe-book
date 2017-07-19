import { Recipe } from './../recipe.model';
import { element } from 'protractor';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  // Setting new recipes
  recipes: Recipe[] = [
    new Recipe('Test Recipe',
        'testing',
        'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
    new Recipe('Test Recipe2',
        'testing',
        'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  ];

  @Output() showRecipeItem = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecepeSelected(element: Recipe) {
    this.showRecipeItem.emit(element);
  }

}

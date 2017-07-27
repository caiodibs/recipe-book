import { RecipeService } from './../../recipe.service';
import { Recipe } from '.././../recipe.model';
import { Component, OnInit, Input, } from '@angular/core';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

    @Input() recipes: Recipe;

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
    }

    onSelectItem( ) {
        this.recipeService.getDetail(this.recipes);
    }

}

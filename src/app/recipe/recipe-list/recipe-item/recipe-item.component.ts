import { Recipe } from '.././../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipes: Recipe;

  @Output() showDetail = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelectItem( ) {
    this.showDetail.emit();
  }

}

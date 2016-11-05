import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor() { }
  selectedRecipe: Recipe;

  ngOnInit() {
  }

  recipeChanged( recipe: Recipe) {
    console.log("recipe changed and set", recipe);
    this.selectedRecipe = recipe;
  }

}
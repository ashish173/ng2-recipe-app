import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe = new Recipe('Dish1', 'Very yummy Dish1', '../../../assets/dish1.jpeg');

  recipes: Recipe[] = []; 
  

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    console.log("recipe selected" ,recipe)
    this.recipeSelected.emit(recipe);
  }

}

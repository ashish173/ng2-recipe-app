import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe = new Recipe('Dish1', 'Very yummy Dish1', '../../../assets/dish1.jpeg');

  recipes: Recipe[] = [
    new Recipe('Dish 1', 'Very tasty dish 1', '../../../assets/dish1.jpeg', []),
    new Recipe('Dish 2', 'Very tasty dish 2', '../../../assets/dish2.jpeg', []),
    new Recipe('Dish 3', 'Very tasty dish 3', '../../../assets/dish3.jpeg', [])
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    console.log("recipe selected" ,recipe)
    this.recipeSelected.emit(recipe);
  }

}

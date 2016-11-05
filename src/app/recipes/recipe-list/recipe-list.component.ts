import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'dummy', 'http://placehold.it/50x50');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    console.log("recipe selected" ,recipe)
    this.recipeSelected.emit(recipe);
  }

}

import { RecipesComponent } from './recipes.component';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Ingredient } from '../shared/ingredient';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dish 1', 'Very tasty', '../../../assets/dish1.jpeg', [
      new Ingredient('Brocclie', 2),
      new Ingredient('Meat', 1)      
    ]),
    new Recipe('Dish 2', 'Okayish', '../../../assets/dish2.jpeg', [
      new Ingredient('Lettuce', 2),
      new Ingredient('Capsicum', 1)
    ]),
    new Recipe('Dish 3', 'Good', '../../../assets/dish3.jpeg', [
      new Ingredient('Onion', 2),
      new Ingredient('Cucumber', 1)
    ])
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    var index = this.recipes.indexOf(recipe, 0);
    if (index > -1) {
      this.recipes.splice(index, 1);
    }
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json' 
    });
    return this.http.post('https://recipebook-15d53.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {

  }

}

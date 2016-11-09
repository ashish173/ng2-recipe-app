import { RecipesComponent } from './recipes.component';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx'; 
// for map method on http service
// More on this link http://stackoverflow.com/questions/34515173/angular-2-http-get-with-typescript-error-http-get-map-is-not-a-function-in

import { Ingredient } from '../shared/ingredient';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  // Refactor this later move this URL out of this class
  private backEndUrl: string = 'https://recipebook-15d53.firebaseio.com';
  recipesChanged = new EventEmitter<Recipe[]>();

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
    // Refactor this URL creation part later
    return this.http.put(this.backEndUrl + '/recipes' + '.json', body, {headers: headers});
  }

  fetchData() {
    // Refactor this URL creation part later    
    return this.http.get(this.backEndUrl + '/recipes' + '.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
           this.recipes = data;
           // here we could also just pass a message and let interested 
           // components call the getRecipes() method
           this.recipesChanged.emit(this.recipes);
        }
      );
  }
}

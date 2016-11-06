import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dish 1', 'Very tasty', '../../../assets/dish1.jpeg', []),
    new Recipe('Dish 2', 'Okayish', '../../../assets/dish2.jpeg', []),
    new Recipe('Dish 3', 'Good', '../../../assets/dish3.jpeg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}

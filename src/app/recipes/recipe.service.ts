import { Injectable } from '@angular/core';

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

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
